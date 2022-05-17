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
              if(res.token.length > 0){
                localStorage.setItem("Token", res.token)
                window.location = `./../../src/pages/blog.html`
              }
          })
          .catch((error) => console.log(error));
    }
}

export {controleUsuario}