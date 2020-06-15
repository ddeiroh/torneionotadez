const $botao_troca_semana = document.querySelectorAll(".troca-semana ion-icon");
const $valor = document.querySelector(".valor");

$botao_troca_semana.forEach(botao => {
    botao.addEventListener('click', MudaValorDaSemana)
})

function MudaValorDaSemana(event) {
    let nome_elemento = event.target.getAttribute('name');
        if(nome_elemento == "arrow-back-circle-outline" && $valor.textContent > 1){
            $valor.textContent--;
        }else if(nome_elemento == "arrow-forward-circle-outline" && $valor.textContent < 4){
            $valor.textContent++;
        }
}


