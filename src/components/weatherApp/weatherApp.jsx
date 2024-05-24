import { UsefetchData } from "../GithubFinder/Usefetchdata"
export const WeatherApp=()=>{

    const data = UsefetchData("https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=f805f712c5a71e2caaa745aa80ff8ad8")
   console.log(data)
    return<div>
        weather APP
    </div>
}