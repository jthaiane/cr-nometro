let intervalo;

function atualizarCronometro() {
    const dataFutura = new Date("2026-03-21T23:59:59");
    const agora = new Date();
    const diferenca = dataFutura - agora;

    if (diferenca <= 0) {
        clearInterval(intervalo);
        document.getElementById('timer').textContent = "Chegou!";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('timer').textContent = `${dias}d ${horas}h ${minutos}min ${segundos}s`;
}

function iniciarCronometro() {
    clearInterval(intervalo);
    atualizarCronometro(); // Chama a função imediatamente para evitar atraso de 1 segundo
    intervalo = setInterval(atualizarCronometro, 1000); // Atualiza a cada 1 segundo
}

iniciarCronometro();



