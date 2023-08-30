import Cliente from './model/Clientes.js'
import Vendedor from './model/Vendedor.js'
import Produto from './model/Produto.js'
import {produtoForms, clienteForms, vendedorForms} from './templates/forms.js'
import { tabelaCliente, tabelaProduto, tabelaVendedor } from './templates/tabelas.js'
import { cabecalho } from './templates/cabecalhos.js'
import {  validarCampos } from './validator/validators.js'
import atualizarSelect from './templates/carregarSelect.js'

export let vendedores = []
export let clientes = []
export let produtos = []

const select = document.querySelector("#select01");
const btnCad = document.querySelector("#btnCad");
const buscar = document.querySelector("#consultar");
const btnReset = document.querySelector("#resetar");

btnReset.addEventListener("click", () => {
  filter = []
  loadTable(filter, 0)
})

buscar.addEventListener("click", filtrar)

select.addEventListener("change", (e) => {
  filter = []
  loadTable(filter, 0)
  atualizarForms(select.value);
});

const select3 = document.querySelector("#select03");
const campoBusca = document.querySelector("#campo-de-busca");

select3.addEventListener("change", (e) => {
  loadTable(0)
})
export let filter = []

function filtrar() {// ta feio, mas funciona :(. eu acho KKKKKKKKKKKKKKKKKKKKK
  const filtro = campoBusca.value; 
  console.log("valor",filtro);
  let CurrentSelect = select3.value
  filter = []

  let array = []
    if(select.value == "cliente"){
        for(const cliente of clientes) {
            if(cliente.nome == filtro && CurrentSelect == "nome") {
                filter.push(cliente);
            }
            if(cliente.cpf == filtro && CurrentSelect == "cpf") {
              filter.push(cliente);
            }
            if(cliente.nascimento == filtro && CurrentSelect == "nascimento") {
                filter.push(cliente);
            }
            if(cliente.origem == filtro && CurrentSelect == "origem") {
                filter.push(cliente);
            }
            if(cliente.score == filtro && CurrentSelect == "score") {
              filter.push(cliente);
            }
            if(filter.length > 0) {
              tabelaCliente(filter, 1)
            }
        }
    }
    else if(select.value == "vendedor"){
      for(const vendedor of vendedores) {
          if(vendedor.nome == filtro && CurrentSelect == "nome") {
            filter.push(vendedor);
          }
          if(vendedor.matricula == filtro && CurrentSelect == "matricula") {
            filter.push(vendedor);
          }
          if(filter.length > 0) {
            tabelaVendedor(filter, 1)
          }
      }
  }
  else{
    for(const produto of produtos) {
      if(produto.nome == filtro && CurrentSelect == "nome") {
            filter.push(produto);
        }
        if(produto.valor == filtro && CurrentSelect == "valor") {
          filter.push(produto);
        }
        if(produto.categoria == filtro && CurrentSelect == "categoria") {
          filter.push(produto);
        }
        if(filter.length > 0) {
          tabelaProduto(filter, 1)
        }
      }
    }
    
    campoBusca.value = ""
    
  };

  
btnCad.addEventListener("click", () => {
    cadastrar()
})

export function cadastrar() {

  if(select.value == 'cliente') {
    const nome = document.querySelector("#nome").value
    const cpf = parseInt(document.querySelector("#cpf").value)
    const dataNascimento = document.querySelector("#dataNasc").value
    const origem = document.querySelector("#origem").value
    const score = parseInt(document.querySelector("#score").value)
    
    if(validarCampos(0) == false)
      return
    
    const c = new Cliente(nome, dataNascimento, cpf, origem, score)
    clientes.push(c)
  }
  else if(select.value == 'vendedor') {
    const nome = document.querySelector("#nome").value
    const matricula = parseInt(document.querySelector("#matricula").value)
    
    if(validarCampos(1) == false)
      return
  
  const v = new Vendedor(nome, matricula)
    vendedores.push(v)
    vendedores = vendedores.sort((a, b) => a.nome.localeCompare(b.nome))
    console.log(vendedores)
  }
  else if(select.value == 'produto') {
    const nome = document.querySelector("#nome").value
    const valor = parseInt(document.querySelector("#valor").value)
    const categoria = document.querySelector("#categoria").value
    
    if(validarCampos(2) == false)
    return
  
    const p = new Produto(nome, valor, categoria)
    produtos.push(p)
  }
  atualizarForms()
}

export function atualizarForms () {
  const select = document.querySelector("#select01").value
  
  if(select == 'cliente') {
    clienteForms(select)
  }
  else if (select == 'vendedor') {
    vendedorForms(select)
  }
  else if (select == 'produto') {
    produtoForms(select)
  }   
  loadTable()
}

function loadPage () {
  clienteForms('cliente')
  loadTable('cliente')
  atualizarSelect()
}

loadPage()

function loadTable (param) {

  if(select.value == 'cliente') {
    cabecalho(0, select.value)
    tabelaCliente(param)
  }
  else if (select.value == 'vendedor') {
    cabecalho(1, select.value)
    tabelaVendedor(param)
  }
  else if (select.value == 'produto') {
    cabecalho(2 ,select.value)
    tabelaProduto(param)
  }   
}

document.getElementById("gerar-relatorio").addEventListener("click", async () => {
  let array  = []
  
  console.log(select.value)

  if(select.value == "cliente") {
    array = clientes
  }
  else if(select.value == 'vendedor') {
    array = vendedores
  }
  else if (select.value == 'produto') {
    array = produtos
  }

  array = JSON.stringify(array)

  if(array){
    try {
      await gerar_relatorio(array) 
    }
    catch (error) {
      console.log(error)
    }
  }

});

async function gerar_relatorio(data) {

  const response = await fetch(
    '/gerar_relatorio', 
    {method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({relatorio: data})}
  );

  if(response.ok) {
    console.log("Resposta com sucesso")
    const blob = await response.blob();
    const blob_url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blob_url
    link.download = 'Relatorio.xlsx';
    link.textContent = 'Download relatorio'
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  else {
    console.log("Erro ao gerar arquivo :(")
  }

}
