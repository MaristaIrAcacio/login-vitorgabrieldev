//Bloco de verificação de preenchimento de campos

function Verificar(){
    let user = document.getElementById('Email').value;
    let senha = document.getElementById('Senha').value;

    if(!user || !senha){
        alert("Campos de preenchimento obrigatorio. Favor preencher!");
    } else{
        window.location.href = "aula2.html";
    };
};

var dadosLista = [];

const salvaUser = () => {
    let nomeUser =  $('#nomeUser').val();
    if (nomeUser) {
        dadosLista.push(nomeUser);
        console.log(dadosLista);
    };
};