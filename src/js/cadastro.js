import { controleUsuario } from "../controller/controleUsuario.js";

const formCadastrar = document.getElementById("form_registrar");
formCadastrar.addEventListener("submit", registrarUsuario);


function registrarUsuario(event) {
    event.preventDefault();

    const dados = recebeDados(event);
    console.log(dados)
    controleUsuario.criarUsuario(dados)
}

function recebeDados(event) {
    const formItens = [...event.target];
    const values = {};
    
    formItens.forEach((item) => {
        if (item.name != "") {

            values[item.name] = item.value;
        }
    })

    return values;
}