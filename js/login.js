/**
 * Created by dell on 16-12-22.
 */
$(document).ready(function(){
    login()
})
function login(){
    $(".login_button").click(function(){
       var username=$(".username").val();
        var password=$(".password").val();
        var data={
            username:username,
        password:password
        }
        console.log(data)
        post_ajax(url, data)
    });
}
function post_ajax(url, data) {
    $.ajax({
        url: url,
        method: 'POST',
        data: data,
        success: function (data) {
            console.log('------------')
        },
        error: function () {
        }
    })
}