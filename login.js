// -- | -- Bloco de verificação de preenchimento de campos -- | --
function Verificar(){
    let user = document.getElementById('Email').value;
    let senha = document.getElementById('Senha').value;

    if(!user || !senha)  alert("Campos de preenchimento obrigatorio. Favor preencher!"); else  window.location.href = "aula2.html";
};

// Enviar botão enter
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        salvaUser();
    };
});

// -- | -- Vetor - Salvar usuarios -- | --
var dadosLista = [];

const salvaUser = () => {
    let nomeUser =  $('#nomeUser').val();
    if (nomeUser) {
        dadosLista.push(nomeUser);
        countUsers();
        criaLista();
    };
};


// -- | -- Criação de lista -- | --
const criaLista = () => {
    document.querySelector('#tabela').innerHTML = 
    `<tr style='background: none'> 
        <th>Nome Usuário</th>
        <th>Acões</th>
    </tr>`;
    for(let i = 0; i <= (dadosLista.length - 1); i ++) {
        document.querySelector('#tabela').innerHTML +=  `<tr>
        <td>${dadosLista[i]}</td>
        <td>
            <button class="btn btn-success" onclick="editarUsuer(this.parentNode.parentNode.rowIndex)">Editar</button>
            <button class="btn btn-danger" onclick="removerUser(this.parentNode.parentNode.rowIndex)">Deletar</button>
        </td>
   </tr>`; 
    };
    document.getElementById('nomeUser').value = "";
};

//  -- | -- Contador de usuarios -- | --
const countUsers = () => document.querySelector('#countUsers').innerHTML = `Usuários: ${dadosLista.length}`;

const editarUsuer = (i) => {
    document.querySelector('#nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1), 1]);
};

const removerUser = (i) => {
    document.querySelector('#nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1), 1]);
    criaLista();
    countUsers();
};