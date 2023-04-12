const botaoCurtir = document.querySelectorAll(".card__curtidas");

botaoCurtir.forEach( botao => {
    botao.addEventListener("click", () => {
    curtir(botao);
    });

});


function curtir(botao) {
    let curtiu = botao.classList.contains("curtido");
    let quantCurtidas = parseInt(botao.innerHTML);

    if (!curtiu) {
        quantCurtidas = quantCurtidas + 1;
        botao.innerHTML = quantCurtidas;

        botao.classList.add("curtido");

    } else {
        quantCurtidas = quantCurtidas - 1;
        botao.innerHTML = quantCurtidas;

        botao.classList.remove("curtido");
    }

}
