$("#btn_submit").click(function(){
    $("#btn_submit").attr("disabled", true);
    $("#btn_submit").html("Enviando...");
    values = $('#interessados_form').serialize();
    console.log(values);
    $.ajax({
        url: 'contact.php',
        type: 'POST',
        data: values,
        dataType: 'json',
        success: function(response) {
            if(response.status == 'ok') {
                // redirect formulario concluído
                $("#btn_submit").html("E-mail enviado!");
            } else {
                $("#btn_submit").html("Algo deu errado!");
            }
        },
        error: function(){
            $("#btn_submit").html("Algo deu errado.");
        }
    })
});
