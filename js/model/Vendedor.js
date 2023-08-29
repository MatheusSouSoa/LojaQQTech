import Pessoa from "./Pessoa.js";

export default class Vendedor extends Pessoa {
    constructor(nome, matricula) {
        super(nome)
        this.matricula = matricula;
    }
}
