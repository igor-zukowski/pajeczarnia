
  
var section = document.getElementById("section1");
function informacja(){
    section.className = "smallMargin";
    $( "#content" ).load( "board.html" ); // Panel z tekstem Czekaj...
    $( "#content" ).load( "info.html" );
    };
function kontakt(){
    section.className = "smallMargin";
    $( "#content" ).load( "board.html" );
    $( "#content" ).load( "kontakt.html" );
    };
function zgloszeni(){
    section.className = "smallMargin2";
    $( "#content" ).load( "board.html" );
    $( "#content" ).load( "zgloszeni.html" );
    };
function aktualnosci(){
    section.className = "smallMargin2";
    $( "#content" ).load( "board.html" );
    $( "#content" ).load( "aktualnosci.html" );
    dataPrintFb();    
};

if(document.documentElement.clientHeight <= 600){
    startTime();
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timer').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }










