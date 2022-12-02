let http = new XMLHttpRequest()
http.onload = function (){
    let result = this.responseText;
    let date = JSON.parse(result);
    console.log(date);
    let list = date.list;
    let arr = list.map((weather,index)=>{
        return `<div class="weather">
                    <div class="date">${weather.dt_txt}</div>
                    <div class="list">
                        <div>
                            <div class="temp">${weather.main.temp}℃</div>
                            <div class="cloud">${weather.weather[0].description}</div>
                        </div>
                        <div class="icon">
                            <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png">
                        </div>
                    </div>
                </div>`
    })
    document.querySelector('.container').innerHTML = arr
}

http.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric")
http.send()