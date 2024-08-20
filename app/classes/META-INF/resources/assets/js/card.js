$('.cast').click(function(e){
    var id = $(this).attr('data-id').trim();
    var URL = `/api/card/show/${id}`;
//    console.log(URL);
    $.ajax({
        url: URL,
        type:'GET',
        cache: false,
        success:function(e){
        },
    }).done(function(json){
        console.log(json);
    });
});
$('.delete').click(function(e){
    var id = $(this).attr('data-id').trim();
    var URL = `/api/card/remove/${id}`;
    var answ = confirm("Apakah Anda Ingin Menghapus kartu ini?");
    if(!answ) {
        return;
    }
    $.ajax({
        url: URL,
        type:'GET',
        cache:false,
    }).done(function(xml){
    const json = $.xml2json(xml);
    const result = json.Body.DeleteCardResponse.DeleteCardResult;
//    console.log(result);
    if(result.ErrCode==='0'){
                swal("Good job!", result.ErrMessage, "success")
                .then((result)=>{
                    window.location = "/card";
                });
        } else {
            swal("Sorry!", result.ErrMessage, "error");
        }
    });
});
$('#form_add').submit(function(e){
    e.preventDefault();
    var URL = $(this).attr('action');
    var formData= $('#card_profile').val();
    $.ajax({
        url: URL,
        type:'POST',
        data: formData,
        dataType:'xml',
        headers : {
        "Content-Type":"text/xml",
        "Accept":"text/xml"},
        processData: false,
        success:function(e){
        },
    }).done(function(xml){
        const json = $.xml2json(xml);
        const result = json.Body.AddCardResponse.AddCardResult;
//        console.log(result);
        if(result.ErrCode==='0'){
                swal("Good job!", result.ErrMessage, "success")
                .then((result)=>{
                    window.location = "/card";
                });
        } else {
            swal("Sorry!", result.ErrMessage, "error");
        }
    });

})