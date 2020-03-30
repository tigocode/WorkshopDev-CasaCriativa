
// ► Usando o express para criar e configurar meu servidor.

const express = require("express")
const server = express()

// ►
const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Curso de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur doloribus maxime illum consequatur quo quas, neque quasi ullam dicta animi quod reiciendis. Quis facilis, animi distinctio eaque rem harum.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur doloribus maxime illum consequatur quo quas, neque quasi ullam dicta animi quod reiciendis. Quis facilis, animi distinctio eaque rem harum.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur doloribus maxime illum consequatur quo quas, neque quasi ullam dicta animi quod reiciendis. Quis facilis, animi distinctio eaque rem harum.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em Familia",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur doloribus maxime illum consequatur quo quas, neque quasi ullam dicta animi quod reiciendis. Quis facilis, animi distinctio eaque rem harum.",
        url: "http://rocketseat.com.br"
    },
]

// ► Configuração dos arquivos estáticos: CSS, SCRIPT E IMAGENS.
server.use(express.static("public"))

// ► Configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true // ► Boolean
})

// ► Rota criada.
// ► Captura do pedido do cliente para responder.
server.get("/", function(req, res) {

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if(lastIdeas.length < 3) {
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function(req, res) {

    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html", {ideas: reversedIdeas })
})

// ► Servidor ligado na porta: 3000
server.listen(3000)