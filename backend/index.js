const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    try {
        res.status(200).json({ message: 'API is working' });
    } catch (e) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/languages', async (req, res) => {
    try {
        const supportedLanguages = ['en', 'fr'];
        let lang = req.query.lang;

        if (!lang) {
            lang = 'en';
        }

        if (!supportedLanguages.includes(lang)) {
            return res.status(400).json({ error: 'Unsupported language' });
        }

        const languages = await prisma.language.findMany({
            include: {
                translations: {
                    where: {
                        languageCode: lang
                    }
                }
            }
        });

        const filteredLanguages = languages.map(language => {
            return {
                ...language,
                translations: language.translations.filter(translation => translation.languageCode === lang)
            };
        });

        res.json({ languages: filteredLanguages });

    } catch (error) {
        res.status(500).json({ error: 'Error while getting languages' });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
