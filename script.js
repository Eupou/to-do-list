let tarefas = document.getElementById('c-tarefas')
let inputTarefa = document.getElementById('input-tarefa')
let anotacoes = document.querySelectorAll('.anotacoes')
let mostraTarefasDoDia = document.querySelector('.c-tarefas-dia')
let diaSelecionado = 'SEG'
let diasDaSemana = {
    segunda: [[/*tarefas*/],[/*descrição*/]],
    terca: [[],[]],
    quarta: [[],[]],
    quinta: [[],[]],
    sexta: [[],[]],
    sabado: [[],[]],
    domingo: [[],[]]
}
console.log(diasDaSemana)

anotacoes.forEach(element => {
    element.addEventListener('click', marcaDiaDaSemana)
})

function marcaDiaDaSemana(e) {
    anotacoes.forEach(element => {
        element.classList.remove('dia-selecionado')
    })
    e.target.classList.add('dia-selecionado')

    mudaDiaSelecionado(e)
    // console.log(e.path[0].outerText)
}


function mudaDiaSelecionado(e) {
    let a = 1
    diaSelecionado = e.path[0].outerText  
    mostraTarefasDoDia.innerHTML = ''
    tarefas.innerHTML = ''
    checaDiaDaSemana(a)
    mostraTarefasNoCentro()
}

inputTarefa.addEventListener('keyup', checaEnter)

function adcionarListener() {
    let  tarefa = document.querySelectorAll('#tarefa')
    tarefa.forEach(element => {
        element.addEventListener('dblclick', marcaTarefaConcluida)
    })
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
    checaDiaDaSemana()
    inputTarefa.value = ''
    adcionarListener()
}

function checaDiaDaSemana(a = 0, b = false) {
    if (diaSelecionado == "SEG") {
        if (b == true) { // Retorna para função mostraTarefasNoCentro qual dia que ela tem que usar
            return diasDaSemana.segunda[0]
        }

        if (a == 0) { // Impede que uma mensagem em branco seja mostrada 
            diasDaSemana.segunda[0].push(inputTarefa.value)
        }

        mostraTarefaNoLadoEsquerdo(diasDaSemana.segunda[0])
    } else if (diaSelecionado == "TER") {
        if (b == true) { // Retorna para função mostraTarefasNoCentro qual dia que ela tem que usar
            console.log('nem mesmo cheguei a ver a luz do dia')
            return diasDaSemana.terca[0]
        }

        if (a == 0) {   // Impede que uma mensagem em branco seja mostrada 
            diasDaSemana.terca[0].push(inputTarefa.value)
        }

        mostraTarefaNoLadoEsquerdo(diasDaSemana.terca[0])
    } else if (diaSelecionado == "QUA") {
        if (b == true) { // Retorna para função mostraTarefasNoCentro qual dia que ela tem que usar
            return diasDaSemana.quarta[0]
        }

        if (a == 0) {   // Impede que uma mensagem em branco seja mostrada 
            diasDaSemana.quarta[0].push(inputTarefa.value)
        }

        mostraTarefaNoLadoEsquerdo(diasDaSemana.quarta[0])
    } else if (diaSelecionado == "QUI") {
        if (b == true) { // Retorna para função mostraTarefasNoCentro qual dia que ela tem que usar
            return diasDaSemana.quinta[0]
        }

        if (a == 0) {   // Impede que uma mensagem em branco seja mostrada 
            diasDaSemana.quinta[0].push(inputTarefa.value)
        }

        mostraTarefaNoLadoEsquerdo(diasDaSemana.quinta[0])
    } else if (diaSelecionado == "SEX") {
        if (b == true) { // Retorna para função mostraTarefasNoCentro qual dia que ela tem que usar
            return diasDaSemana.sexta[0]
        }

        if (a == 0) {   // Impede que uma mensagem em branco seja mostrada 
            diasDaSemana.sexta[0].push(inputTarefa.value)
        }

        mostraTarefaNoLadoEsquerdo(diasDaSemana.sexta[0])
    } else if (diaSelecionado == "SAB") {
        if (b == true) { // Retorna para função mostraTarefasNoCentro qual dia que ela tem que usar
            return diasDaSemana.sabado[0]
        }

        if (a == 0) {   // Impede que uma mensagem em branco seja mostrada 
            diasDaSemana.sabado[0].push(inputTarefa.value)
        }

        mostraTarefaNoLadoEsquerdo(diasDaSemana.sabado[0])
    } else {
        if (b == true) { // Retorna para função mostraTarefasNoCentro qual dia que ela tem que usar
            return diasDaSemana.domingo[0]
        }

        if (a == 0) {   // Impede que uma mensagem em branco seja mostrada 
            diasDaSemana.domingo[0].push(inputTarefa.value)
        }

        mostraTarefaNoLadoEsquerdo(diasDaSemana.domingo[0])
    }
}

function marcaTarefaConcluida(e) {
    if (e.target.parentElement.id == "tarefa") {
        e.path[1].classList.toggle('tarefa-conluida')
    } else {
        console.log(e)
        e.path[0].classList.toggle('tarefa-conluida')
    }
}

function mostraTarefaNoLadoEsquerdo(e) {
    mostraTarefasDoDia.innerHTML = ''
    for(let i = 0; i < e.length; i++) {
        mostraTarefasDoDia.innerHTML += `
            <div class="item-tarefa">${e[i]}</div>
        `
    }
}

function mostraTarefasNoCentro() {
    let e = checaDiaDaSemana(0, true)
    for(let i = 0; i < e.length; i++) {
        tarefas.innerHTML += `
        <div class="tarefa" id="tarefa" onselectstart="return false">
            <p>${e[i]}</p>
        </div>
        `
    }
}