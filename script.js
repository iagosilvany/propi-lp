$("#btn_submit").click(function(){
    $("#btn_submit").attr("disabled", true);
    $("#btn_submit").html("Sending...");
    values = $('#interessados_form').serialize();
    $.ajax({
        url: 'contact.php',
        type: 'POST',
        data: values,
        dataType: 'json',
        success: function(response) {
            if(response.status == 'ok') {
                $("#ContactForm1_contact-form-success-message").removeClass("d-none");
                $("#btn_submit").addClass("d-none")
            } else {
                $("#ContactForm1_contact-form-error-message").removeClass("d-none");
                $("#btn_submit").addClass("d-none")
            }
        },
        error: function(){
            $("#ContactForm1_contact-form-error-message").removeClass("d-none");
            $("#btn_submit").addClass("d-none")
        }
    })
}); 
