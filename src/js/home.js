import { ControleProdutos} from './../controller/controleProdutos.js'
import Homepage from './classes/ClasseHomePage.js'

Homepage.renderizarNaTela(ControleProdutos.mostrarProdutos())

const btnTodos = document.querySelector('.todos')
btnTodos.addEventListener('click', (e) => {
    let btnClicado = e.target
    e.preventDefault()
    removeAtivo()
    btnClicado.classList.add('ativa')
    Homepage.renderizarNaTela(ControleProdutos.mostrarProdutos())
})

const btnPanificadora = document.querySelector('.panificadora')
btnPanificadora.addEventListener('click', (e) => {
    let btnClicado = e.target
    e.preventDefault()
    removeAtivo()
    btnClicado.classList.add('ativa')
    Homepage.filtrarPanificadora(ControleProdutos.mostrarProdutos())
})

const btnFrutas = document.querySelector('.frutas')
btnFrutas.addEventListener('click', (e) => {
    let btnClicado = e.target
    e.preventDefault()
    removeAtivo()
    btnClicado.classList.add('ativa')
    Homepage.filtrarFrutas(ControleProdutos.mostrarProdutos())
})

const btnBebidas = document.querySelector('.bebidas')
btnBebidas.addEventListener('click', (e) => {
    let btnClicado = e.target
    e.preventDefault()
    removeAtivo()
    btnClicado.classList.add('ativa')
    Homepage.filtrarBebidas(ControleProdutos.mostrarProdutos())
})

const inputPesquisa = document.querySelector('.campo_pesquisa')
inputPesquisa.onkeyup =  function pesquisarAoDigitar(){
    let input = inputPesquisa.value
    Homepage.filtrarPesquisa(input, ControleProdutos.mostrarProdutos())
}
    


function removeAtivo(){
    const arrayFiltros = document.querySelectorAll('.icone');
    for(let i = 0; i < arrayFiltros.length; i++){
        arrayFiltros[i].classList.remove('ativa');
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