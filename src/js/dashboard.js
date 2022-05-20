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
    ControleProdutos.criarProduto(dados)
}


function recebeDadosDoForm(event) {

    const formItens = [...event.target]
    const values = {}
    
    formItens.forEach((item) => {
        if (item.value != "") {
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
let idExclusao
let idEditar

function renderizarProdutosPrivados(listaDeProdutos){
    let tabelaDeProdutos = document.querySelector('.tabela-de-produtos')
    tabelaDeProdutos.innerHTML = ''

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
                    iconEditar.id = produto.id
                    iconEditar.src = "/src/assets/editar-icon.png"
                    iconEditar.addEventListener('click', event=>{
                        event.preventDefault()
                        idEditar = event.currentTarget.id
                        const containerModalEditar = document.querySelector('.container-editar')
                        containerModalEditar.style.display = 'flex'
                    })

                let iconApagar = document.createElement('img')
                    iconApagar.setAttribute('class', 'apagar-icon')
                    iconApagar.id = produto.id
                    iconApagar.src = "/src/assets/apagar-icon.png"
                    iconApagar.addEventListener('click', event =>{

                        event.preventDefault()
                        idExclusao = event.currentTarget.id
                        const containerModalDeletar = document.querySelector('.container-deletar')
                        containerModalDeletar.style.display = 'flex'
                    })

            divIcones.append(iconEditar, iconApagar)
            tdIcones.appendChild(divIcones)

            linhaDeProduto.append(tdProdutos, tdCategorias, tdDescricao, tdIcones) //adc todas as td celula
            tabelaDeProdutos.append(linhaDeProduto)

        })
}

const listaDeProdutos = await ControleProdutos.mostrarProdutosPrivados()
renderizarProdutosPrivados(listaDeProdutos)

//class="btn-editar-produto"
const btnEditarProduto = document.querySelector("#form-editar")
btnEditarProduto.addEventListener('submit', editarProduto)

function editarProduto(event){
    event.preventDefault()

    const dados = recebeDadosDoForm(event)
    ControleProdutos.editarProduto(dados,idEditar)
}

const btnExcluir = document.querySelector('#excluir')
btnExcluir.addEventListener('click', excluirProduto)

function excluirProduto(){
    ControleProdutos.apagarProduto(idExclusao)
}

const inputPesquisa = document.querySelector('.campo_pesquisa')
inputPesquisa.onkeyup =  function pesquisarAoDigitar(){
    let input = inputPesquisa.value
    filtrarPesquisa(input, listaDeProdutos)
}

async function filtrarPesquisa(input, listaDeProdutos){
    input = input.toLowerCase()
    listaDeProdutos = await listaDeProdutos

    const listaFiltrada = listaDeProdutos.filter((produto) => {
        return produto.nome.toLowerCase().includes(input);
    });
    renderizarProdutosPrivados(listaFiltrada)
}

function filtrarPanificadora(listaDeProdutos){

    const listaPanificadora = listaDeProdutos.filter((produto) => {
        return produto.categoria === "Panificadora";
    });
    
    renderizarProdutosPrivados(listaPanificadora)
}

function filtrarFrutas(listaDeProdutos){

    const listaFrutas = listaDeProdutos.filter((produto) => {
        return produto.categoria === "Frutas";
    });
    
    renderizarProdutosPrivados(listaFrutas)
}

function filtrarBebidas(listaDeProdutos){

    const listaBebidas = listaDeProdutos.filter((produto) => {
        return produto.categoria === "Bebidas";
    });
    
    renderizarProdutosPrivados(listaBebidas)
}

const btnTodos = document.querySelector('.todos')
btnTodos.addEventListener('click', (e) => {
    let btnClicado = e.currentTarget
    e.preventDefault()
    removeAtivo()
    btnClicado.classList.add('ativa')
    renderizarProdutosPrivados(listaDeProdutos)
})

const btnPanificadora = document.querySelector('.panificadora')
btnPanificadora.addEventListener('click', (e) => {
    let btnClicado = e.currentTarget
    e.preventDefault()
    removeAtivo()
    btnClicado.classList.add('ativa')
    filtrarPanificadora(listaDeProdutos)
})

const btnFrutas = document.querySelector('.frutas')
btnFrutas.addEventListener('click', (e) => {
    let btnClicado = e.currentTarget
    e.preventDefault()
    removeAtivo()
    btnClicado.classList.add('ativa')
    filtrarFrutas(listaDeProdutos)
})

const btnBebidas = document.querySelector('.bebidas')
btnBebidas.addEventListener('click', (e) => {
    let btnClicado = e.currentTarget
    e.preventDefault()
    removeAtivo()
    btnClicado.classList.add('ativa')
    filtrarBebidas(listaDeProdutos)
})

function removeAtivo(){
    const arrayFiltros = document.querySelectorAll('.item-filtro');
    for(let i = 0; i < arrayFiltros.length; i++){
        arrayFiltros[i].classList.remove('ativa');
    }
}

const avatar = document.querySelector('#avatar')
avatar.addEventListener('click',abrirMenuUsuario)

function abrirMenuUsuario(evt){
    const menuUsuario = document.querySelector('.popup_usuario')
    menuUsuario.classList.toggle('menu_esconder')
}

const btnFechar = document.querySelector('.botao_fechar')
btnFechar.addEventListener('click', fecharMenuUsuario)

function fecharMenuUsuario(evt){
    const menuUsuario = document.querySelector('.popup_usuario')
    menuUsuario.classList.add('menu_esconder')
}

const logoff = document.querySelector('.logoff')
logoff.addEventListener('click',clearLocalstorage)

function clearLocalstorage(){
    localStorage.clear()
}