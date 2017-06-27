/**
 * Created by zsh on 2017/6/27.
 */
$(document).ready(function(){
    var nowDate=new Date();
    var year=nowDate.getFullYear();
    var month=nowDate.getMonth();
    var day=nowDate.getDate();
    $(".right-time").html(year+'-'+month+'-'+day);
});