const express = require("express");
const app = express();
const port = 3000;

const recipes = [
    {
        titolo: "Ciambella",
        contenuto: "Torta Savarin",
        immagine: "ciambellone.jpeg",
        tags: ["pasticceria", "uova", "latte", "zucchero"]        
    },
    {
        titolo: "Cracker",
        contenuto: "Cracker alla barbabietola",
        immagine: "cracker_barbabietola.jpeg",
        tags: ["croccante", "healthy", "biologico", "tostato"]
    },
    {
        titolo: "Pane fritto",
        contenuto: "Pane dolce fritto",
        immagine: "pane_fritto_dolce.jpeg",
        tags: ["croccante", "fritto", "farina", "zucchero"]
    },
    {
        titolo: "Pasta",
        contenuto: "Pasta alla barbabietola",
        immagine: "pasta_barbabietola.jpeg",
        tags: ["sugo", "vegetale", "biologico", "buona"]
    },
    {
        titolo: "Torta",
        contenuto: "Torta paesana",
        immagine: "torta_paesana.jpeg",
        tags: ["morbida", "pane", "cacao", "pinoli"]
    },
];

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.json({
        message: "Server del mio blog"
    });
});

app.get('/bacheca', (req, res) => {
    res.json(recipes);
});

app.listen(port, () => {
    console.log('server partito');
});