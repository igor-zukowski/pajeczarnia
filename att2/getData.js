  

let xhr = new XMLHttpRequest();
let url = "https://script.googleusercontent.com/macros/echo?user_content_key=OZolaW75w2etM1DWiHtCJbyz6daH8UiuiDZMvsARKJa0fTxbq-edk3n69EXZDCySWwiNsvuufqoQYZrXm6NYO9DQc0JY78Uvm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJzGU1Fnd1jadqsLsgdNthl5omCvg3us9Pync5qAzyHl6n73ml4GpN5mfszHmEqfibiiahthl8jg&lib=MPysWlIpktTqDE8rrb0Fcmz8oNvKE2J6l";
let json;
let length;

xhr.open("GET", url, true);

xhr.addEventListener('load', function() {
    if (this.status === 200) {
        json = JSON.parse(this.responseText);
        length = Object.keys(json.zgloszenia).length
        console.log(json);
        onload();
    }
})
xhr.send();

function tableCreate() {
    //body reference 
    var body = document.getElementsByTagName("body")[0];
  
    // create elements <table> and a <tbody>
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // cells creation
    for (var j = 0; j <= length; j++) {
      // table row creation
      var row = document.createElement("tr");
      
      for (var i = 0; i < 5; i++) {
        // create element <td> and text node 
        //Make text node the contents of <td> element
        // put <td> at end of the table row
        var cell = document.createElement("td");
        var imie = document.createTextNode(json.zgloszenia[i].Imie );
  
        cell.appendChild(imie);
        row.appendChild(cell);
      }
  
      //row added to end of table body
      tblBody.appendChild(row);
    }
  
    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
    // tbl border attribute to 
    tbl.setAttribute("border", "2");
  }

function onload(){
    console.log(json.zgloszenia[0].Imie);
    tableCreate();
}




 
  
 


    
   