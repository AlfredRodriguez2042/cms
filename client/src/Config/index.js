import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import avatar from '../assets/cat.gif'
import Logo from '../assets/logo.svg'
import { Folder, Info } from '@material-ui/icons'

export const COLOR_LIST = [
  'magenta',
  'blue',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'geekblue',
  'purple',
]
export const Config = {
  name: 'KuroDev',
  logo: Logo,
}
export const SIDEBAR = {
  avatar,
  username: 'kuro',
  bio: 'Bienvenido a mi pequeño blog',
  homepages: {
    GitHub: {
      link: 'https://github.com/AlfredRodriguez2042',
      icon: <GitHubIcon fontSize="small" color="inherit" />,
    },
    LinkedIn: {
      link: 'https://linkedin.com/in/AlfredRodriguez2042',
      icon: <LinkedInIcon color="primary" fontSize="small" />,
    },
  },
}

export const MYINFO = {
  name: 'Name : Alfredo Rodriguez',
  email: 'Email : alfred2042@hotmail.com',
  address: 'Address : Buenos Aires - Argentina',
  skills: [
    {
      label: 'HTML,CSS, Javascript： Desarrollo del frontend  ',
      rate: 3,
    },
    {
      label: 'React, redux ： manejo de la logica y ui  ',
      rate: 3,
    },
    {
      label: ' es6：sintaxis moderna ideal para el desarrollo diario  ',
      rate: 3,
    },
    {
      label: 'Webpack: optimizacion de codigo！',
      rate: 4,
    },
    {
      label: 'Scss, Material-ui： la mejor combinacion para la ui！',
      rate: 3,
    },
    {
      label:
        'Node, Express： la mejor combinacion para un desarrollo simple y rapido！',
      rate: 3.5,
    },
    {
      label:
        'MongoDB, Postgres：bases de datos usando ORM(sequelize y mongoose)！',
      rate: 3,
    },
    {
      label: 'APIs ： manejo Rest y Graphql  ',
      rate: 3,
    },
    {
      label: 'Docker： prevencion de fallos con los contenedores！',
      rate: 3,
    },
  ],
  fetures: [],
}

export const projectBrief = {
  title: 'Project Brief',
  description: '',
  tabs: [
    {
      tabButton: 'Details',
      tabIcon: <Folder />,
      tabContent: (
        <span>
          <p>
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits.
          </p>
          <br />
          <p>
            Dramatically visualize customer directed convergence without
            revolutionary ROI. Collaboratively administrate empowered markets
            via plug-and-play networks. Dynamically procrastinate B2C users
            after installed base benefits.
          </p>
          <br />
          <p>
            Dramatically visualize customer directed convergence without
            revolutionary ROI. Collaboratively administrate empowered markets
            via plug-and-play networks. Dynamically procrastinate B2C users
            after installed base benefits.
          </p>
        </span>
      ),
    },
    {
      tabButton: 'Info',
      tabIcon: <Info />,
      tabContent: (
        <span>
          <p>
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits.
          </p>
          <br />
          <p>
            Dramatically visualize customer directed convergence without
            revolutionary ROI. Collaboratively administrate empowered markets
            via plug-and-play networks. Dynamically procrastinate B2C users
            after installed base benefits.
          </p>
          <br />
          <p>
            Dramatically visualize customer directed convergence without
            revolutionary ROI. Collaboratively administrate empowered markets
            via plug-and-play networks. Dynamically procrastinate B2C users
            after installed base benefits.
          </p>
        </span>
      ),
    },
  ],
}
