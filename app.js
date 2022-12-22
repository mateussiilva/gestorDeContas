
function Gasto(descricao,valor, dataGasto){
    this.descricao = descricao;
    this.valor = valor;
    this.data = dataGasto;
    // this.pagamento = formaPagamento;
    
}

// function criarLinhaTabela(){
//     const linha = document.createElement('tr')
//     // const d1 = document.createElement('td')
//     // const d2 = document.createElement('td')
//     // const d3 = document.createElement('td')
//     // d1.innerHTML = 'Dado 1';
//     // d2.innerHTML = 'Dado 2';
//     // d3.innerHTML = 'Dado 3';

//     // linha.append(d1)
//     // linha.append(d2)
//     // linha.append(d3)
    
//     // table.appendChild(linha)
// }


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

function criarLinha(){
    const linha = document.createElement("tr")
    return linha
}


// MINHAS VARIAVEIS
const descricao = document.querySelector("#input-descricao");
const dataPgamento = document.querySelector("#input-date");
const inputValor = document.querySelector("#input-valor");
const btnInsert = document.querySelector("#btn-envio");
const table = document.querySelector("#body-table");

btnInsert.addEventListener('click', function(events){
    const nome = descricao.value
    const valor =  inputValor.value
    const data = dataPgamento.value
    
    if (
        nome.length === 0 ||
        valor.length === 0 ||
        dataPgamento.length === 0){
            alert("[ERRO] - VALORES INVALIDOS ")
        }
    else{
        // console.log("Tudo certo")
        const gasto  = new Gasto(nome,data,valor)
        const linha = criarLinha()
        for(let i in gasto){
            const valor = gasto[i]
            let dado = document.createElement('td')
            dado.innerHTML = valor
            linha.append(dado)
        };
        table.appendChild(linha)
    }

})

