$(function(){
// Set the date we're counting down to
var countDownDate = new Date("Sep 29, 2018 15:37:25").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + " Days " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// WEATHER APP BOI

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      renderWeather(Math.floor(position.coords.longitude), Math.floor(position.coords.latitude));
    })
  }
 renderWeather(Math.floor(position.coords.longitude), Math.floor(position.coords.latitude));

  function renderWeather(lon, lat) {
    var key = `f07bded2efd93a0a`;
    //hit api
    var api = `https://api.wunderground.com/api/${key}/conditions/q/${38.5816},${121.4944}.json`;
    console.log(api);
    $.getJSON(api, (result) => {
      console.log(result.current_observation);
      var mount_node = document.getElementById('app');
      var html = '';
      var data = result.current_observation;
      var icon = data.icon_url;
      var temp = data.temperature_string;
      var weather = data.weather;
      var wind = data.wind_degrees + '° ' + data.wind_dir + ' ' + data.wind_mph + 'mph';
      console.log(wind);
      html += '<img src="${icon}" />'+
      '<ul class="weather">'+
        '<li>temp: <span>' + temp + '</span></li>'+
        '<li>wind: <span>' + wind + '</span></li>'+
        '<li>skies: <span>' + weather + '</span></li>'+
      '</ul>';


      //attach to dom
      mount_node.innerHTML = html;

    });

  }
});
