
  
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










