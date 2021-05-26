import React from 'react'
import Titles from '../../Components/Titles'
import { Typography } from '@material-ui/core'
import BadgeAvatar from '../../Components/BadgeAvatar'
import Page from '../../Components/Base/Page'

const Policy = () => {
  return (
    <Page title="policy">
      <Titles title="Privacy & Policy" />
      <BadgeAvatar title="Kuro" />
      <Typography variant="subtitle1">
        El autor de este blog declara lo siguiente:
      </Typography>
      <Typography variant="body2">
        Este blog aun se encuentra en BETA por lo tanto no se guarda ninguna
        informacion
        <br /> de cambiar los terminos se pondra un aviso
      </Typography>
    </Page>
  )
}
export default Policy
