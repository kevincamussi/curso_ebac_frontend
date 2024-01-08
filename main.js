const formulario = document.querySelector('form');
const campoA = document.querySelector('#campo-a');
const campoB = document.querySelector('#campo-b');
const divInformativa = document.querySelector('.mensagem');
const erro = `<p>Formulario Inválido</p>`;
const valido = `<p>Formulário Válido</p>`;

function eMaior(campoA, campoB) {
    
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        
        parseInt(campoA.value);
        parseInt(campoB.value);
        
        if (campoA.value > campoB.value) {
            divInformativa.classList.remove('valido')
            divInformativa.classList.add('erro');
            divInformativa.innerHTML = erro;
            campoA.value = '';
            campoB.value = '';
        }
        else {
            divInformativa.classList.remove('erro')
            divInformativa.classList.add('valido');
            divInformativa.innerHTML = valido;
            campoA.value = '';
            campoB.value = '';
        }
    })
      
}

eMaior(campoA, campoB);



