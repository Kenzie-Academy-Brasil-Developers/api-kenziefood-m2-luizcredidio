class controleProdutos{
    static URL = 'https://api-kenzie-food.herokuapp.com/'

    static mostrarProdutos() {

        return fetch(`${this.URL}products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resposta => resposta.json())
        .then(resposta => resposta)
        .catch(err => console.error(err));
    }

    static mostrarProdutosPrivados() {

        return fetch(`${this.URL}my/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        })
        .then(resposta => resposta.json())
        .then(resposta => resposta)
        .catch(err => console.error(err));
    }


    static async criarProduto(dadosProduto){
        const resposta = await fetch(`${this.URL}my/products`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            },
            body:JSON.stringify(dadosProduto)
        })
        .then(resposta => resposta.json())
        .then(resposta => resposta)
        .catch(err => console.error(err))
        return resposta
    }

    static async editarProduto(dadosProduto, id) {

         const resposta = await fetch(`${this.URL}my/products/:${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            },
            body: JSON.stringify(dadosProduto)
        })
        .then(resposta => resposta.json())
        .then(resposta => resposta)
        .catch(err => console.error(err));

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
        .catch(err => console.error(err))

        return resposta
    }

}

export {controleProdutos}