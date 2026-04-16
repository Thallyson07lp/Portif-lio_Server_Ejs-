import server, { port } from "./app.js"

try {

  await server.listen({
    port,
    host: "0.0.0.0"
  });
  console.log(`Servidor na porta ${port} online...`);

} catch (err) {

  server.log.error(err)
  process.exit(1)

}