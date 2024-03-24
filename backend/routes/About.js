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

        const about = await prisma.AboutMe.findMany({
            include: {
                translations: {
                    where: {
                        translationCode: lang
                    }
                }
            }
        });

        const filteredAbout = about.filter(aboutItem => aboutItem.translations.length > 0);

        res.json({ languages: filteredAbout });

    } catch (error) {
        res.status(500).json({ error: 'Error while getting languages' });
    }
});

module.exports = router