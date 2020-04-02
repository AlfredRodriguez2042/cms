import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'

const Home = () => {
  const params = useParams()
  const match = useRouteMatch()
  console.log(match)
  //console.log(params.id)
  return (
    <>
      <h1>something</h1>
      <h1>something</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        voluptates quod suscipit expedita quibusdam aut illo quas voluptate
        dolore, vero iste perspiciatis aperiam odit quasi iure ex nihil ipsum
        et.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam
        cupiditate ad animi omnis iste explicabo tenetur quis qui autem illo
        expedita aspernatur perspiciatis eveniet, quam sit debitis quod
        molestias.
      </p>
    </>
  )
}

export default Home
