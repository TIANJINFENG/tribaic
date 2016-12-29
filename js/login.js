/**
 * Created by dell on 16-12-22.
 */
$(document).ready(function(){
})
function login(){
    $("input").keyup(function(){
        txt=$("input").val();
        $.post("demo_ajax_gethint.asp",{suggest:txt},function(result){
            $("span").html(result);
        });
    });
}