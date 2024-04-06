const express = require('express');
const app = express();

const contactRoute = require('./routes/Contact');
const heroRoute = require('./routes/Hero');
const languagesRoute = require('./routes/Languages');
const navbarRoute = require('./routes/Navbar');
const aboutRoute = require('./routes/About');
const educationalRoute = require('./routes/Educational');
const professionalRoute = require('./routes/Professional');
const skillsRoute = require('./routes/Skills');
const certificationsRoute = require('./routes/Certifications');
const projectsRoute = require('./routes/Projects');

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'www.chep0x61.com,chep0x61.com');
    res.setHeader('Access-Control-Allow-Methods','GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use("/contact", contactRoute);
app.use("/hero", heroRoute);
app.use("/languages", languagesRoute);
app.use("/navbar", navbarRoute);
app.use("/about", aboutRoute);
app.use("/educational", educationalRoute);
app.use("/professional", professionalRoute);
app.use("/skills", skillsRoute);
app.use("/certifications", certificationsRoute);
app.use("/projects", projectsRoute);

app.get('/', (req, res) => {
    try {
        res.status(200).json({ message: 'API is working' });
    } catch (e) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
