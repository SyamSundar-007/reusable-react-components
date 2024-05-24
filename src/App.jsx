import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Accordian } from './components/accordion/Acordian'
import { StarRating } from './components/StarRating/StarRating'
import { ImageSlider } from './components/ImageSlider/ImageSlider'
import { LoadMore } from './components/Loadmore/Loadmore'
import { Darktheme } from './components/dark-theme/Darktheme'
import { GenerateQr } from './components/qrCode-generator/GenerateQr'
import { Githubfinder } from './components/GithubFinder/github-finder'
import { AutoComplete } from './components/auto-complete/AutoComplete'
import { Modal } from './components/Modal/Modal'
import { ScrollTopBottom } from './components/scrollTo/ScrollTopBottom'
import { WeatherApp } from './components/weatherApp/weatherApp'

function App() {
  const [count, setCount] = useState(0)


  useEffect(()=>{
    console.log("App Re-render")
  })

  return (
    <>
      <div>
        {/* <Accordian></Accordian> */}
        {/* <StarRating></StarRating> */}
        {/* <ImageSlider></ImageSlider> */}
        {/* <LoadMore></LoadMore> */}
        {/* <Darktheme></Darktheme> */}
        {/* <GenerateQr></GenerateQr> */}

        {/* <Githubfinder></Githubfinder> */}
        {/* <AutoComplete></AutoComplete> */}
        {/* <Modal></Modal> */}
        {/* <ScrollTopBottom/> */}

        {/* <WeatherApp/> */}


      </div>


    </>
  )
}

export default App
