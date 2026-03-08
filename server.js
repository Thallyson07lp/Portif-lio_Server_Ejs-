import app, {port} from "./app.js"

app.listen(port, ()=>{
    console.log(`Servidor da porta ${port} onine...`)
})