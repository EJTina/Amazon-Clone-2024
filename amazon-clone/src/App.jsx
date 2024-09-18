import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import CarouselEffect from './Components/Carousel/CarouselEffect'
import Category from './Components/Category/Category'
import Product from './Components/Product/product'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Header/>
 <CarouselEffect/>
 <Category/>
 <Product/>

    </>
  )
}

export default App
