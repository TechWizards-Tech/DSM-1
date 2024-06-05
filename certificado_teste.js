// js/certificado_teste.js
function printMain() {
    // Oculta o botão de impressão antes de imprimir
    var button = document.querySelector('button');
    button.style.display = 'none';

    // Chama o método de impressão diretamente
    window.print();

    // Mostra novamente o botão de impressão após a impressão
    button.style.display = 'block';
}

