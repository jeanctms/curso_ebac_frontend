$(document).ready(function() {
  $('header button').click(function() {
    $('form').slideDown();
  });

  $('#botao-cancelar').click(function () {
    $('form').slideUp();
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    const novaAtividade = $('#nova-atividade').val();
    const novoHorario = $('#novo-horario').val();
    const novaLinha = $('<tr></tr>');
    $('<td></td>').text(novaAtividade).appendTo(novaLinha);
    $('<td></td>').text(novoHorario).appendTo(novaLinha);
    $(novaLinha).appendTo('#tabela-corpo');
    $('#nova-atividade').val('');
    $('#novo-horario').val('');
  });
  
  // Aplica linha através do texto ao clicar em uma linha da tabela
  $('table').on('click', 'tr', function() {
    $(this).toggleClass('completed');
  });
});