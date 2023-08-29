const campos = [
    ["nome", "cpf", "score", "origem", "nascimento"],
    ["nome", 'matricula'],
    ["nome", 'valor', "categoria"]
];

const select03 = document.querySelector("#select03");
const select01 = document.querySelector("#select01");  

select01.addEventListener("change", atualizarSelect);  

export default function atualizarSelect() {
    let parametro = select01.value === 'cliente' ? 0 : select01.value === 'vendedor' ? 1 : select01.value === 'produto' ? 2 : 3;  
    select03.innerHTML = campos[parametro].map((campo) => {
        return `<option value="${campo}">${campo}</option>`;
    }).join("");
    select03.innerHTML += `<option value="semFiltro" selected>Sem filtro</option>`
}