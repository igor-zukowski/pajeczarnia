var btn1 = document.getElementById('link1');
var btn2 = document.getElementById('link2');
var res = document.documentElement.clientWidth;
var infoBox = document.getElementsByTagName('article');
var img1 = document.getElementById('link1');
var img2 = document.getElementById('link2');



function zgloszenie(){
    
    btn2.className = "blink";
    btn1.className = "blink";

    setTimeout(noBlink, 2600); 

};

btn1.style.cursor = 'pointer';
btn2.style.cursor = 'pointer';
btn1.onclick = ()=> location.href = "https://forms.gle/7ZhESe9WytKYYXst5";
btn2.onclick = ()=> location.href = "https://forms.gle/phgTCvzup9grq8Mf7";




function informacja(){
    document.getElementById('title').innerHTML = '<p id="title">Kurs Instruktorski</p>'
    document.getElementById('content').innerHTML = '<p id="inf" style="text-align:left; font-size:24px; margin-bottom:0;">Termin i miejsce:</p><p id="kadra"><b>Termin:</b>&nbsp; &nbsp;13 - 25 sierpnia 2019<br /><b>Miejsce:</b>&nbsp; &nbsp;Bobrowniki (powiat pajęczański, województwo łódzkie)<br /><p id="inf" style="text-align:left; font-size:24px; margin-bottom:0;">Kadra:</p><p id="kadra"><b>komendant:</b>&nbsp; &nbsp;Niedźwiedź Roztropny<br /><b>wicekomendant:</b>&nbsp; &nbsp;phm. Tomasz Wardenga (ścieżka harcerska)<br /><b>oboźny:</b>&nbsp; &nbsp;pwd. Krzysztof Ziembowicz</p> '
    console.log(res);
    if(res > 600){
        document.getElementById('infoBox').style = 'margin-top: 8%;';
    }else{
        document.getElementById('infoBox').style = 'margin-top: 2%;';
    };
};


function noBlink(){
    btn1.className = ""; 
    btn2.className = ""; 
}







