
const select_pagamento = document.querySelector("#formas-pagamentos");
const formas_pagamentos = ['Dinheiro','Cartão de Credito','Cartão de Debito','Cheque'];

function cerateOpcaoPagamanto(){
    for(let opcao in formas_pagamentos){
        const option = document.createElement("option");
        option.innerHTML = formas_pagamentos[opcao];
        option.setAttribute('value', `opcao ${opcao}`)
        select_pagamento.appendChild(option);
    }

}

cerateOpcaoPagamanto()


//  PRECHENDO A TABELA

const bnt_envio = document.querySelector("#btn-envio");

bnt_envio.addEventListener("click", function(events){
    // const dados = {
    //     descricao,
    //     data_gasto,
    //     forma
    // }


    // const descricao = document.querySelector("#input-descricao");
    // const data = document.querySelector("#input-date")
    // console.log(data.value);
    const select = document.querySelector("#formas-pagamentos");
    const opca_pagamento = select.options[select.selectedIndex].text;

    console.log(opca_pagamento)


})
              