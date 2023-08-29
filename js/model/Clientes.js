import Pessoa from "./Pessoa.js";

export default class Cliente extends Pessoa{
    constructor(nome, nascimento, cpf, origem, score) {
        super(nome)
        this.nascimento = nascimento;
        this. cpf = cpf;
        this.origem = origem;
        this.score = score;
    }
}
