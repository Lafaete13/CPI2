// Função para verificar se um caractere é numérico
function ehDigito(caractere) {
    return caractere >= "0" && caractere <= "9";
}

// Função para verificar o campo de telefone
function verificaTelefone(event) {
    const campo = event.target;
    const telef = campo.value;
    const erroSpan = document.getElementById('erro');
    erroSpan.innerHTML = ""; // Limpar mensagem de erro anterior

    for (let i = 0; i < telef.length; i++) {
        if (!ehDigito(telef.charAt(i))) {
            erroSpan.innerHTML = `Caractere '${telef.charAt(i)}' inválido: deve ser número!`;
            campo.focus();
            return false;
        }
    }
    return true;
}

// Adicionando eventos ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    const campoTelefone = document.getElementById('campo-telefone');

    // Adicionar o evento blur ao campo de telefone
    campoTelefone.addEventListener('blur', verificaTelefone);
});
