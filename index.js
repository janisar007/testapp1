const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.json({name: "janisar"})

})

app.listen(3000, () => console.log("listing on 3000"))