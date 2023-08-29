import Cliente from './model/Clientes.js'
import Vendedor from './model/Vendedor.js'
import Produto from './model/Produto.js'
import {produtoForms, clienteForms, vendedorForms} from './templates/forms.js'
import { tabelaCliente, tabelaProduto, tabelaVendedor } from './templates/tabelas.js'
import { cabecalho } from './templates/cabecalhos.js'
import {  validarCampos } from './validator/validators.js'
import atualizarSelect from './templates/carregarSelect.js'

export const vendedores = []
export const clientes = []
export const produtos = []

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

document.getElementById("gerar-relarotio").addEventListener("click", function() {
  // Coleta os dados da tabela
  const table = document.getElementById("dados-da-tabela");
  const rows = table.getElementsByTagName("tr");
  const data = [];
  for (let i = 1; i < rows.length; i++) { // Começa em 1 para pular o cabeçalho
      const cells = rows[i].getElementsByTagName("td");
      const rowData = [];
      for (let j = 0; j < cells.length; j++) {
          rowData.push(cells[j].textContent);
      }
      data.push(rowData);
  }

  // Envia os dados para o servidor Python
  axios.post("/gerar_relatorio", { data }).then(function(response) {
      console.log(response.data); // Este é o relatório gerado em Python
  });
});
