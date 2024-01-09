$(document).ready(function(){
    
    $('form ').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $(`<li><span>${novaTarefa}</span></li>`);
        $('#nova-tarefa').val('');
        $(novoItem).appendTo('ol');
        const imagem = $('<img src="ok.png" alt="Simbolo ok" />');
        $(imagem).appendTo(novoItem);
        $(novoItem).click(function(event){
            $(this).addClass("clicado");
        });
    })
    



});