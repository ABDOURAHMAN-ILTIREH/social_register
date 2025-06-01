const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser")

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cookieParser());


const PORT = process.env.PORT;
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));



// Middleware pour parser le JSON

// Utiliser les routes
app.use('/api', require('./router/authuserRoutes'));
app.use('/api', require('./router/usersRoutes'));
app.use('/api', require('./router/menagesRoutes'));
app.use('/api', require('./router/enqueterRoutes'));
app.use('/api', require('./router/logementRoutes'));
app.use('/api', require('./router/equipementRoutes'));
app.use('/api', require('./router/personnesRoutes'));
app.use('/api', require('./router/plainteRoutes'));
app.use('/api', require('./router/entretienRoutes'));


// Démarrer le serveur

app.listen(PORT, async () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});