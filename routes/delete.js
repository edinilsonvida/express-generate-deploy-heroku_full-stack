var express = require('express');
var router = express.Router();

var Post = require('../models/Post');

router.get("/delete/:id", function(req, res, next) {
    Post.destroy({ where: { id: req.params.id }})
    .then(function () {
        res.redirect("/list");
    })
    .catch(function(erro) {
        res.send("Erro ao excluir a inscrição! " + erro)
    })
});

module.exports = router;