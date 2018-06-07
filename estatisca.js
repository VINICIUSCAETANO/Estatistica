//vetor globar para armazenar os objetos alunos
var alunos = [];

//captura dos elementos html
var inNome = document.getElementById("inNome");
var inCurso = document.getElementById("inCurso");
var inIdade = document.getElementById("inIdade");
//no caso do pre usei uma outra funcao pq nao tinha id mas o principio é o mesmo do getElement
var pre = document.querySelector("pre");

function adicionarAluno() {
    var nome = inNome.value;
    var curso = inCurso.value;
    var idade = Number(inIdade.value);

    //validacao dos inputs
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

    //insere os inputs em um objeto aluno, em que os nomes das propriedades dos objetos tem o mesmo nome das
    //variáveis de input
    var aluno = {nome: nome, curso: curso, idade: idade}
    //coloca no vetor global declarado no comeco do codigo
    //o vetor alunos é um vetor de objetos aluno
    alunos.push(aluno);

    //limpa campos e da um focus
    inNome.value= "";
    inIdade.value = "";

    inNome.focus();

    //isso aqui nao precisa, era só para debugar. Podemos pensar em outra forma de passar
    //essa informacao
    //alert("Aluno " + alunos[alunos.length -1].nome + " adicionado com sucesso");
}

//essa funcao é necessária para usar a funcao sort
//sort so da certo em vetor de strings ou numeros
//para usar com vetor de objetos temos que especificar
//qual campo vamos usar para a comparacao
function comparar(aluno1,aluno2) {
        if (aluno1.nome < aluno2.nome) {
          return -1;
        }
        if (aluno1.nome > aluno2.nome) {
          return 1;
        }
        return 0;
      }

function listarAlunos() {
    //ordena os alunos (alfabeticamente) pelo campo nome
    alunos.sort(comparar);
    var out = "";
    //percorre todos os alunos do vetor e imprime os campos
    for(var i = 0; i < alunos.length; i++) {
        out = out + "Nome : " + alunos[i].nome + 
        "   Curso: " + alunos[i].curso +
        "   Idade: " + alunos[i].idade + "\n";
    }
    pre.textContent = out;
}

function estatisticaCursos() {
    //os numeros por cursos estao nesse objeto, poderiam ser variaveis separadaa lol
    var estaCursos = {ads: 0, mark: 0, ger: 0}
    var total = alunos.length;

    //verifica o valor de curso em cada posicao com as opcoes ja definidas
    //em cada uma ele incrementa um somador
    for(var i = 0; i < total; i++) {
        if (alunos[i].curso == "Análise e Desenvolvimento de Sistemas") {
            estaCursos.ads++;
        }
        else if (alunos[i].curso == "Marketing") {
            estaCursos.mark++;
        }
        else if (alunos[i].curso == "Processos Gerenciais") {
            estaCursos.ger++;
        }
    }
    //imprime o numero de alunos em cada curso e depois os percentuais
    pre.textContent = "Estatísticas por curso:\n" +
    "Análise e Desenvolvimento de Sistemas:  " + estaCursos.ads + " alunos\n" +
    "Marketing:  " + estaCursos.mark + " alunos\n" +
    "Processos Gerenciais:  " + estaCursos.ger + " alunos\n" +
    "Total de alunos: " + total + "\n------------------------------------------\n" +
    "Análise e Desenvolvimento de Sistemas:  " 
    +  (estaCursos.ads/total * 100).toFixed(2) + "%\n" +
    "Marketing:  " 
    + (estaCursos.mark/total * 100).toFixed(2) + "%\n" +
    "Processos Gerenciais:  " 
    + (estaCursos.ads/total * 100).toFixed(2) + "%\n" +
    "Total:" 
    + (estaCursos.ads + estaCursos.mark + estaCursos.ger/total * 100).toFixed(2);
}

function estatisticaIdades() {
    
    //poderia se usar a funcao array.max() mas nao sei usar ela com vetor de objetos
    var max = -Infinity;
    var min = Infinity;
    var faixas = 2;

    //esse for é para saber a idade maxima e minima do vetor alunos
    for(var i = 0; i < alunos.length; i++) {
        if(alunos[i].idade > max) {
            max = alunos[i].idade;
        }
        if(alunos[i].idade < min) {
            min = alunos[i].idade;
        }
    }

    //essas bagaças todas para trabalhar com as faixas, poderia estar bem melhor o código
    var amplitude = max - min;
    var faixa1Min = min;
    var faixa1Max = faixa1Min + Math.floor(amplitude/faixas);
    var faixa2Min = faixa1Max + 1;
    var faixa2Max = max;
    var faixa1Alunos = 0;
    var faixa2Alunos = 0;

    //Para cada aluno ele ve em que faixa ele está
    for(var i = 0; i < alunos.length; i++) {
        if(alunos[i].idade > faixa1Min && alunos[i].idade < faixa1Max) {
            faixa1Alunos++;
        }
        else if (alunos[i].idade > faixa2Min && alunos[i].idade < faixa2Max) {
            faixa2Alunos++;
        }
    }

    //imprime os resultados
    pre.textContent = "Estatísticas por Idade:\n" +
    "Faixa 1 - de " +  faixa1Min + " à " + faixa1Max + " : " +
    faixa1Alunos + " alunos\n" + 
    "Faixa 2 - de " +  faixa2Min + " à " + faixa2Max + " : " +
    faixa2Alunos + " alunos\n";
}


var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarAluno);

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarAlunos);

var btCursos = document.getElementById("btCursos");
btCursos.addEventListener("click", estatisticaCursos);

var btCursos = document.getElementById("btIdades");
btIdades.addEventListener("click", estatisticaIdades);