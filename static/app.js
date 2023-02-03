
function Gasto(descricao, dataGasto, valor){
    this.descricao = descricao;
    this.data = dataGasto;
    this.valor = valor;
    
}

const dadosFalsos = {
    des:'Monster Energy',
    data:'12/02/2023',
    valor:12.9,
    pag:'Cartao Debito',
}

function criarItemDaLinha(valor){
    let td = document.createElement("td")
    td.innerText = valor
    return td

}


function criarLinhaNaTabela(tabela,dadosParTabela)  {
    let linha = document.createElement("tr")
    
    for (let dado in dadosParTabela){
        let valor = dadosParTabela[dado]
        let td = criarItemDaLinha(valor)
        linha.appendChild(td)    
    }


    tabela.appendChild(linha)
}

const descricao = document.querySelector("#input-descricao");
const dataPgamento = document.querySelector("#input-date");
const valor = document.querySelector("#input-valor");
const btnInsert = document.querySelector("#btn-envio");
const tabela = document.querySelector("#corpo-tabela")


btnInsert.addEventListener('click', function(events){
    criarLinhaNaTabela(tabela,dadosFalsos)
    // console.log(tabela)

    

})

