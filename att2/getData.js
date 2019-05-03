window.fbAsyncInit = function() {
    FB.init({
      appId            : '2188123544851023',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.2'
    });
  }; 

let xhr = new XMLHttpRequest();
let xhrFb = new XMLHttpRequest();
let url = "https://script.googleusercontent.com/macros/echo?user_content_key=OZolaW75w2etM1DWiHtCJbyz6daH8UiuiDZMvsARKJa0fTxbq-edk3n69EXZDCySWwiNsvuufqoQYZrXm6NYO9DQc0JY78Uvm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJzGU1Fnd1jadqsLsgdNthl5omCvg3us9Pync5qAzyHl6n73ml4GpN5mfszHmEqfibiiahthl8jg&lib=MPysWlIpktTqDE8rrb0Fcmz8oNvKE2J6l";
let urlFb = "https://graph.facebook.com/v3.3/2253117284912079/published_posts?access_token=EAAfGFjadkk8BALTTtwBAnc8u57nNgGQ48GjHvZBnagEgBJ80xg7RhxrhTjVBMDIaEXahFSFfIgq7XztwpsyeMinOiMMtOqdvdMuZB4p73Wz2A1zD5LVdKo8mlq48GKFu0WJzMTytCRJQ4X3amEN73nAmKdwS160ZBNdRiHYSujvaXEDPLZB2"
let json;
let jLength;
let date;

xhr.open("GET", url, true);

xhr.addEventListener('load', function() {
    if (this.status === 200) {
        json = JSON.parse(this.responseText);
        jLength = Object.keys(json.zgloszenia).length 
		console.log(json);
        dataPrint();
    }
})
xhr.send();

xhrFb.open("GET", urlFb, true);

xhrFb.addEventListener('load', function() {
    if (this.status === 200) {
        posts = JSON.parse(this.responseText);
        console.log(posts);
        dataPrintFb();
    }
})
xhrFb.send();




// FB.api(
//     '/taniszpil/published_posts',
//     'GET',
//     {'EAAfGFjadkk8BAGLTCClB83yZBqpcRpSh7H2NtfK0tPEchNSDLwdg8G7qk4HgmlhZC7e6wzC6Jo7ZC13WK3RRngl97YYxm4rFWteXL7cwiTen1NfPziCjkpd7PacuSiANbjltfXZBqZBMHIjFylBFwkvy4CxGyVPZAIk6pdfLgpMYFsOUyOHLeVk78dcvdx5BgD57xgEZBBUSwZDZD'},
//     function(response) {
//         // Insert your code here
//         console.log(response);
//     }
//   );




function onload(){
    
}

function dataPrint(){


    Object.keys(json.zgloszenia).forEach(function(k){
    console.log(json.zgloszenia[k]);

    let box = document.getElementById('zgloszeniData');
    //section.className = "smallMargin2";
  
    box.innerHTML = box.innerHTML + '<p id="contentP"> Imie: '+json.zgloszenia[k].Imie; '</p>'
    box.innerHTML = box.innerHTML + '<p id="contentP"> Nazwisko: '+json.zgloszenia[k].Nazwisko; '</p>'
    box.innerHTML = box.innerHTML + '<p id="contentP"> Kurs: '+json.zgloszenia[k].Kurs; '</p>'
	});
}



function dataPrintFb(){


    Object.keys(posts.data).forEach(function(k){
    console.log(posts.data[k].message + posts.data[k].created_time);
    date = JSON.stringify(posts.data[k].created_time);
    var day = date.substr(9, 2);
    var month = date.substr(6, 2);
    var year = date.substr(1, 4);
    var hour = date.substr(12, 2);
    var min = date.substr(15, 2);
    actualHour = parseInt(hour, 10)+2;
    time = actualHour+":"+min;
    var createdTime = day+"."+month+"."+year+"   godz. "+time;
    let box = document.getElementById('sFb');
    //box.className = "smallMargin2";
    if(posts.data[k].message){
	box.innerHTML = box.innerHTML + '<p class="data">' + createdTime + '<p>'
    box.innerHTML = box.innerHTML + '<p class="tresc">' + posts.data[k].message + '</p>'
	}
    console.log(createdTime);

});
}










 
  
 


    
   