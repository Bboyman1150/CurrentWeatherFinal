<!-- Name: Brady M -->
<!-- Final Exam Project -->
<template>
    <div class="container">
        <!-- title and images -->
        <img class="tit-img" src="http://openweathermap.org/img/wn/03d@2x.png" alt="Cloud">
        <h1 class="top-tit">Current Weather</h1>
        <img class="tit-img" src="https://thumbs.gfycat.com/IdenticalCorruptFluke.webp" alt="Smile Sun">
        <ul class="list-group">
            <!-- li description -->
            <li class="list-group-item">Enter a Zip Code and then choose either to display temperature Fahrenheit or Celsius</li>
        </ul>
        <form>
            <!-- input and prevent submit on enter press -->
            <input id='inputCity' class="form-control" type="text" @keydown="$event.keyCode === 13 ? $event.preventDefault() : false" placeholder="Enter Zip Code Ex: 96804" autofocus>
            <button id="subWet" type="button" class="btn btn-dark">SUBMIT</button>
            <!-- error display span -->
            <br>
            <span class="msg" id="msgfree"></span>
            <!-- Farenheit radio and label -->
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="tempF" value="f" checked>
                <label class="form-check-label">
                    Display Temperature in Fahrenheit
                </label>
            </div>
            <!-- Celsius radio and label -->
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="tempC" value="c">
                <label class="form-check-label">
                    Display Temperature in Celsius
                </label>
            </div>
        </form>
        <!-- output -->
        <ul class="list-group">
            <li class="list-group-item" id='dispCity'>No Input</li>
        </ul>
        <div class="footerfix"></div> <!-- for footer -->
        <!-- Footer -->
        <footer class="bg-dark text-center navbar-fixed-bottom" >
            <!-- Copyright -->
            <div class="text-center p-3 footTex" style="background-color: rgba(0, 0, 0, 0.2);">
                © 2021 
                <a class="footTex" href="http://bboyman1150.weebly.com/">Bboyman1150</a>
            </div>
            <!-- Copyright -->
        </footer>
    </div>
</template>

<script>
// axios import
import axios from 'axios'
// store the default temperature variable
var tempFormula = 'f'
// onload event
window.onload = function() {
    // logs imput value
    console.log(document.getElementById('inputCity').value)
    // listens for submit
    document.getElementById('subWet').addEventListener('click', sendCity)
    // listen if radio checked is ahrenheit
    document.getElementById('tempF').addEventListener('click', function(){
        tempFormula = 'f'
    })
    // listen if radio checked is Celsius
    document.getElementById('tempC').addEventListener('click', function(){
        tempFormula = 'c'
    })
    
}

// default city
var inZip = "96804"

// function to get input from input
function sendCity()
{
    // console.log("clic")
    // set inZip to the input input
    inZip = document.getElementById('inputCity').value
    // runs api call if inZip is 5 long
    if(inZip.length == 5)
    {
        // clears any previous error message
        document.getElementById('msgfree').innerHTML = ""
        console.log(inZip)
        // axios API call
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inZip}&appid=d8c73bad33a3e1002a4e9cc9414d2718`).then((response) =>{
            console.log("API response:")
            console.log(response.data)
            this.weatherz = response.data;
            // console.log(response.data.results);
            console.log("weathers:");
            console.log(this.weatherz);
            // display if user selected Fahrenheit or no selection was made, temperature is converted from Kelvin to Farenheit
            if(tempFormula == 'f')
            {
                document.getElementById('dispCity').innerHTML = "City Name: " + this.weatherz.name + "<br>Current Temperature is " + ((this.weatherz.main.temp - 273.15) * 9/5 + 32).toFixed(2) + " °F <br> Current weather is " + this.weatherz.weather[0].description + "<br><img src=http://openweathermap.org/img/wn/"+this.weatherz.weather[0].icon+"@2x.png>"
            }// display if user selected Celsius, temperature is converted from Kelvin to Celsius
            else if(tempFormula == 'c')
            {
                document.getElementById('dispCity').innerHTML = "City Name: " + this.weatherz.name + "<br>Current Temperature is " + ((this.weatherz.main.temp - 273.15)).toFixed(2) + " °C <br> Current weather is " + this.weatherz.weather[0].description + "<br><img src=http://openweathermap.org/img/wn/"+this.weatherz.weather[0].icon+"@2x.png>"
            }// default; should never run as the default teperature is set to F
            else
            {
                document.getElementById('dispCity').innerHTML = "City Name: " + this.weatherz.name + "<br>Current Temperature is " + ((this.weatherz.main.temp - 273.15) * 9/5 + 32).toFixed(2) + " °F <br> Current weather is " + this.weatherz.weather[0].description + "<br><img src=http://openweathermap.org/img/wn/"+this.weatherz.weather[0].icon+"@2x.png>"
            }

        }).catch((error) => {
            // used to catch 404 or other error from api call. Usally zip does not exist or input contains characters
            console.log(error);
            document.getElementById('msgfree').innerHTML = error + " <br>Most likley zip code does not exist or contains characters";
        })
        
    }else if (inZip.length > 5 || inZip.length < 5){
        // displays error message if entered zip code is not 5 long
        // alert("Zip code must contain exactly 5 numbers")
        document.getElementById('msgfree').innerHTML = "Zip code must contain exactly 5 numbers";
        // set focus to zip input
        document.getElementById('inputCity').focus();
    }else {
        // this should neve run
        alert("Unknown error (this is much oof)")
    }
}

// export and vue data
export default {
    name: 'Weather',
    data()
    {
        return{
            weatherz:[],
            inCityVue: 'London'
        }
    },
    mounted()
    {
        // depricated when validation was implemented
        /*
        // axios API call
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${inZip},US&appid=d8c73bad33a3e1002a4e9cc9414d2718`).then((response) =>{
            console.log("API response:")
            console.log(response.data)
            this.weatherz = response.data;
            // console.log(response.data.results);
            console.log("weathers:")
            console.log(this.weatherz);
        }).catch((error) => {
            console.log(error);
            alert(error)
        })
        */
    }
}
</script>
<!-- CSS -->
<style>
    .top-tit{
        padding-top: 20px;
        display: inline-block;
        padding-bottom: 15px;
        vertical-align: -10px;
    }
    #inputCity{
        width: 250px;
        display: inline-block;
        
    }
    form{
        width: 400px;
        text-align: left;
    }
    .tit-img{
        width: 50px;
        display: inline-block;
        margin-left: 5px;
        /* text-shadow: 2px 2px 4px #000000; */
    }
    .list-group-item{
        margin-bottom: 10px;
        color: white;
        background-color: #414c75;
    }
    body{
        background: #2A2D32;
        color: teal;
    }
    .form-check{
        margin-top: 5px;
        margin-bottom: 5px;
    }
    h1,ul,label{
        color: white;
        text-shadow: 2px 2px 4px #2A2D32 ;
    }
    #subWet{
        background-color: #7289DA;
        margin-left: 10px;
    }
    .footerfix{height:4rem;}
    footer{
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 1rem;
        text-align: center;
        background-color: #222;
        color: white;
    }
    .footTex{
        color: rgba(255, 255, 255, 0.548);
    }
    span{
        color: red;
        text-shadow: 2px 2px 4px #2A2D32 ;
    }
</style>