const express = require ("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const BD = [
    {
        email: "carlos@gmail.com",
        senha: "1234"
    }
]

app.post( "/login", (req, res) =>
{

const email = req.body.email
const senha = req.body.senha
   const user = BD.find(u => u.email === email)
    if(user === undefined) {
        return res.status(404).json({
            error: "Usuário não encontrado."
        })
    }

    if(user.senha !== senha) {
        return res.status(401).json({
            error:"Senha não autorizada"
        })
    }

    return res.status(200).json({
        message: "Usuário logado com sucesso"
    })

} )

app.post( "/register", (req, res) =>
{

    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha


    const user = BD.find(u => u.email === email)


    if(user) {
        return res.status(400).json({
            error:"Esse Usuário ja existe!"
        })
    }

    BD.push({ 
        email:email,
        nome:nome,
        senha:senha
     })

    return res.status(200).json({
        message: "Usuário cadastrado com sucesso"
    })

} )

app.listen(3000)