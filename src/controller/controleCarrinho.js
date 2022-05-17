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
        .then(resposta => resposta)
        .catch(err => console.error(err))
    }


    static async addCarrinho(dadosProduto,qtd){
        const resposta = await fetch(`${this.URL}/add`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            },
            body:JSON.stringify(dadosProduto)
        })
        .then(resposta => resposta.json())
        .then(resposta => {
            resposta.quantity = qtd
        })
        .catch(err => console.log(err))

        return resposta
    }

    static async editarProduto(dadosProduto, id) {

         const resposta = await fetch(`${this.URL}/remove/:${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            },
            body: JSON.stringify(dadosProduto)
        })
        .then(resposta => resposta.json())
        .then(resposta => resposta)
        .catch(err => console.error(err))

        return resposta
    }

    static async apagarProduto(id){
        const resposta = await fetch(`${this.URL}my/products/:${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        })
        .then(resposta => resposta.json())
        .then(resposta => resposta)
        .catch(err => console.log(err))

        return resposta
    }

}

export {ControleCarrinho}