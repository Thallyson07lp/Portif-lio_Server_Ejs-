import express from "express";

const app = express();

app.set('view engine', 'ejs');

//Arquivos estaticos 
app.use(express.static('public'));

//rota principal
app.get('/', (req, res) =>{
    res.render("index")
})
// rota para páginas inexistentes
app.use((req, res) => {
  res.status(404).render("404");
});

export const port = 7777;
export default app; 
