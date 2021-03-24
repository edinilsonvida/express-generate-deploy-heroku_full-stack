var express = require('express');
var router = express.Router();

var Post = require('../models/Post');

/**
 * Acessar o arquivo 'edit' que está na pasta de views
 * http://localhost:3000/edit/:id
 */
router.get('/edit/:id', function (req, res, next) {
    Post.findByPk(req.params.id)
        .then((post) => {
            res.render('edit', {
                title: "Formulário de Edição",
                id: req.params.id,
                name: post.name,
                phone: post.phone,
                dateBirthday: post.dateBirthday,
                gender: post.gender,
                email: post.email,
            });
        })
        .catch((error) => {
            res.send("Erro ao localizar a postagem!" + error)
        })
})

/**
 * Acessar a rota http://localhost:3000/edition/:id para realizar a edição
 */
router.post("/edition/:id", function (req, res, next) {
    Post.update({
        name: req.body.name,
        phone: req.body.phone,
        dateBirthday: req.body.dateBirthday,
        gender: req.body.gender,
        email: req.body.email,
    },
        { where: { id: req.params.id }, }
    )
        .then(function () {
            console.log("Inscrição atualizada com sucesso!")
            res.redirect("/list")
        })
        .catch(function (error) {
            res.send("Erro ao atualizar inscrição. Erro: " + error)
        })
})

module.exports = router;
