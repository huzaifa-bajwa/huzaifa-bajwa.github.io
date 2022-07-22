const apiUrl = "https://api.ipify.org?format=json"

const PageComponent = () => {

  const [userIp, setIp] = React.useState("Please send request first!")
  const [userLocation, setLocation] = React.useState("Please send request first!")
  const [userWeather, setWeather] = React.useState("Please send request first!")

  const blacken = function (){
  
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
  
  const brighten = function(){
  
     
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

  async function getIP(){
    try{
    console.log("success")
    const ipRequest = await fetch(apiUrl);
    const ipObj = await ipRequest.json();
    setIp(ipObj.ip);

    const locationRequest = await fetch(`https://ipinfo.io/${ipObj.ip}?token=161bd7cd28fb98`)
    const locationObj = await locationRequest.json()
    setLocation(locationObj.city)

    const weatherRequest = await fetch(`https://api.weatherapi.com/v1/current.json?key=9eff55cd1e2042779a1141950220407&q=${locationObj.city}&aqi=no`)
    const weatherObj = await weatherRequest.json()
    setWeather(`The temperature here is ${weatherObj.current.temp_c}C and it feels like ${weatherObj.current.feelslike_c}C<br><b>${weatherObj.current.condition.text}</b>`)

  }
    catch(e){
    alert("Could not fetch, try again!");
  }
}

  const collapse = function(e){
    e.target.classList.toggle("active");
    var content = e.target.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }

  return(
    <div>
      <button id="night-mode" onClick={blacken}><i className="fa-solid fa-moon"></i>Night Mode</button>
      <button id="day-mode" onClick={brighten}><i className="fa-solid fa-sun"></i>Light Mode</button>

      <img id="surprise" src="dark.jpg"></img>

      <div id="backdrop">

        <img id="wallpaper" src="images.jpg"></img>
        <div></div>
        <p>Get Local Info</p>
        <button id="ip-get" onClick={getIP}>Click me</button>

      </div>
      
      <div id="main-content">

        <p><b>Your Info:</b></p>
        <button type="button" className="collapsible" onClick={collapse}>IP</button>
        <div className="content">
          <p id="ip-field">{userIp}</p>
        </div>
        <button type="button" className="collapsible" onClick={collapse}>Location</button>
        <div className="content">
          <p id="location">{userLocation}</p>
        </div>
        <button type="button" className="collapsible" onClick={collapse}>Weather</button>
        <div className="content">
          <p id="weather" dangerouslySetInnerHTML={{__html: userWeather}}></p>
        </div>
      
        </div>

      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("body-text"))
root.render(<PageComponent />)