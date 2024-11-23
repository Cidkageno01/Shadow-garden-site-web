const express = require('express');
const ytdl = require('ytdl-core');
const cors = require('cors');

const app = express();
app.use(cors()); // Autoriser les requêtes entre domaines

// Route pour télécharger une vidéo
app.get('/download', async (req, res) => {
    const videoId = req.query.videoId;

    if (!videoId) {
        return res.status(400).send('Veuillez fournir un ID de vidéo.');
    }

    try {
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title.replace(/[^a-zA-Z0-9]/g, '_'); // Nettoyer le titre

        res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);

        ytdl(url, { format: 'mp4' }).pipe(res);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors du téléchargement de la vidéo.');
    }
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
