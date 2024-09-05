const app = require('./api'); // Importa o aplicativo Express configurado no api/index.js
const port = process.env.PORT || 3001; // Usa a porta especificada em variáveis de ambiente ou 3000 por padrão

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
