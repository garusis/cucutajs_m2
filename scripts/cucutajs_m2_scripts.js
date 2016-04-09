/**
 * Created by garusis on 9/04/16.
 */
window.onload = function () {
    setInterval(function () {
        var divClock = document.getElementById('clock');
        var currentDate = new Date();
        divClock.innerHTML = currentDate.getHours() + ' : ' + currentDate.getMinutes() + ' : ' + currentDate.getSeconds();
    }, 1000);


    var lonelyBtn = document.getElementById('lonely');
    lonelyBtn.addEventListener('click', function () {
        var lonelyParent = lonelyBtn.parentNode.parentNode;

        var otBtn = document.createElement('li');
        otBtn.innerHTML = '<a href="#">Hello!!!</a>';
        lonelyParent.appendChild(otBtn);

        lonelyBtn.innerText = "I'm not lonely nevermore"
    });

    var jsLogo = document.getElementById('js_logo');
    jsLogo.addEventListener('click', function () {
        jsLogo.setAttribute('src', 'img/js.png');
    });
};