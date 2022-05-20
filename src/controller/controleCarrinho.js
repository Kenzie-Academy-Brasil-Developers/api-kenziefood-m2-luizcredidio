import Homepage from "../js/classes/ClasseHomePage.js"
import atualizaQuantidade from "../js/home.js"
class ControleCarrinho{
    static URL = 'https://api-kenzie-food.herokuapp.com/cart'

    static mostrarCarrinho() {

        return fetch(this.URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        })
        .then(resposta => resposta.json())
        .then(resposta => {
            atualizaQuantidade()
            return resposta
        })
        .catch(err => console.error(err))
    }


    static async addCarrinho(dadosProduto){
        const resposta = await fetch(`${this.URL}/add`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            },
            body: JSON.stringify(dadosProduto)
        })
        .then(resposta => resposta.json())
        .then(data => {
            Homepage.renderizarNoCarrinho()
            atualizaQuantidade()
            return data
        })
        .catch(err => console.error(err))
        return resposta
    }

    static async apagarCarrinho(id){
        const resposta = await fetch(`${this.URL}/remove/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        })
        .then(resposta => resposta)
        .then(resposta => {
            atualizaQuantidade()
            Homepage.renderizarNoCarrinho()
            return resposta
        })
        .catch(err => console.error(err))

        return resposta
    }

}

export {ControleCarrinho}