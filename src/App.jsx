import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Accordian } from './components/accordion/Acordian'
import { StarRating } from './components/StarRating/StarRating'
import { ImageSlider } from './components/ImageSlider/ImageSlider'
import { LoadMore } from './components/Loadmore/Loadmore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Accordian></Accordian> */}
        {/* <StarRating></StarRating> */}
        {/* <ImageSlider></ImageSlider> */}
        <LoadMore></LoadMore>
      </div>
    </>
  )
}

export default App
