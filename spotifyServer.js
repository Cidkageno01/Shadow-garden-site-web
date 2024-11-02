// spotifyServer.js
const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.use(express.static("public")); // Pour servir le fichier HTML

// Route pour rechercher une chanson sur Spotify
app.get("/api/searchSpotify", async (req, res) => {
    const query = req.query.query;
    if (!query) {
        return res.status(400).send("Veuillez fournir un terme de recherche.");
    }

    try {
        const response = await axios.get(`https://spotify-play-iota.vercel.app/spotify?query=${encodeURIComponent(query)}`);
        res.json(response.data.tracks);
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API Spotify :", error);
        res.status(500).send("Erreur lors de la recherche de la chanson.");
    }
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
