const campos = [
    ["nome", "cpf", "score", "origem", "dataNasc"],
    ["nome", 'matricula'],
    ["nome", 'valor', "categoria"]
]

function validarCampos(campo) {

    let err = campos[campo].reduce((accum, current) => {
        const input = document.querySelector(`#${current}`);
        input.style.border = "";
        input.placeholder = ``;
        if (input.value.trim() === "") { // Verifica se o valor do campo está vazio após remover espaços em branco
            input.style.border = "1px solid red";
            input.placeholder = `Informe um ${current} válido`;
            return accum + 1; // Incrementa o acumulador de erros
        }
        return accum; // Mantém o acumulador se não houver erro neste campo
    }, 0);

    return err === 0; 
}

export {
    validarCampos
}