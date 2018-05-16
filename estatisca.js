var alunos = [];

var inNome = document.getElementById("inNome");
var inCurso = document.getElementById("inCurso");
var inIdade = document.getElementById("inIdade");

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

function getTotalAlunos() {
    return alunos.length;
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarAluno);