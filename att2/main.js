var btn1 = document.getElementById('link1');
var btn2 = document.getElementById('link2');

btn1.style.cursor = 'pointer';
btn2.style.cursor = 'pointer';
btn1.onclick = ()=> location.href = "zuchZglos.html";
btn2.onclick = ()=> location.href = "harcglos.html"

function informacja(){
    document.getElementById('title').innerHTML = '<p id="title">Kurs Instruktorski</p>'
    document.getElementById('content').innerHTML = '<p id="inf" style="text-align:left; font-size:24px; margin-bottom:0;">Termin i miejsce:</p><p id="kadra"><b>Termin:</b>&nbsp; &nbsp;13 - 25 sierpnia 2019<br /><b>Miejsce:</b>&nbsp; &nbsp;Bobrowniki (powiat pajęczański, województwo łódzkie)<br /><p id="inf" style="text-align:left; font-size:24px; margin-bottom:0;">Kadra:</p><p id="kadra"><b>komendant:</b>&nbsp; &nbsp;Niedźwiedź Roztropny<br /><b>wicekomendant:</b>&nbsp; &nbsp;phm. Tomasz Wardenga (ścieżka harcerska)<br /><b>oboźny:</b>&nbsp; &nbsp;pwd. Krzysztof Ziembowicz</p> '
    document.getElementById('infoBox').style = 'margin-top: 8%;'
}
