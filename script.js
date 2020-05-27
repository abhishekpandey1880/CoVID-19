function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//Track CoVID Cases

var india = document.getElementById('india');
var uk = document.getElementById('uk');
var usa = document.getElementById('usa');
var world = document.getElementById('world');
var request = new XMLHttpRequest()

request.open('GET', 'https://api.covid19api.com/summary', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
  	//console.log(data.Global.TotalConfirmed);
  	//console.log(data.Countries[76].TotalConfirmed);
  	india.innerHTML = data.Countries[76].TotalConfirmed ;
  	uk.innerHTML = data.Countries[176].TotalConfirmed ;
  	usa.innerHTML = data.Countries[177].TotalConfirmed ;
  	world.innerHTML = data.Global.TotalConfirmed;
  	//console.log(data.Countries);
  } else {
    console.log('error')
  }
}

request.send()