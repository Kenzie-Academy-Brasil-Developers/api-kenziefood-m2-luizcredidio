import { ControleProdutos } from './../controller/controleProdutos.js'
import { ControleCarrinho } from '../controller/controleCarrinho.js'
import Homepage from './classes/ClasseHomePage.js'
let listaDeProdutos = await ControleProdutos.mostrarProdutos()
let listaCarrinho = await ControleCarrinho.mostrarCarrinho()


Homepage.renderizarNaTela(listaDeProdutos)
Homepage.renderizarNoCarrinho(listaCarrinho)

const btnTodos = document.querySelector('.todos')
btnTodos.addEventListener('click', (e) => {
    let btnClicado = e.currentTarget
    e.preventDefault()
    removeAtivo()
    btnClicado.classList.add('ativa')
    Homepage.renderizarNaTela(listaDeProdutos)
})

const btnPanificadora = document.querySelector('.panificadora')
btnPanificadora.addEventListener('click', (e) => {
    let btnClicado = e.currentTarget
    e.preventDefault()
    removeAtivo()
    btnClicado.classList.add('ativa')
    Homepage.filtrarPanificadora(listaDeProdutos)
})

const btnFrutas = document.querySelector('.frutas')
btnFrutas.addEventListener('click', (e) => {
    let btnClicado = e.currentTarget
    e.preventDefault()
    removeAtivo()
    btnClicado.classList.add('ativa')
    Homepage.filtrarFrutas(listaDeProdutos)
})

const btnBebidas = document.querySelector('.bebidas')
btnBebidas.addEventListener('click', (e) => {
    let btnClicado = e.currentTarget
    e.preventDefault()
    removeAtivo()
    btnClicado.classList.add('ativa')
    Homepage.filtrarBebidas(listaDeProdutos)
})

const inputPesquisa = document.querySelector('.campo_pesquisa')
inputPesquisa.onkeyup =  function pesquisarAoDigitar(){
    let input = inputPesquisa.value
    Homepage.filtrarPesquisa(input, listaDeProdutos)
}
  
function removeAtivo(){
    const arrayFiltros = document.querySelectorAll('.icone');
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

const botaoCarrinho = document.querySelector('.footer_mobile')
botaoCarrinho.addEventListener('click', mostrarPopupCarrinho)

function mostrarPopupCarrinho(){
    const popupCarrinho = document.querySelector('.popup_carrinho')
    popupCarrinho.classList.remove('esconder')
    
}

const fecharCarrinho = document.querySelector('.botao_fechar_carrinho')
fecharCarrinho.addEventListener('click',fecharPopupCarrinho)

function fecharPopupCarrinho(evt){
    const popupCarrinho = document.querySelector('.popup_carrinho')
    popupCarrinho.classList.add('esconder')
}
let carrinhoLocalStorage = []

const btnComprar = document.querySelectorAll('.btn_add')
btnComprar.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        let idCompra = e.currentTarget.id
        let token = localStorage.getItem('Token')
        if(token == null){    
                    carrinhoLocalStorage.push(idCompra)
                    localStorage.setItem("@produtos/carrinho", carrinhoLocalStorage)
                }else{
                    let dados = {
                        product_id: idCompra
                    }
                    carrinhoLocalStorage.push({product_id: idCompra})
                    ControleCarrinho.addCarrinho(dados)
                }
    })
})



async function removerCarrinho(e){
    const id = e.currentTarget.id
    await ControleCarrinho.apagarCarrinho(id)
}

export default function atualizaQuantidade(){
    const valorTotal = document.querySelector('#quantidade-total')
    const quantidade = document.querySelector('#valor-total')
    let valor = localStorage.getItem('@total')
    let valTotal = localStorage.getItem('@quantidade')
    quantidade.innerText = valor
    valorTotal.innerText = valTotal
}

export { removerCarrinho}