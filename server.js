import app from './app.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
    if(error) return console.log({mensagem:{erro:error}})
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})