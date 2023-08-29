// Selecionar todos os itens da lista
const listItems = document.querySelectorAll('.li div');
const active = document.querySelector('#active');

const tabConsulta = document.querySelector('#tabela-consulta');
const formCad = document.querySelector('#form-cadastrar')
const cad = document.querySelector('#cad');
const form = document.querySelector('#tabela');

let lis = [
    [`
    <li class="list li-unselect"><div class="first-element-selected"></div></li>
    <li class="list li" id="active"><div class="li-div">Cliente</div></li>
    <!-- <a href="/vendedorIndex.html"> -->
        <li class="list li li-unselect">
            <div class="li-div hover-li bg-black-gray top-unselect">Vendedor</div>
        </li>
    <!-- </a> -->
    <!-- <a href="/produtoIndex.html"> -->
        <li class="list li">
            <div class="li-div hover-li bg-black-gray"> Produto</div>
        </li>
    <!-- </a> -->
    `],
    [`
    <li class="li-unselect"><div class=""></div></li>
    <li class="li hover-li bg-black-gray"><div class="li-div">Cliente</div></li>
    <li class="li li-unselect"><div class="li-div hover-li bg-black-gray bottom-unselect">Vendedor</div></li>
    <li class="li"><div class="li-div" id="active">Produto</div></li>
    <li class="li-unselect"><div class="last-element-selected"></div>
    `],
    [
    `
    <li class="li-unselect"><div class=""></div></li>
    <li class="li li-unselect"><div class="li-div hover-li bg-black-gray bottom-unselect">Cliente</div></li>
    <li class="li" id="active"><div class="li-div">Vendedor</div></li>
    <li class="li li-unselect"><div class="li-div hover-li bg-black-gray top-unselect">Produto</div></li>
    `
    ]

]

const liList = document.querySelectorAll('.li');

liList.forEach((li) => {
    li.addEventListener('click', () => {
        const ul = document.querySelector("#tab-selections")
        // Correção para acessar o texto do elemento corretamente
        const liText = li.querySelector('.li-div').textContent;
        console.log(liText)
        if(liText == "Cliente") {
            ul.innerHTML = lis[0]
        }
        else if(liText == "Vendedor") {
            ul.innerHTML = lis[1]
        }
        else if(liText == "Produto") {
            ul.innerHTML = lis[2]
        }
    });
})

tabConsulta.addEventListener('click', () =>{
    cad.style.display = 'none';
    form.style.display = 'block';
})

formCad.addEventListener('click', () =>{
    cad.style.display = 'block';
    form.style.display = 'none';
})

