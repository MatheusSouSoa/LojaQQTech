// Selecionar todos os itens da lista
let lis = [
    [`
        <li class="list li-unselect"><div class="first-element-selected"></div></li>
        <li class="list li active" id="cliente"><div class="li-div">Cliente</div></li>
        <li class="list li li-unselect" id="vendedor" onclick="carregarUlVendedor()">
        <div class="li-div hover-li bg-black-gray top-unselect">Vendedor</div>
        </li>
        <li class="list li">
        <div class="li-div hover-li bg-black-gray" id="produto" onclick="carregarUlProduto()"> Produto</div>
        </li>
    `],
    [
        `
        <li class="li-unselect"><div class="first-element-unselected"></div></li>
        <li class="li li-unselect" onclick="carregarUlCliente()" id="cliente"><div class="li-div hover-li bg-black-gray bottom-unselect">Cliente</div></li>
        <li class="li active" id="vendedor"><div class="li-div">Vendedor</div></li>
        <li class="li li-unselect" id="produto" onclick="carregarUlProduto()"><div class="li-div hover-li bg-black-gray top-unselect">Produto</div></li>
    `
    ],
    [`
        <li class="li-unselect"><div class="first-element-unselected"></div></li>
        <li class="li hover-li bg-black-gray" id="cliente" onclick="carregarUlCliente()"><div class="li-div">Cliente</div></li>
        <li class="li li-unselect" id="vendedor" onclick="carregarUlVendedor()"><div class="li-div hover-li bg-black-gray bottom-unselect">Vendedor</div></li>
        <li class="li active" id="produto"><div class="li-div">Produto</div></li>
        <li class="li-unselect"><div class="last-element-selected"></div>
    `]

]

const active = document.querySelector('#active div');

const tabConsulta = document.querySelector('#tabela-consulta');
const formCad = document.querySelector('#form-cadastrar')
const cad = document.querySelector('#cad');
const form = document.querySelector('#tabela');
const liLis = document.querySelectorAll('#list')

function resetarActive() {
    for (let i = 0; i < liLis.length; i++) {
        liLis[i].classList.remove('active');
    }
}

function carregarUlCliente() {
    document.querySelector("#tab-selections").innerHTML = lis[0]
    const listItems = document.querySelectorAll('.active div');
    listItems.forEach( item => {
        console.log(item.textContent)
    })
}


function carregarUlVendedor() {
    document.querySelector("#tab-selections").innerHTML = lis[1]
    const listItems = document.querySelectorAll('.active div');
    listItems.forEach( item => {
        console.log(item.textContent)
    })
}

function carregarUlProduto() {
    document.querySelector("#tab-selections").innerHTML = lis[2]
    const listItems = document.querySelectorAll('.active div');
    listItems.forEach( item => {
        console.log(item.textContent)
    })
}


tabConsulta.addEventListener('click', () =>{
    cad.style.display = 'none';
    form.style.display = 'block';
})

formCad.addEventListener('click', () =>{
    cad.style.display = 'block';
    form.style.display = 'none';
})



