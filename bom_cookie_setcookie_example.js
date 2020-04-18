function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000))
    var experies = "experies=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + epires + ";path=/";
}
console.log(document.cookie)