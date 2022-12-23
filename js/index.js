//BLOCO DE LOGIN
let jsonLogado = sessionStorage.getItem('logado');
let logado = JSON.parse(jsonLogado);
if (!logado) {
    window.location = 'login.html'
};

//BLOCO DAS VARIÁVEIS
const formulario = document.querySelector("form");
const retorno = localStorage.getItem("todosDaLista");
const lista = JSON.parse(retorno);
const ul = document.querySelector(".todo-list");
const logoff = document.querySelector('#logoff');
let tarefa = document.querySelector(".todo-input");
let select = document.querySelector('.filter-todo');

//CRIAÇÃO ARRAY
if(lista == null){
    lista = []
};

//FUNÇÃO "CARREGAR AS TAREFAS"
carregaStorage(lista);

function carregaStorage(lista) {
    for(let item of lista){
        adicionarItem(item)
    }
};

//BLOCO DE LOGOFF (após carregar as tarefas)
logoff.addEventListener('click', function () {
    sessionStorage.setItem('logado', JSON.stringify(false));
    window.location = 'login.html'
});


//FUNÇÃO "ATUALIZAR AS TAREFAS" - Salvando arquivo JSON no "LocalStorage"
function atualizaStorage() {
    localStorage.setItem('todosDaLista', JSON.stringify(lista));  
};

//CRIAÇÃO DO EVENTO DE SUBMIT
formulario.addEventListener("submit", (e) => {
e.preventDefault();

    let obj = criaItem();
    if (tarefaRepetida()) {
        alert("Tarefa já foi inserida!")
    } else
    
    if (tarefa.value == "") {
        alert("Informe a tarefa!")
    } else {
        lista.push(obj)
        atualizaStorage()
        adicionarItem(obj)
    };
});

// BLOCO DE FUNÇÕES
function criaItem() {
    let item = {
        id: lista.length + 1,
        task: tarefa.value,
        completed: false
    }
    return item
};

function tarefaRepetida() {
    console.log(lista);
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].task == tarefa.value) {
            console.log("Tarefa Repedita " + lista[i].task);
            return true  
        };   
    }
}

function adicionarItem(obj) {
    let botaocheck = document.createElement("button");

    botaocheck.classList.add("check-btn");
    botaocheck.id = lista.length
    botaocheck.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>';
        
        //Criado elemento DIV
        let div = document.createElement("div");
        div.classList.add("todo")
        div.id = 'div' + lista.length
        console.log(div);

        //Criado elemento LI
        let li = document.createElement("li");
        li.id = 'li' + lista.length
        li.classList.add("todo-item");
        console.log(li);
        li.innerHTML = obj.task
        ul.append(div);
        div.append(li);
    
        //Criado Botão de Excluir
        let botaotrash = criaBotaoTrash()
        div.append(botaocheck);
        div.append(botaotrash);
        botaocheck.addEventListener('click', (stl) => {

            let s = stl.target.id
            for (let i = 0; i < lista.length; i++) {
                if (s == lista[i].id) {
                    li.classList.add('completed')
                    lista[i].completed = true
                    console.log(lista)
                };
            };
        });
};

function criaBotaoTrash() {
    let btntrash = document.createElement("button");
    btntrash.classList.add("trash-btn");
    btntrash.id =  lista.length
    btntrash.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>'

    btntrash.addEventListener('click', function (b) {

        let btn = b.target
        let id = btn.id

        for (let i = 0; i < lista.length; i++) {
            if (id == lista[i].id) {
                lista.splice(i, 1)

                atualizaStorage()

                console.log(lista)
            }
        }
        let div_remove = document.querySelector('#div' + id)
        ul.removeChild(div_remove);
        console.log(div_remove);
        console.log("Tarefa removida");
        atualizaStorage()
    })
    return btntrash
}

//EVENTO DE FILTRAR
//let select = document.querySelector('.filter-todo');

let filtro = document.getElementById("lista");
filtro.addEventListener('change', (e) => {        
    console.log(e.target.value);                    


    filtro.array.forEach(tarefa => {
        if (e.target.value == 'all') {
            filtro.innerHTML = ""
       } else {

       }
    });
        
      

})