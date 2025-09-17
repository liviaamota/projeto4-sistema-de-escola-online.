const Usuario = require("./Usuario")

class Aluno extends Usuario {
    acessoPainel() {
        return "Painel do Aluno: consultar notas e disciplinas"
    }
}


module.exports = Aluno 