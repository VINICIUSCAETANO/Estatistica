var alunos = [];

var inNome = document.getElementById("inNome");
var inCurso = document.getElementById("inCurso");
var inIdade = document.getElementById("inIdade");
var pre = document.querySelector("pre");

function adicionarAluno() {
    var nome = inNome.value;
    var curso = inCurso.value;
    var idade = Number(inIdade.value);

    if (nome == "") {
        alert("Informe corretamente o nome");
        inNome.focus();
        return;
    }

    if(curso == "") {
        alert("Informe corretamente o curso");
        inCurso.focus();
        return;
    }

    if(idade <=0) {
        alert("Informe corretamente a idade");
        inIdade.focus();
        return;
    }

    var aluno = {nome: nome, curso: curso, idade: idade}
    alunos.push(aluno);

    inNome.value= "";
    inCurso.value = "";
    inIdade.value = "";

    inNome.focus();

    alert("Aluno " + alunos[alunos.length -1].nome + " adicionado com sucesso");
}

function listarAlunos() {
    //alunos.sort();
    var out = "";
    for(var i = 0; i < alunos.length; i++) {
        out = out + "Nome : " + alunos[i].nome + 
        "   Curso: " + alunos[i].curso +
        "   Idade: " + alunos[i].idade + "\n";
    }
    pre.textContent = out;
}


var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarAluno);

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarAlunos);