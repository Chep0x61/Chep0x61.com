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
            lang = 'en';
        }

        const certifications = await prisma.certification.findMany({
            include: {
                translations: {
                    where: {
                        translationCode: lang
                    }
                }
            }
        });

        const filteredCertifications = certifications.filter(certificationsItem => certificationsItem.translations.length > 0);

        res.json({ languages: filteredCertifications });

    } catch (error) {
        res.status(500).json({ error: 'Error while getting languages' });
    }
});

module.exports = router