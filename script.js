$("#btn_submit").click(function(){
    $("#img_send").css("display", "none");
    $("#btn_submit").html("Enviando...");
    $("#btn_submit").css("color", "white");
    $("#btn_submit").css("text-align", "center");
    $("#btn_submit").css("line-height", "50px");
    values = $('#interessados_form').serialize();
    $.ajax({
        url: 'contact.php',
        type: 'POST',
        data: values,
        dataType: 'json',
        success: function(response) {
            if(response.status == 'ok') {
                $("#btn_submit").html("E-mail enviado :)");
                window.location.replace('/formularioconfirmado');
            } else {
                $("#btn_submit").html("Algo deu errado!");
            }
        },
        error: function(){
            $("#btn_submit").html("Algo deu errado :(");
        }
    })
});
