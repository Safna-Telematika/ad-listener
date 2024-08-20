$('#btn_register').click(function(){
    $('#form_register').submit();
})
$('#form_register').submit(function(e){
    e.preventDefault();
    $(this).ajaxSubmit({
        beforeSend: function() {
            $('#form_register').hide();
        },
        success: function(json, statusText, xhr, $form) {
            $('#form_register').show();
            if (json.status) {
                swal("Good job!", json.message, "success")
                .then((result)=>{
                    window.location = "/login";
                });
            } else {
                swal("Maaf!", json.message, "error");
            }
        }
    });

})
$('#form_login').submit(function(e){
    e.preventDefault();
    $(this).ajaxSubmit({
        beforeSend: function() {
            $('#form_register').hide();
        },
        success: function(json, statusText, xhr, $form) {
            console.log(json);
            $('#form_register').show();
            if (json.status) {
                swal("Good job!", json.message, "success")
                .then((result)=>{
                    window.location = "/home";
                });
            } else {
                swal("Maaf!", json.message, "error");
            }
        }
    });

})