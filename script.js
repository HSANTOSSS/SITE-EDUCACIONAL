function verificarResposta(resposta) {
    const resultado = document.getElementById("resposta");
    if (resposta === 'b') {
        resultado.textContent = "Correto! A capital do Brasil é Brasília.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Incorreto. Tente novamente.";
        resultado.style.color = "red";
    }
}