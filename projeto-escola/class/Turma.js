class Turma {
    constructor(nome ){
        this.nome = nome
        this.disciplina = []
    }
    
     mostrarNome() {
        return ` 
         Turma: ${this.nome}.`
    }

  adicionarDisciplina() {
    this.disciplina.push()   
  }

}
module.exports = Turma