$(document).ready(function(){
    sms_time()
    register_button()
})
var wait=60;
function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.value="免费获取验证码";
        wait = 60;
    } else {
        o.setAttribute("disabled", true);
        o.value="重新发送(" + wait + ")";
        wait--;
        setTimeout(function() {
                time(o)
            },
            1000)
    }
}
function sms_time(){
    $("#sms").click(function(){
        if(true) {
            time(this);
        }
    })
}
function show_remind(id_item) {
    $('#remind_'+id_item.id).removeClass("hide")
}
function hide_remind(id_item){
    $('#remind_'+id_item.id).addClass('hide')
}

function register_button(){
    var b =[];
    $(".login_button").click(function(){
        for(var i=0;i<17;i++){
            var a =$("#user_info"+i).val() ;
            b.push(a)
        }
        console.log(b)
    })
}