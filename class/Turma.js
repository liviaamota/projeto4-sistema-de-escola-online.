const util = require("node:util")
class Turma {
    #alunos
    constructor(turma ){
        this.turma = turma
        this.disciplinas = []
        this.#alunos = []
    }
    
     mostrarTurma() {
        return ` 
         Turma: ${this.turma}.`
    }

  adicionarDisciplina(Disciplina) {
    this.disciplinas.push(Disciplina)   
  }

  adicionarAluno(aluno) {
     this.#alunos.push(aluno)
  }

  
    [util.inspect.custom]() {
        return `Aluno { nome: ${this.nome}, idade: ${this.idade}}`
    }

}
module.exports = Turma