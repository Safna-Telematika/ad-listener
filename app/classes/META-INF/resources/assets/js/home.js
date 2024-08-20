$('#btn_sync').click(function(){
    var URL = "/api/card/sync";
    $.ajax({
        url:URL,
        type:'GET',
        cache:false,
        beforeSend:function(){
            $('#btn_sync').attr('disabled');
        },
    }).done(function(json){
            $('#btn_sync').removeAttr('disabled');
            if (json.status) {
                swal("Selamat!", json.message, "success")
                .then((result)=>{
                    window.location = "/home";
                });
            } else {
                swal("Maaf!", json.message, "error");
            }
    });
});