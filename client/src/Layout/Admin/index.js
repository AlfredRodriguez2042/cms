import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import useToggle from '../../hooks/useToggle'
import Header from './Header'
import { AdminBar } from '../SideBar'
const useStyle = makeStyles(() => ({
  rootLayout: {
    display: 'flex',
    flexWrap: 'no-wrap',
  },
  content: {
    marginTop: 64,
  },
}))
const AdminLayout = ({ children }) => {
  const classes = useStyle()
  const [open, setOpen] = useToggle()
  return (
    <div className={classes.rootLayout}>
      <Grid>
        <Header open={open} close={setOpen} />
      </Grid>

      <AdminBar open={open} close={setOpen} />

      <Grid className={classes.content}>{children}</Grid>
    </div>
  )
}

export default AdminLayout
