import express from "express";

const app = express();

app.set('view engine', 'ejs');

//Arquivos estaticos 
app.use(express.static('public'));

//rota principal
app.get('/', (req, res) =>{
    res.render("index")
})


export const port = 7777;
export default app; 
