var express = require('express');
var router = express.Router();

var Post = require('../models/Post');

/**
 * Acessar o arquivo 'add' que está na pasta de views
 * http://localhost:3000/form
 */
router.get('/form', function (req, res, next) {
    res.render('add', { title: "Formulário de Inscrição" })
})

/**
 * Acessar a rota http://localhost:3000/add para realizar o cadastro
 */
router.post("/add", function (req, res, next) {
    Post.create({
        name: req.body.name,
        phone: req.body.phone,
        dateBirthday: req.body.dateBirthday,
        gender: req.body.gender,
        email: req.body.email,
    })
        .then(function () {
            console.log("Inscrição realizada com sucesso!")
            res.redirect("/list")
        })
        .catch(function (error) {
            res.send("Erro ao realizar inscrição. Erro: " + error)
        })
})

module.exports = router;
