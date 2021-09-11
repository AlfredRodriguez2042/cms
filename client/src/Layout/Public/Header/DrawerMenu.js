import {
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core'

import React from 'react'
import { NavLink } from 'react-router-dom'
import { Config } from 'Config'

const drawerWidth = 250
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
    //top: 50,
    //  height: 'calc(100% - 50px)',
  },

  item: {
    // color: 'rgba(255, 255, 255, 0.7)',
    // '&:hover,&:focus': {
    //   backgroundColor: 'rgba(255, 255, 255, 0.08)',
    // },
    //   backgroundColor: '#232f3e',
    //  boxShadow: '0 -1px 0 #404854 inset',

    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: 24,
    fontWeight: 'bold',
    //  color: theme.palette.common.white,
  },
  divider: {
    //   marginTop: theme.spacing(1),
  },
}))

const DrawerMenu = ({ sections, setOpen, setClosed }) => {
  const classes = useStyles()
  return (
    <Drawer
      open={setOpen}
      onClose={setClosed}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="temporary"
    >
      <List>
        <ListItem className={classes.item}>{Config.name}</ListItem>
        <Divider className={classes.divider} />
        {sections.map((section, i) => (
          <ListItem button key={i}>
            <Link to={section.url} color="textPrimary" component={NavLink}>
              <ListItemText primary={section.name} onClick={setClosed} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default DrawerMenu
