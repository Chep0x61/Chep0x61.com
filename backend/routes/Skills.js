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

        const skills = await prisma.skill.findMany({
            include: {
                translations: {
                    where: {
                        translationCode: lang
                    }
                }
            }
        });

        const filteredSkills = skills.filter(skillsItem => skillsItem.translations.length > 0);

        res.json({ languages: filteredSkills });

    } catch (error) {
        res.status(500).json({ error: 'Error while getting languages' });
    }
});

module.exports = router