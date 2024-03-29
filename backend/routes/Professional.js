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

        const professional = await prisma.professional.findMany({
            include: {
                translations: {
                    where: {
                        translationCode: lang
                    }
                }
            }
        });

        const filteredProfessional = professional.filter(professionalItem => professionalItem.translations.length > 0);

        res.json({ languages: filteredProfessional });

    } catch (error) {
        res.status(500).json({ error: 'Error while getting languages' });
    }
});

module.exports = router