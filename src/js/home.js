import { ControleProdutos} from './../controller/controleProdutos.js'
/* import {Homepage} from './classes/ClasseHomePage.js'

Homepage.renderizarNaTela(ControleProdutos.mostrarProdutos()) */


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