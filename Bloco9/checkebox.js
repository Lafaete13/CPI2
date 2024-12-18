// Função chamada ao clicar no checkbox
function clicou(event) {
    const campo = event.target; // Referência ao elemento checkbox
    if (campo.checked) {
        alert("O campo está selecionado!");
    } else {
        alert("Campo desmarcado!");
    }
}

// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Obtendo referência ao checkbox
    const checkbox = document.getElementById('checkbox');

    // Adicionando escuta de evento com addEventListener
    checkbox.addEventListener('click', clicou);
});
