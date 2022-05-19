import { ControleProdutos } from './../controller/controleProdutos.js'

function adcFuncaoAbrirModal(){
    const botaoAdcNovoProduto = document.getElementById('adicionar-produto')
    botaoAdcNovoProduto.addEventListener('click', abrirModal)
}

adcFuncaoAbrirModal()

function abrirModal(event){
    event.preventDefault()
    const containerModal = document.querySelector('.container-modal')

    containerModal.style.display = 'flex'
}

function fecharModal(event){
    event.preventDefault()
    const containerModal = document.querySelector('.container-modal')
    containerModal.style.display = 'none'

    const containerModalEditar = document.querySelector('.container-editar')
    containerModalEditar.style.display = 'none'

    const containerModalDeletar = document.querySelector('.container-deletar')
    containerModalDeletar.style.display = 'none'

}

function adcFuncaoFecharModal(){
    const icone = document.querySelector('.botao-fechar')
    icone.addEventListener('click', fecharModal)
}
adcFuncaoFecharModal()

//funcoes do botao adicionar

    const formCadastrar = document.querySelector('.form-add-product')
    formCadastrar.addEventListener("submit", cadastrarProduto)

function cadastrarProduto(event){
    event.preventDefault()
    const dados = recebeDadosDoForm(event)
    console.log(dados)
    ControleProdutos.criarProduto(dados)
}


function recebeDadosDoForm(event) {

    const formItens = [...event.target]
    const values = {}
    
    formItens.forEach((item) => {
        if (item.name != "") {
            values[item.name] = item.value
        }
    })
    
    return values
}
//abrir e fechar modais

const fecharModalEditar = document.querySelector('#fechar-editar')
fecharModalEditar.addEventListener('click', fecharModal)

const fecharModalDeletar = document.getElementById('fechar-modal-excluir')
fecharModalDeletar.addEventListener('click', fecharModal)

function fecharModalBtnNao(){
    const btnNao = document.getElementById('fechar')
    btnNao.addEventListener('click', (event) =>{
        event.preventDefault()

        const containerModalDeletar = document.querySelector('.container-deletar')
        containerModalDeletar.style.display = 'none'
    })
}
fecharModalBtnNao()

function renderizarProdutosPrivados(listaDeProdutos){
    let tabelaDeProdutos = document.getElementById('tabela-de-produtos')

        listaDeProdutos.forEach(produto =>{
            let linhaDeProduto = document.createElement('tr')
            linhaDeProduto.classList.add('linha-de-item')

            let tdProdutos = document.createElement('td')
            tdProdutos.classList.add('produtos')

                let img = document.createElement('img')
                img.src = produto.imagem

                let titulo = document.createElement('p')
                titulo.innerText = produto.nome

            tdProdutos.append(img, titulo)

            let tdCategorias = document.createElement('td')
            tdCategorias.classList.add('categorias')
                let categoria = document.createElement('span')
                categoria.innerText = produto.categoria
            tdCategorias.appendChild(categoria)

            let tdDescricao = document.createElement('td')
            tdDescricao.classList.add('descricao')
                let descricao = document.createElement('span')
                descricao.innerText = produto.descricao
            tdDescricao.append(descricao)

            let tdIcones = document.createElement('td')
            let divIcones = document.createElement('div')
                divIcones.classList.add('icones-td')
                let iconEditar = document.createElement('img')
                    iconEditar.setAttribute('class','editar-icon')
                    iconEditar.src = "/src/assets/editar-icon.png"
                    iconEditar.addEventListener('click', event=>{
                        event.preventDefault()
                        const containerModalEditar = document.querySelector('.container-editar')
                        containerModalEditar.style.display = 'flex'
                    })

                let iconApagar = document.createElement('img')
                    iconApagar.setAttribute('class', 'apagar-icon')
                    iconApagar.src = "/src/assets/apagar-icon.png"
                    iconApagar.addEventListener('click', event =>{

                        event.preventDefault()
                        const containerModalDeletar = document.querySelector('.container-deletar')
                        containerModalDeletar.style.display = 'flex'
                    })

            divIcones.append(iconEditar, iconApagar)
            tdIcones.appendChild(divIcones)

            linhaDeProduto.append(tdProdutos, tdCategorias, tdDescricao, tdIcones) //adc todas as td celula
            tabelaDeProdutos.append(linhaDeProduto)

        })
}

renderizarProdutosPrivados(await ControleProdutos.mostrarProdutosPrivados())

console.log(await ControleProdutos.mostrarProdutosPrivados())

//class="btn-editar-produto"
const btnEditarProduto = document.querySelector("#form-editar")
btnEditarProduto.addEventListener('submit', editarProduto)

function editarProduto(event){
    event.preventDefault()
    const dados = recebeDadosDoForm(event)
    console.log(dados)
}