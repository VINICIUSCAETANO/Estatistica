var alunos = [];
var numAlunos = 0;

function adicionarAluno() {
    var nome = document.getElementById("inNome").value;
    var curso = document.getElementById("inCurso").value;
    var idade = Number(document.getElementById("inIdade").value);
    
    var aluno = {nome: nome, curso: curso, idade: idade}
    alunos[numAlunos] = aluno;
    numAlunos++;
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarAluno);