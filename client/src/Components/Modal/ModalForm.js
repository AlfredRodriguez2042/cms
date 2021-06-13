import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'

const useStyle = makeStyles(() => ({
  modal: {
    position: 'absolute',
  },
  header: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
}))

const ModalForm = ({ title, children, open, setClosed }) => {
  const classes = useStyle()
  return (
    <Dialog maxWidth="xs" open={open}>
      <DialogTitle>
        <div className={classes.header}>
          <Typography variant="h5" className={classes.grow}>
            {title}
          </Typography>
          <Button
            size="small"
            color="secondary"
            variant="contained"
            onClick={setClosed}
          >
            <Close />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  )
}

export default ModalForm
