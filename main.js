$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', { placeholder: '(__) _____-____' });
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#formularioContato').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3,
                nomeCompleto: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            mensagem: {
                required: true,
            }
        },
        messages: {
            nome: {
                required: 'Por favor, insira o seu nome completo.',
                minlength: 'O nome deve ter pelo menos 3 caracteres.'
            }
        },
        submitHandler: function (form) {
            console.log('Formulário enviado:', form);
            alert('Formulário enviado com sucesso!');
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    });

    $.validator.addMethod("nomeCompleto", function (value, element) {
        return this.optional(element) || /^\S.*\s.*\S$/.test(value);
    }, "Por favor, insira o seu nome completo.");

});
