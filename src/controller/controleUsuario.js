class ControleUsuario {
  static token = "";

  static URL = "https://api-kenzie-food.herokuapp.com/auth/";

  static async criarUsuario(data) {
    const response = await fetch(`${this.URL}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status != "Error") {
          window.location = "/index.html";
        } else {
          const caixaErro = document.querySelector(".caixa_erro");
          caixaErro.classList.remove("hide");

          const textoErro = document.querySelector(".texto_erro");
          textoErro.innerText = res.message;
        }
      })
      .catch((error) => console.error(error));
    return response;
  }

  static login(data) {
    fetch(`${this.URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.length > 0) {
          localStorage.setItem("Token", res);
          window.location = "./src/pages/home.html";
        } else {
          const caixaErro = document.querySelector(".caixa_erro");
          caixaErro.classList.remove("hide");
          setInterval(() => {
            caixaErro.classList.add("hide");
          }, 2000);
          const textoErro = document.querySelector(".texto_erro");
          textoErro.innerText = res.error;
        }
      })
      .catch((error) => console.error(error));
  }
}

export { ControleUsuario };
