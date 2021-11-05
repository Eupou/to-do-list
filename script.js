let tarefas = document.getElementById('c-tarefas')
let inputTarefa = document.getElementById('input-tarefa')

inputTarefa.addEventListener('keyup', checaEnter)

function adcionarListener() {
    let  tarefa = document.querySelectorAll('#tarefa')
    tarefa.forEach(element => {
        element.addEventListener('dblclick', marcaTarefaConcluida)
    })
    console.log(tarefa)
}
    
function checaEnter(e) {
    if (e.keyCode == 13 && inputTarefa.value.length > 0) {
        adicionaTarefa()
    }
}

function adicionaTarefa() {
    tarefas.innerHTML += `
    <div class="tarefa" id="tarefa" onselectstart="return false">
        <p>${inputTarefa.value}</p>
    </div>
    `
    inputTarefa.value = ''
    adcionarListener()
}

function marcaTarefaConcluida(e) {
    if (e.target.parentElement.id == "tarefa") {
        e.path[1].classList.toggle('tarefa-conluida')
    } else {
        console.log(e)
        e.path[0].classList.toggle('tarefa-conluida')
    }
}

