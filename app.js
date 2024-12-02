const express = require("express");
const app = express();
const port = 3000;

const recipes = [
    {
        titolo: "Ciambella",
        contenuto: "Torta Savarin",
        immagine: "",
        tags: ["pasticceria", "uova", "latte", "zucchero"]        
    },
    {
        titolo: "Cracker",
        contenuto: "Cracker alla barbabietola",
        immagine: "",
        tags: ["croccante", "healthy", "biologico", "tostato"]
    },
    {
        titolo: "Pane fritto",
        contenuto: "Pane dolce fritto",
        immagine: "",
        tags: ["croccante", "fritto", "farina", "zucchero"]
    },
    {
        titolo: "Pasta",
        contenuto: "Pasta alla barbabietola",
        immagine: "",
        tags: ["sugo", "vegetale", "biologico", "buona"]
    },
    {
        titolo: "Torta",
        contenuto: "Torta paesana",
        immagine: "",
        tags: ["morbida", "pane", "cacao", "pinoli"]
    },
];

app.get('/', (req, res) => {
    res.json ({
        message: "Server del mio blog"
    });
});

app.get('/bacheca', (req, res) => {
    res.json ({

    })
})

app.listen(port, () => {
    console.log('server partito');
});