
function Gasto(descricao, dataGasto, valor){
    this.descricao = descricao;
    this.data = dataGasto;
    this.valor = valor;
    // this.pagamento = formaPagamento;
    
}

const select_pagamento = document.querySelector("#formas-pagamentos");
const formas_pagamentos = [
    'Dinheiro','Cartão de Credito','Cartão de Debito','Cheque'];
function cerateOpcaoPagamanto(){
    for(let opcao in formas_pagamentos){
        const option = document.createElement("option");
        option.innerHTML = formas_pagamentos[opcao];
        option.setAttribute('value', `opcao ${opcao}`)
        select_pagamento.appendChild(option);
    }
}
cerateOpcaoPagamanto()


// MINHAS VARIAVEIS
const descricao = document.querySelector("#input-descricao");
const dataPgamento = document.querySelector("#input-date");
const valor = document.querySelector("#input-valor");
const btnInsert = document.querySelector("#btn-envio");

btnInsert.addEventListener('click', function(events){
    console.log(descricao.value)
    console.log(dataPgamento.value)
    console.log(valor.value)


})

