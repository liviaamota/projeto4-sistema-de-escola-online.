class Nota {
    constructor(valor, materia){
        this.valor = valor
        this.materia = materia
    }
    
     mostrarNotas() {
        return ` 
         Nota: ${this.nota}.`
    }
}

module.exports = Nota