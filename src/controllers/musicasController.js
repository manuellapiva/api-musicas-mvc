const musicasModel = require("../models/musicasModel");

function listarMusicas(req, res) {
  try {
    const musicas = musicasModel.listarMusicas();
    res.status(200).json(musicas);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao listar musicas",
      erro: erro.message,
    });
  }
}

function buscarPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        mensagem: "ID inválido - deve ser um número",
      });
    }
    const musica = musicasModel.buscarPorId(id);
    if (musica) {
      res.status(200).json(musica);
    } else {
      res.status(404).json({
        mensagem: `Musica com ID ${id} não encontrada`,
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao buscar musica",
      erro: erro.message,
    });
  }
}

function criar(req, res) {
  try {
    const { nomemusica, autor, link } = req.body;
    if (!nomemusica || !autor || !link) {
      return res.status(400).json({
        mensagem:
          "Todos os campos são obrigatórios: nomemusica, autor , link",
      });
    }

    const novaMusica = musicasModel.criar({
      nomemusica,
      autor,
      link,
    });
    res.status(201).json(novaMusica);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao criar música",
      erro: erro.message,
    });
  }
}

function atualizar(req, res) {
  try {
    const id = parseInt(req.params.id);
    const { nomemusica,autor , link} = req.body;
    if (isNaN(id)) {
      return res.status(400).json({
        mensagem: "ID inválido",
      });
    }
    if (!nomemusica || !autor || !link) {
      return res.status(400).json({
        mensagem: "Todos os campos são obrigatórios para atualização completa",
      });
    }

    const musicaAtualizada = musicasModel.atualizar(id, {
      nomemusica,
      autor,
      link,
    });
    if (musicaAtualizada) {
      res.status(200).json(musicaAtualizada);
    } else {
      res.status(404).json({
        mensagem: `Música com ID ${id} não encontrada`,
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao atualizar música",
      erro: erro.message,
    });
  }
}

function deletar(req, res) {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        mensagem: "ID inválido",
      });
    }

    const deletado = musicasModel.deletar(id);
    if (deletado) {
      res.status(200).json({
        mensagem: `Música com ID ${id} removida com sucesso`,
      });
    } else {
      res.status(404).json({
        mensagem: `Música com ID ${id} não encontrada`,
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao deletar música",
      erro: erro.message,
    });
  }
}

function buscarPorNome(req, res) {
  try {
    const { nomemusica } = req.params;
    const musicas = musicasModel.buscarPorNome(nomemusica);
    res.status(200).json(musicas);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao buscar música por nome",
      erro: erro.message,
    });
  }
}

module.exports = {
  listarMusicas,
  buscarPorId,
  criar,
  atualizar,
  deletar,
  buscarPorNome,
};