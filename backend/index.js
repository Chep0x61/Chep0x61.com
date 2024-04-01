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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use("/api/contact", contactRoute);
app.use("/api/hero", heroRoute);
app.use("/api/languages", languagesRoute);
app.use("/api/navbar", navbarRoute);
app.use("/api/about", aboutRoute);
app.use("/api/educational", educationalRoute);
app.use("/api/professional", professionalRoute);
app.use("/api/skills", skillsRoute);
app.use("/api/certifications", certificationsRoute);
app.use("/api/projects", projectsRoute);

app.get('/api', (req, res) => {
    try {
        res.status(200).json({ message: 'API is working' });
    } catch (e) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
