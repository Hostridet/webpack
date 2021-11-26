

class Method {
    constructor(token)
    {
       this.token = token;
    }

    getWeather(city)
    {
        let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID=' + this.token + '&units=metric';
        fetch(url)
            .then(function (resp){
                return resp.json();
            })
            .then(function (data) {
                console.log(data);
                function showText(data, string)
                {
                    let name = document.querySelector(string);
                    name.innerHTML = data;
                }
                showText(data.name, '.country');
                showText('Current temperature: ' + data.main.temp + ' C°', '.temperature');
                showText('Temperature feels: ' + data.main.feels_like + ' C°', '.feels_temperature');
                showText('Max temperature: ' + data.main.temp_max + ' C°', '.max_temperature');
                showText('Min temperature: ' + data.main.temp_min + ' C°', '.min_temperature');
                showText('Humidity: ' + data.main.humidity + ' m/s', '.humidity');
                showText('Clouds: ' + data.main.humidity + ' %', '.clouds');
            })
            .catch(function (){
            })
    }
}

export { Method };