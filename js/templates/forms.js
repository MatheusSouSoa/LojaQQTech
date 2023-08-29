import { ORIGEM } from "../enums/origemEnum.js";

function vendedorForms(select) {
  const campos = document.querySelector("#campo-de-inputs");
  campos.innerHTML = `
    <legend id="legenda">Cadastro de ${select}:</legend>
    <div>
      <label for="nome">Nome:</label>
      <input class="inputs" type="text" name="nome" id="nome">
    </div>
    <div>
      <label for="matricula">Matricula:</label>
      <input class="inputs" type="number" name="matricula" id="matricula">
    </div>
  `;
}

function clienteForms(select) {
  const campos = document.querySelector("#campo-de-inputs");
  campos.innerHTML = `
    <legend id="legenda">Cadastro de ${select}:</legend>
    <div>
      <label for="nome">Nome:</label>
      <input class="inputs" type="text" name="nome" id="nome">
    </div>
    <div>
      <label for="cpf">CPF:(apenas numeros)</label>
      <input class="inputs" type="number" maxlength="11" id="cpf">
    </div>
    <div class="inputFlex">
      <div class="inputColunm">
        <label for="dataNasc">data de nascimento:</label>
        <input class="inputs" type="date" name="dataNasc" id="dataNasc">
      </div>
      <div class="inputColunm">
      Origem:
        <select name="" id="origem" class="select1">
        ${Object.values(ORIGEM).map(origem => `
          <option value="${origem}">${origem}</option>
        `).join('')}
      </select>
      </div>
    </div>
    <div>
      <label for="score">Score:</label>
      <input class="inputs" type="number" name="score" id="score">
    </div>
  `
}

{/* <option value="loja" selected>Loja</option>
<option value="site">Site</option> */}

function produtoForms(select) {
  const campos = document.querySelector("#campo-de-inputs");
  campos.innerHTML = `
  <legend id="legenda">Cadastro de ${select}:</legend>
  <div>
    <label for="nome">Nome:</label>
    <input class="inputs" type="text" name="nome" id="nome">
  </div>
  <div>
    <label for="valor">Valor:</label>
    <input class="inputs" type="number" name="valor" id="valor">
  </div>
  <div>
    <label for="categoria">Categoria:</label>
    <input class="inputs" type="text" name="categoria" id="categoria">
  </div>
  `;
}

export {
  produtoForms, clienteForms, vendedorForms
}
