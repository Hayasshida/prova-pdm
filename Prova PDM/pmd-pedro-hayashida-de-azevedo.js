let aluno1 = {
    nome: "Pedro Hayashida de Azevedo",
    idade: 18,
    cursando: ["TCC", "PDM", "TIA", "Estrutura de Dados", "Engenharia de Software"],
    presenca: ["2024-02-22", "2024-02-21", "2024-02-20"],
    ra: "2210322"
}

let aluno2 = {
    nome: "Ribamar",
    idade: 14,
    cursando: ["Estrutura de Dados", "Engenharia de Software"],
    presenca: ["2022-03-22"],
    ra: "7789562"
}

function validarCadastro(aluno){
    const response = {
        status: "valid",
        message: "Cadastro válido",
        aluno: aluno
    }
    if(validarNome(aluno) && verificarIdade(aluno) && verificiarMaterias(aluno) && verificarPresenca(aluno) && verificarRa(aluno)){
        console.log(response)
    }
    else{
        console.log("O aluno " + aluno.nome + " possui as seguintes informações inválidas")
        validarNome(aluno)
        verificarIdade(aluno)
        verificiarMaterias(aluno)
        verificarPresenca(aluno)
        verificarRa(aluno)
    }
}
//Esta função valida se o nome do aluno é maior que 10 caracteres, caso não for retorna uma mensagem de erro
function validarNome(aluno){
    const tamanhoNome = aluno.nome.length
    if(tamanhoNome < 10){
        return console.log("Tamanho do nome inválido, é menor que 10 caracteres")
    }
    return true
}
//Esta função valida se a idade do aluno é maior que 16 caracteres, caso não for retorna uma mensagem de erro
function verificarIdade(aluno){
    const idade = aluno.idade
    if(idade <16){
        return console.log("Idade é menor que 16")
    }
    return true
}
//Esta função valida se as materias do aluno são maiores que 4 materias, caso não for retorna uma mensagem de erro
function verificiarMaterias(aluno){
    const materias = aluno.cursando
    if((materias.length) < 4){
        return console.log("Quantidade de materias inválida")
    }
    return true
}
//Esta função valida se a presença do aluno é maior que 2, caso não for retorna uma mensagem de erro
function verificarPresenca(aluno){
    const presenca = aluno.presenca
    if((presenca.length) <= 2){
        return console.log("Assiduidade não atinge o mínimo")
    }
    return true
}
 //Esta função valida se o ra do aluno é maior que 7 caracteres, caso não for retorna uma mensagem de erro
function verificarRa(aluno){
    const tamanhoRa = aluno.ra.length
    if(tamanhoRa < 7){
        return console.log("RA inválido")
    }
    return true
}

validarCadastro(aluno2)

validarCadastro(aluno1)

