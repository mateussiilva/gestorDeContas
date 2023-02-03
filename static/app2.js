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