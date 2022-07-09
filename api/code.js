const api_url = "https://api.ipify.org?format=json"

async function getIP(){
  try{
  
  const response = await fetch(api_url)

  ipObj = await response.json()
  document.getElementById('ip-field').innerHTML = ipObj.ip

  const request = await fetch(`https://ipinfo.io/${ipObj.ip}?token=161bd7cd28fb98`)
  const jsonObj = await request.json()
  document.getElementById('location').innerHTML = `You are currently present at ${jsonObj.city}, ${jsonObj.region}, ${jsonObj.country}.`

  const weatherReq = await fetch(`https://api.weatherapi.com/v1/current.json?key=9eff55cd1e2042779a1141950220407&q=${jsonObj.city}&aqi=no`)
  const weatherObj = await weatherReq.json()
  console.log(weatherObj)
  document.getElementById('weather').innerHTML = `The temperature here is ${weatherObj.current.temp_c}C and it feels like ${weatherObj.current.feelslike_c}C<br><b>${weatherObj.current.condition.text}</b>.`

  }
  catch{
    alert("Could not fetch, try again!")
  }
}

const blacken = () => {
  
  const surp = document.getElementById("surprise")
  console.log(surp)
  surp.style.zIndex = 4

  setTimeout(function(){
    surp.style.zIndex = -1
    surp.src = "light.jpg"
  },3000)

  document.getElementById("wallpaper").src = 'images2.jpg'

  const nightStyle = document.getElementById("styles")
  nightStyle.href = "stylesheetDark.css"
  
}

const brighten = () => {

   
  const surp = document.getElementById("surprise")
  console.log(surp)
  surp.style.zIndex = 4

  setTimeout(function(){
    surp.style.zIndex = -1
    surp.src = "dark.jpg"
  },3000)

  document.getElementById("wallpaper").src = 'images.jpg'

  const nightStyle = document.getElementById("styles")
  nightStyle.href = "stylesheet.css"

}

//Colapsible Code
var coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

//Text to collapsibles
 


  