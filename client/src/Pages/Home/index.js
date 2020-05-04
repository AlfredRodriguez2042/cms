import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import Carrousel from '../../Components/Carrousel'
import Albun from '../../Components/hero'
import Titles from '../../Components/Titles'

const Home = () => {
  const params = useParams()
  const match = useRouteMatch()

  //console.log(params.id)
  return (
    <>
      <Carrousel />
      <Titles title="Bienvenido " type="h2" />
      <Albun />
    </>
  )
}

export default Home

// <img src="https://res.cloudinary.com/dcyjlkfuh/image/upload/v1569932885/undraw_add_file_4gfw.svg" alt="img"/>
