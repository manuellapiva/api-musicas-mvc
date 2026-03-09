let musicas = [
    {
        id: 1,
        nomemusica: "Pay no Rent",
        autor: "Turnpike Troubadours",
        link: "https://www.youtube.com/watch?v=sieOSRVQh3Q&quot"
    },
        {
        id: 2,
        nomemusica: "The Cowboy in Me",
        autor: "Tim McGraw",
        link: "https://www.youtube.com/watch?v=9ECKaPrAGds&quot"
    },
        {
        id: 3,
        nomemusica: "Chasing Tornadoes",
        autor: "MacKenzie Porter",
        link: "https://www.youtube.com/watch?v=xJX4jAEpsp0&quot"
    },
        {
        id: 4,
        nomemusica: "Heaven's Gate",
        autor: "Kevin Coster",
        link: "https://www.youtube.com/watch?v=YMsa8nGF9VQ&quot"
    }
]

let proximoId = 5

//get geral
function listarMusicas(){
    return musicas
}

//get id
function buscarPorId (id){
    return musicas.find (m => m.id ===id)
}

//post
function criar (dados) {
    const novaMusica ={
        id:proximoId++,
        nomemusica:dados.nomemusica,
        autor: dados.autor,
        link:dados.link,
    }
    musicas.push (novaMusica);
    return novaMusica
}

//put
function atualizar (id,dados){
    const indice = musicas.findIndex(m => m.id===id);
    if (indice === -1) {
        return null;
    }
    musicas[indice] = {
    id,
    nomemusica: dados.nomemusica,
    autor:dados.autor,
    link:dados.link,
    }
    return musicas [indice];
}

//delete
function deletar (id) {
    const indice = musicas.findIndex(m =>m.id === id);
    if (indice === -1){
        return false;
    }
    musicas.splice (indice, 1);
    return true;
}

function buscarPorNome (nomemusica){
    return musicas.filter (m => m.nomemusica.toLowerCase()=== nomemusica.toLowerCase());
}

module.exports={
listarMusicas,
buscarPorId,
criar,
atualizar,
deletar,
buscarPorNome
}