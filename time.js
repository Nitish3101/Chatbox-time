function watch()
{
var date=new Date();
var hours=date.getHours();
var minute=date.getMinutes();
var seconds=date.getSeconds();
document.getElementById('time').innerHTML=hours+":"+minute+":"+seconds;

}
function start()
{
clear=setInterval(watch,1000);
}
function stop()
{
    clearInterval(clear)
}