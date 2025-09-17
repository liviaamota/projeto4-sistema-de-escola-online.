class Turma {
    constructor(nome ){
        this.nome = nome
        this.disciplina = []
        this.nomeAluno = []
    }
    
     mostrarNome() {
        return ` 
         Turma: ${this.nome}.`
    }

  adicionarDisciplina(disciplina) {
    this.disciplina.push(disciplina)   
  }

  adicionarAluno() {
     this.nomeAluno.push("livia")
  }

}
module.exports = Turma