import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Food from './component/Food'
import Cart from './component/Cart'
function App() {

  return (
<>
<Header/>
<h1 className='ml-[1150px] font-bold'> منو</h1>
<Food/>
<Cart/>
 </>
  )
}

export default App
