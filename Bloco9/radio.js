// script.js
// Função para converter o conteúdo de um campo individual
function convertField(field, conversionType) {
    if (conversionType === "upper") {
        field.value = field.value.toUpperCase();
    } else if (conversionType === "lower") {
        field.value = field.value.toLowerCase();
    }
}

// Função para converter todos os campos com base na seleção do rádio
function convertAllFields(conversionType) {
    const form = document.forms['form1'];
    if (form) { // Verifica se o formulário existe
        if (form.lastname) { // Verifica se o campo existe
            form.lastname.value = conversionType === "upper"
                ? form.lastname.value.toUpperCase()
                : form.lastname.value.toLowerCase();
        }
        if (form.firstname) { // Verifica se o campo existe
            form.firstname.value = conversionType === "upper"
                ? form.firstname.value.toUpperCase()
                : form.firstname.value.toLowerCase();
        }
    }
}

// Adicionar eventos para os campos de texto
const lastnameField = document.forms['form1']?.lastname; // Optional chaining
const firstnameField = document.forms['form1']?.firstname; // Optional chaining

if (lastnameField) {
    lastnameField.addEventListener('input', () => { // Usando 'input' para atualizar em tempo real
        const selectedRadio = document.querySelector('input[name="conversion"]:checked');
        if (selectedRadio) {
            convertField(lastnameField, selectedRadio.value);
        }
    });
}

if (firstnameField) {
    firstnameField.addEventListener('input', () => { // Usando 'input' para atualizar em tempo real
        const selectedRadio = document.querySelector('input[name="conversion"]:checked');
        if (selectedRadio) {
            convertField(firstnameField, selectedRadio.value);
        }
    });
}


// Adicionar eventos para os botões de rádio
const radios = document.querySelectorAll('input[name="conversion"]');
radios.forEach(radio => {
    radio.addEventListener('click', () => {
        convertAllFields(radio.value);
    });
});

// Seleciona o radio button "Maiúsculas" por padrão
document.getElementById("upper").checked = true;
convertAllFields("upper");