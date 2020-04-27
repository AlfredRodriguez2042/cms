import React from 'react'
import { Divider } from 'antd'
import { Rate } from 'antd'
import { ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import { ExpansionPanel, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { MYINFO } from '../Config'

const MyInfo = () => {
  return (
    <>
      <Divider orientation="left">Project</Divider>
      <Typography variant="body2">
        Esta pagina esta hecha con propositos educativos, la finalidad es
        compartir los conocimientos adquiridos a lo largo de este tiempo y hacer
        una pequeña comunidad.
        <br />
        la creacion de esta pagina fue hecha en:
        <br />
        Front: React, Redux, Material-ui y Apollo-client
        <br />
        Backed: Node, Apollo-Server, Express
        <br />
        Database: Postgres,Redis
        <br />
      </Typography>
      <Divider orientation="left">About me</Divider>

      <ul style={{ listStyle: 'circle' }}>
        <li>{MYINFO.name}</li>
        <li>
          <a href="mailto:alfred2042@hotmail.com">{MYINFO.email}</a>
        </li>
        <li>{MYINFO.address}</li>
        <li>
          <ExpansionPanel elevation={0}>
            <ExpansionPanelSummary
              style={{ padding: 0 }}
              expandIcon={<ExpandMoreIcon />}
            >
              Skills :
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <ul>
                {MYINFO.skills.map((item, i) => (
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
