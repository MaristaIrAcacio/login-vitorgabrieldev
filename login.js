//Bloco de verificação de preenchimento de campos

function Verificar(){
    let user = document.getElementById('Email').value;
    let senha = document.getElementById('Senha').value;

    if(!user || !senha)  alert("Campos de preenchimento obrigatorio. Favor preencher!"); else  window.location.href = "aula2.html";
};

var dadosLista = [];

const salvaUser = () => {
    let nomeUser =  $('#nomeUser').val();
    if (nomeUser) {
        dadosLista.push(nomeUser);
        countUsers();
        criaLista();
    };
};

const criaLista = () => {
    let tabela = document.querySelector('#tabela').innerHTML = `<tr style='background: none'>
                                                                      <th>Nome Usuário</th>
                                                                      <th>Acões</th>
                                                                  </tr>`;
    for(let i = 0; i <= (dadosLista.length - 1); i ++) {
        tabela += `<tr>
                        <td>${dadosLista[i]}</td>
                        <td>
                            <button class="btn btn-success" onclick="">Editar</button>
                            <button class="btn btn-danger" onclick="">Deletar</button>
                        </td>
                   </tr>`;
                   document.querySelector('#tabela').innerHTML = tabela;
    };
};

const countUsers = () => document.querySelector('#countUsers').innerHTML = `Usuários: ${dadosLista.length}`;