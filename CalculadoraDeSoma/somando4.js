const oneInput = document.querySelector('.first-input');
const twoInput = document.querySelector('.second-input');
const result = document.querySelector('.three-input');
const somarButton = document.querySelector('.btn-somar');

// Função para validar a entrada de números
function validarEntrada(event) {
    const charCode = event.charCode ? event.charCode : event.keyCode;
    if (charCode < 48 || charCode > 57) {
        event.preventDefault();
    }
}

// Adiciona eventos de validação aos campos de entrada
oneInput.addEventListener('keypress', validarEntrada);
twoInput.addEventListener('keypress', validarEntrada);

// Função que realiza a soma
function somar() {
    const somar1 = Number(oneInput.value);
    const somar2 = Number(twoInput.value);
    
    if (isNaN(somar1) || isNaN(somar2)) {
        result.value = "Entrada inválida";
    } else {
        const resultado = somar1 + somar2;
        result.value = resultado;
    }
}

// Adiciona o evento de clique ao botão para executar a função somar
somarButton.addEventListener('click', somar);

// Adiciona o evento de teclado para executar a função somar ao pressionar Enter
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        somar();
    }
});
