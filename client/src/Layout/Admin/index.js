import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import useToggle from 'Hooks/useToggle'
import Header from './Header'
import AdminBar from './SideBar'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Switcher from 'Components/Switcher'
const useStyle = makeStyles((theme) => ({
  rootLayout: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
    minHeight: '100%',
  },
  content: {
    marginTop: 64,
  },
  wrapper: {
    // display: 'flex',
    // flex: '1 1 auto',
    overflow: 'hidden',
    // [theme.breakpoints.up('md')]: {
    //   paddingLeft: 72,
    // },
  },
}))
const AdminLayout = ({ children }) => {
  const role = useSelector((state) => state.user.roles)
  const history = useHistory()
  if (role !== 'admin') {
    history.push('/')
  }
  const classes = useStyle()
  const [open, setOpen] = useToggle()
  return (
    <div className={classes.rootLayout}>
      <Grid item xs={12} md={12} xl={12}>
        <Header open={open} close={setOpen} />
      </Grid>
      <Switcher />
      <div className={classes.wrapper}>
        <AdminBar open={open} close={setOpen} />

        <Grid item xs={12} className={classes.content}>
          {children}
        </Grid>
      </div>
    </div>
  )
}

export default AdminLayout
