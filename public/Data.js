
console.log(location.host)
function GetRank(){
fetch('http://'+location.host + '/ranking')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    document.getElementById("Data_Ranking").textContent= (myJson);
  });}
  GetRank();
  function GetScore(){
    fetch('http://'+location.host + '/score')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        document.getElementById("Data_Ranking").textContent= (myJson);
      });}
  var intervalID = window.setInterval(GetRank, 5000);