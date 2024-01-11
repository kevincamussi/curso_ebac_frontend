$(document).ready(function () {
    $('#nome').attr('placeholder', 'Digite seu nome');

    $('#email').attr('placeholder', 'Digite seu e-mail');

    $('#endereco').attr('placeholder', 'Digite seu endereço');

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Digite seu telefone'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Digite seu CPF'
    });

    $('#cep').mask('00.000-000', {
        placeholder: 'Digite seu CEP'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            }
        }
    })
})


