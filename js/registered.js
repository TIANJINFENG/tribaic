/**
 * Created by dell on 16-12-28.
 */
//$(document).ready(function(){
//    time()
//})
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
document.getElementById("sms").onclick=function(){
    if(true) {
        time(this);
        //AV.User.requestLoginSmsCode($scope.loginPhone).then(function (success) {
        //    console.log('***********fd**********')
        //}, function (error) {
        //    console.log(error)
        //});
    }
}