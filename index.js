const Usuario = require("./projeto-escola/class/Usuario")
const Aluno = require("./projeto-escola/class/Aluno")
const Professor = require("./projeto-escola/class/Professor")
const Coordenador = require("./projeto-escola/class/Coordenador")
const Disciplina = require("./projeto-escola/class/Disciplina")
const Turma = require("./projeto-escola/class/Turma")


const aluno = new Aluno("Maria", 16)
const professor = new Professor("João", 35)
const coordenador = new Coordenador("Ana", 40)

console.log(aluno.acessoPainel())
console.log("=============================")

console.log(professor.acessoPainel())
console.log("=============================")

console.log(coordenador.acessoPainel())
console.log("=============================")

const matematica = new Disciplina("Matemática", 80)
const turmaA = new Turma("1ºA")

turmaA.adicionarDisciplina(matematica)
turmaA.adicionarAluno(aluno)

console.log(turmaA.disciplinas)
console.log(turmaA.alunos)