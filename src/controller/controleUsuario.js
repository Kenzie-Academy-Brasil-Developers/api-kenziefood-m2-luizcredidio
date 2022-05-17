class controleUsuario{
    static token =''

    static URL = 'https://api-kenzie-food.herokuapp.com/auth/'

    static async criarUsuario(data) {
        const response = await fetch(`${this.URL}register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
          })
          .then((res) => res.json())
          .then((res) => {
            window.location = './../../index.html'
            return res
          })
          .catch((error) => console.log(error));
        return response;
    }

    static login(data) {
        fetch(`${this.URL}login`,{
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify(data), 
          })
          .then((res) => res.json())
          .then((res) => {
              if(res.length > 0){
                localStorage.setItem("Token", res)
                window.location = `./../../index.html`
              }else{const caixaErro = document.querySelector('.caixa_erro')
              caixaErro.classList.remove('hide')

              const textoErro = document.querySelector('.texto_erro')
              textoErro.innerText = res.error
            } 
          })
          .catch((error) => console.error(error));
    }
}

export {controleUsuario}