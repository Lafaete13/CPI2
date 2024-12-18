function inclui() {
    const form = document.forms['formulario_frutas'];
    const novo = form.novo.value;
    const frutas = form.frutas;

    if (novo === "") {
        document.getElementById('erro').innerText = "Escreva um novo item";
        form.novo.focus();
        return;
    }
    const tam = frutas.length;
    frutas.options[tam] = new Option(novo);
    document.getElementById('erro').innerText = "";
}

function escreve() {
    const form = document.forms['formulario_frutas'];
    const frutas = form.frutas;
    const selecionado = form.selecionado;

    const ind = frutas.selectedIndex;
    selecionado.value = frutas.options[ind].text;
}

function apaga() {
    const form = document.forms['formulario_frutas'];
    const frutas = form.frutas;

    frutas.options[frutas.selectedIndex] = null;
    escreve();
}

function muda() {
    const form = document.forms['formulario_frutas'];
    const novo = form.novo.value;
    const frutas = form.frutas;

    if (novo === "") {
        document.getElementById('erro').innerText = "Escreva um novo item";
        form.novo.focus();
        return;
    }

    const ind = frutas.selectedIndex;
    frutas.options[ind].text = novo;
    document.getElementById('erro').innerText = "";
    escreve();
}

// Associando eventos com addEventListener
document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms['formulario_frutas'];
    form.frutas.addEventListener('change', escreve);
    document.getElementById('btn-acrescentar').addEventListener('click', inclui);
    document.getElementById('btn-apagar').addEventListener('click', apaga);
    document.getElementById('btn-mudar').addEventListener('click', muda);
});
