const container = document.querySelector('.container')
const formulario = document.querySelector('.formulario')
const pesquisa = document.querySelector('.form')
const botaoComprar = document.querySelector('.buy')


async function getFilmes(buscar){
    let request = await fetch(`https://www.omdbapi.com/?t=${buscar}&plot=full&apikey=b2332d31`)
    let data = await request.json()
    
    console.log(data);

    container.innerHTML += `
    <img src="${data['Poster']}" alt="">

    <h1 style="
    left: 380px;
    text-transform: uppercase;
    width: 700px;
    height: 30px;
    font-size: 25px;
    position: fixed;
    ">${data['Title']}</h1>

    <p style="
    position:relative;
    top:280px;
    left:80px;">
    <strong>Duração: </strong>${data['Runtime']}</p>

    <p style="
    position:relative;
    top:280px;
    left:90px;"><strong>Ano: </strong>${data['Year']}</p>

    <p style="
    position:relative;
    top:280px;
    left:90px;"><strong>Diretor: </strong>${data['Director']}</p>

    <p style="
    position:relative;
    top:280px;
    left:90px;"><strong>Gênero: </strong>${data['Genre']}</p>

    <p style="
    color: #C4C5BA;
    width: 800px;
    position: relative;
    left: 380px;
    top: -370px;
    font-size: 14px;"><strong>Sinopse: </strong> ${data['Plot']}</p>
    `
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    container.innerHTML = ''
    getFilmes(pesquisa.value)
    pesquisa.value = '' 
})

function botaoIngresso(){
    botaoComprar.style.display = 'block';
}

