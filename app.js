import {fastify} from "fastify";
import fastifyView from '@fastify/view'//Estudar
import ejs from 'ejs'//Estudar

import fastifyStatic from '@fastify/static'//Estudar
import { fileURLToPath } from 'url'//Estudar
import path from 'path'//Estudar


const server = fastify() //Estudar
const __dirname = path.dirname(fileURLToPath(import.meta.url))//Estudar

server.register(fastifyView, {
  engine: { ejs },
  root: './views', // pasta onde ficam os templates
})//Estudar

//Arquivos estaticos 
server.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
})

//rota principal
server.get('/', async (req, res) => {
  return res.view('index.ejs')
})//Estudar



export const port = 7777;
export default server; 
