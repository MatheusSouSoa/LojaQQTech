const campos = [
    ["nome", "cpf", "score", "origem", "dataNasc"],
    ["nome", 'matricula'],
    ["nome", 'valor', "categoria"]
]

function cabecalho(campo, select) {
    const dados = document.querySelector("#dados")
    dados.innerHTML = ''
    
    dados.innerHTML +=
    `
        <div id="titulo">
            <h2>Visualizando ${select} cadastrados:</h2>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        ${campos[campo].map((c) => {
                            return `<th>${c}</th>`
                        }).join("")}
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody id="infos">
                </tbody>
            </table>
        </div>
        `
}

export {
    cabecalho
}