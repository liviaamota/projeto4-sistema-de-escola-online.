class Usuario {
    #nome
    #idade
    constructor(nome, idade){
        this.#nome = nome 
        this.#idade = idade
    }

        get usuario() {
            return(`Bem-vindo, ${this.#nome}!`)
        }

        set usuario(idade) {
            return(`Sua idade: ${this.#idade}`)
        }
 
    acessoPainel(){
        return "Acesso ao sistema escolar"
    }

}


module.exports = Usuario