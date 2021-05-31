var countdownElement = document.getElementById('countdown');

var bgimage = document.getElementById("bg-img");
var initialCountdown = countdownElement.innerHTML;
console.log(initialCountdown*10+'%')

var interval=setInterval(function () {
    initialCountdown = initialCountdown > 0 ? initialCountdown - 1 : 0;
    countdownElement.innerHTML = initialCountdown;
    bgimage.style.width=initialCountdown*10+'%';
    console.log(initialCountdown*10+'%')
    if(initialCountdown<=0)
    {
        
        clearInterval(interval);
    }

}, 1000);