const express = require("express");
const router = express.Router()
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
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
                        translationCode: lang
                    }
                }
            }
        });

        const filteredLanguages = languages.map(language => {
            return {
                ...language,
                translations: language.translations.filter(translation => translation.translationCode === lang)
            };
        });

        res.json({ languages: filteredLanguages });

    } catch (error) {
        res.status(500).json({ error: 'Error while getting languages' });
    }
});

module.exports = router