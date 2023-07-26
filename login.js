// -- | -- Bloco de verificação de preenchimento de campos -- | --
function Verificar(){
    let user = document.getElementById('Email').value;
    let senha = document.getElementById('Senha').value;

    if(!user || !senha)  alert("Campos de preenchimento obrigatorio. Favor preencher!"); else  window.location.href = "aula2.html";
};

//  -- | -- Tecla 'Enter -- |     --
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        salvaUser();
    };
});

// -- | -- Vetor - Salvar usuarios -- | --
var dadosLista = [];

    //  -- | -- Guarda usuario -- |     --
const salvaUser = () => {
    let nomeUser =  $('#nomeUser').val();
    if (nomeUser) {
        dadosLista.push(nomeUser);
        countUsers();
        criaLista();
    } else {
        document.querySelector('#nomeUser').focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Prencha o campo de usuario!',
        });
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
    //  -- | -- Limpar input -- |     --
    document.getElementById('nomeUser').value = "";
};

//  -- | -- Contador de usuarios -- | --
const countUsers = () => document.querySelector('#countUsers').innerHTML = `Usuários: ${dadosLista.length}`;

//  -- | -- Editar usuarios -- | --
const editarUsuer = (i) => {
    document.querySelector('#nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1), 1]);
};

//  -- | -- Remover usuarios -- | --
const removerUser = (i) => {
    dadosLista.splice(dadosLista[(i - 1), 1]);
    criaLista(); countUsers();
};