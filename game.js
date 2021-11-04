let level = 0;
let started = false;
let coresBotoes = ["red", "blue", "green", "yellow"];
let coresAleatoriasGeradas = [];
let coresEscolhidas = [];

document.addEventListener('keydown', event => {
    if (event && !started) {
        document.getElementById('level-title').textContent = `Level ${level}`;
        proximaSequencia();
        started = true;
    }
});

document.querySelectorAll('.btn').forEach(btnEl => {
    btnEl.addEventListener('click', function (event) {

        console.log(event);

        const corEscolhida = event.target.id;
        coresEscolhidas.push(corEscolhida);

        animarBotao(corEscolhida);
        playSom(corEscolhida);

        // checkar se a resposta está correta
        checkResposta(coresEscolhidas.length - 1);

    })
});|
