const $botao_troca_semana = document.querySelectorAll(".troca-semana ion-icon");
const $semanas_melhores = document.querySelectorAll(".slider-melhores .semanas");
const $semanas_tops = document.querySelectorAll(".slider-tops .semanas");
const $valor = document.querySelector(".valor");

$botao_troca_semana.forEach(botao => {
    botao.addEventListener('click', mudaValorDaSemana)
})

function mudaValorDaSemana(event) {
    let nome_elemento = event.target.getAttribute('name');
        if(nome_elemento == "arrow-back-circle-outline" && $valor.textContent > 1){
            $valor.textContent--;
            mudarSemana($valor.textContent);
        }else if(nome_elemento == "arrow-forward-circle-outline" && $valor.textContent < 4){
            $valor.textContent++;
            mudarSemana($valor.textContent);
        }
}

// Ao fazer o próximo elemento ou o anterior no primeiro e último, acontece um erro em que o último e primeiro elemento do NodeList é null, nesse caso, a função não é executada propriamente. ocasionando erro.
function mudarSemana(indice){
    let semana_melhores = $semanas_melhores[indice - 1];
    let semana_tops = $semanas_tops[indice - 1];

    semana_melhores.classList.remove('escondido');
    semana_tops.classList.remove('escondido');

    if(indice == 1){
        semana_melhores.nextElementSibling.classList.add('escondido');
        semana_tops.nextElementSibling.classList.add('escondido');
    }
    else if(indice == 4){
        semana_melhores.previousElementSibling.classList.add('escondido');
        semana_tops.previousElementSibling.classList.add('escondido');
    }
    else{
        semana_melhores.nextElementSibling.classList.add('escondido');
        semana_tops.nextElementSibling.classList.add('escondido');
        semana_melhores.previousElementSibling.classList.add('escondido');
        semana_tops.previousElementSibling.classList.add('escondido');
    }
}
