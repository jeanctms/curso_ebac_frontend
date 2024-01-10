$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', { placeholder: '(__) _____-____' });
    $('#cpf').mask('000.000.000-00');

    $('#formularioContato').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3, // Exige no mínimo 3 caracteres para o nome
                nomeCompleto: true // Adiciona a regra personalizada para nome completo
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            cpf: {
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
            // Aqui você pode adicionar a lógica para enviar o formulário
            console.log('Formulário enviado:', form);

            // Notificação de envio bem-sucedido
            alert('Formulário enviado com sucesso!');
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    });

    // Adiciona o método de validação para verificar se o nome é composto
    $.validator.addMethod("nomeCompleto", function (value, element) {
        return this.optional(element) || /^\S.*\s.*\S$/.test(value);
    }, "Por favor, insira o seu nome completo.");

});