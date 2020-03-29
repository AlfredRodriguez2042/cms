import React from 'react'
import { Divider } from 'antd'
import { Rate } from 'antd'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const skills = [
  {
    label: 'HTML,CSS, Javascript： Desarrollo del frontend  ',
    rate: 3
  },
  {
    label: 'React, redux ： manejo de la logica y ui  ',
    rate: 3
  },
  {
    label: ' es6：sintaxis moderna ideal para el desarrollo diario  ',
    rate: 3
  },
  {
    label: 'Webpack: optimizacion de codigo！',
    rate: 4
  },
  {
    label: 'Scss, Material-ui： la mejor combinacion para la ui！',
    rate: 3
  },
  {
    label:
      'Node, Express： la mejor combinacion para un desarrollo simple y rapido！',
    rate: 3.5
  },
  {
    label:
      'MongoDB, Postgres：bases de datos usando ORM(sequelize y mongoose)！',
    rate: 3
  },
  {
    label: 'APIs ： manejo Rest y Graphql  ',
    rate: 3
  },
  {
    label: 'Docker： prevencion de fallos con los contenedores！',
    rate: 3
  }
]

const MyInfo = () => {
  return (
    <>
      <Divider orientation="left">Project</Divider>
      <p>
        esta pagina se desarrollo utilizando
        <br /> en el front-end: <br />
        React, redux, Material-ui
        <br /> en el backend: <br />
        Node,graphql con Apollo,Postgres,redis y express
      </p>
      <Divider orientation="left">About me</Divider>

      <ul style={{ listStyle: 'circle' }}>
        <li>Name: Alfredo Rodriguez</li>
        <li>Contact: 9999999 </li>
        <li>
          Email:
          <a href="mailto:alfred2042@hotmail.com">alfred2042@hotmail.com</a>
        </li>
        <li>Address: Buenos Aires - Argentina</li>
        <li>
          <ExpansionPanel elevation={0}>
            <ExpansionPanelSummary
              //  aria-controls="panel1a-content"
              style={{ padding: 0 }}
              expandIcon={<ExpandMoreIcon />}
            >
              Skills :
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <ul>
                {skills.map((item, i) => (
                  <li key={i}>
                    {item.label}
                    <Rate defaultValue={item.rate} disabled />
                  </li>
                ))}
              </ul>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </li>

        <li>
          Additional Features
          <ul>
            <li>System: uso intermedio del sistema Linux(ubuntu | debian)</li>
            <li>Services: nginx basic configuration</li>
            <li>Cloud: uso intermedio Amazon web services</li>
          </ul>
        </li>
        <li>Hobbies and interests</li>
      </ul>
    </>
  )
}

export default MyInfo
