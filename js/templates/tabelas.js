    import { clientes } from "../script.js";
    import { vendedores } from "../script.js";
    import { produtos } from "../script.js";
    import { filter } from "../script.js";
    import {atualizarForms} from "../script.js";
    

    window.removeFunc = (param) => {
        const select = document.querySelector("#select01").value
        
        if(select === 'cliente') {
            clientes.splice(param, 1)
        }
        else if(select === 'vendedor') {
            vendedores.splice(param, 1)
        }
        else {
            produtos.splice(param, 1)
        }
        
        atualizarForms()
    }

    window.editFunc = (param) => {
        const select = document.querySelector("#select01").value
        
        if(select == 'cliente') {
            const nome = document.querySelector("#nome")
            const cpf = document.querySelector("#cpf")
            const score = document.querySelector("#score")
            const origem = document.querySelector("#origem")
            const nascimento = document.querySelector("#dataNasc")
            nome.value = clientes[param].nome
            cpf.value = clientes[param].cpf
            score.value = clientes[param].score
            origem.value = clientes[param].origem
            nascimento.value = clientes[param].nascimento
            clientes.splice(param, 1)
            console.log(clientes[param])
        }
        else if(select == "vendedor"){
            console.log(vendedores[param])
            const nome = document.querySelector("#nome")
            const matricula = document.querySelector("#matricula")
            nome.value = vendedores[param].nome
            matricula.value = vendedores[param].matricula
            vendedores.splice(param, 1)            
        }
        else {
            console.log(produtos[param])
            const nome = document.querySelector("#nome")
            const valor = document.querySelector("#valor")
            const categoria = document.querySelector("#categoria")
            nome.value = produtos[param].nome
            valor.value = produtos[param].valor
            categoria.value = produtos[param].categoria
            produtos.splice(param, 1)
        }
    }

    function tabelaCliente(param) { // Define um valor padrão para o parâmetro
        const infos = document.querySelector("#infos");
        infos.innerHTML = "";

        if(filter.length > 0 && param != 0) {
            filter.forEach((cliente, indice) => {
                infos.innerHTML += `
                <tr id="${indice}">
                    <td>${cliente.nome}</td>
                    <td>${cliente.cpf}</td>
                    <td>${cliente.score}</td>
                    <td>${cliente.origem}</td>
                    <td>${cliente.nascimento}</td>
                    <td>
                        <ul class="display-flex-ul">
                            <li>
                                <img class="edit-img" onclick="editFunc(${indice})" src="/img/editar.png" alt="">
                            </li>
                            <li class="removeBtn" onclick="removeFunc(${indice})">
                                X
                            </li>
                        </ul>
                    </td>
                </tr>
                `;
            });
            return 
        }

        clientes.forEach((cliente, indice) => {
            infos.innerHTML += `
            <tr id="${indice}">
                <td>${cliente.nome}</td>
                <td>${cliente.cpf}</td>
                <td>${cliente.score}</td>
                <td>${cliente.origem}</td>
                <td>${cliente.nascimento}</td>
                <td>
                    <ul class="display-flex-ul">
                        <li>
                            <img class="edit-img" onclick="editFunc(${indice})" src="/img/editar.png" alt="">
                        </li>
                        <li class="removeBtn" onclick="removeFunc(${indice})">
                            X
                        </li>
                    </ul>
                </td>
            </tr>
            `;
        });
    }

    function tabelaVendedor (param) {
        const infos = document.querySelector("#infos")
        infos.innerHTML = ""

        if(filter.length > 0 && param != 0) {
            filter.forEach((vendedor, indice) => {
                infos.innerHTML += `
                <tr id="${indice}">
                    <td>${vendedor.nome}</td>
                    <td>${vendedor.matricula}</td>
                    <td>
                        <ul class="display-flex-ul">
                            <li>
                                <img class="edit-img" onclick="editFunc(${indice})" src="/img/editar.png" alt="">
                            </li>
                            <li class="removeBtn" onclick="removeFunc(${indice})">
                                X
                            </li>
                        </ul>
                    </td>
                </tr>
                `;
            });
            return 
        }

        vendedores.map((vendedor, indice) => {
            infos.innerHTML += `
            <tr id="${indice}" >
                <td>${vendedor.nome}</td>
                <td>${vendedor.matricula}</td>
                <td>
                    <ul class="display-flex-ul">
                        <li>
                            <img class="edit-img" onclick="editFunc(${indice})" src="/img/editar.png" alt="">
                        </li>
                        <li class="removeBtn" onclick="removeFunc(${indice})">
                            X
                        </li>
                    </ul>
                </td>
            </tr>
            `
        })
    }
    function tabelaProduto (param) {
        const infos = document.querySelector("#infos")
        infos.innerHTML = ""

        if(filter.length > 0 && param != 0) {
            filter.forEach((produto, indice) => {
                infos.innerHTML += `
                <tr id=${indice}>
                    <td>${produto.nome}</td>
                    <td>${produto.valor}</td>
                    <td>${produto.categoria}</td>
                    <td>
                        <ul class="display-flex-ul">
                            <li>
                                <img class="edit-img" onclick="editFunc('${indice}')" src="/img/editar.png" alt="">
                            </li>
                            <li class="removeBtn" onclick="removeFunc(${indice})">
                                X
                            </li>
                        </ul>
                    </td>
                </tr>
                `;
            });
            return 
        }

        produtos.map((produto, indice) => {
            infos.innerHTML += `
            <tr id="${indice}">
                <td>${produto.nome}</td>
                <td>${produto.valor}</td>
                <td>${produto.categoria}</td>
                <td>
                    <ul class="display-flex-ul">
                        <li>
                            <img class="edit-img" onclick="editFunc(${indice})" src="/img/editar.png" alt="">
                        </li>
                        <li class="removeBtn" onclick="removeFunc(${indice})">
                            X
                        </li>
                    </ul>
                </td>
            </tr>
            `
        })
    }

    export {
        tabelaCliente,
        tabelaVendedor,
        tabelaProduto
    }