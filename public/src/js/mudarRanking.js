const botao_ranking = document.getElementsByClassName("botao-ranking");
let top_dez = document.querySelector(".slider-tops");
let top_melhores = document.querySelector(".slider-melhores");

botao_ranking[0].addEventListener('click', () =>{
        top_melhores.classList.remove('escondido');
        top_dez.classList.add('escondido');
});

botao_ranking[1].addEventListener('click', () =>{
        top_dez.classList.remove('escondido');
        top_melhores.classList.add('escondido');
});