import {controleUsuario} from './../controller/controleUsuario.js'


const formLogin = document.getElementById("form_login");
formLogin.addEventListener("submit", logarUsuario);


function logarUsuario(event) {
    event.preventDefault();

    const dados = recebeDados(event);
    controleUsuario.login(dados)
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