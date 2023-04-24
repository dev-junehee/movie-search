import { useState } from 'react'
import './App.scss'
import TheHeader from '~/TheHeader'
import TheSearch from '~/TheSearch'
import TheFooter from '~/TheFooter'

export default function App() {
  const [count, setCount] = useState()

  return (
    <>
      <TheHeader />
      <TheSearch />
      <TheFooter />
    </>
  )
}
