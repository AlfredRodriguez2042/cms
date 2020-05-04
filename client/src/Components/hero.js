import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    boxSizing: 'border-box',
    '& > *': {
      width: '100%',
      height: '100%',
    },
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

export default function Album() {
  const classes = useStyles()

  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <h3 className="skill-title">
            <span className="text-number">1.</span>Programacion
          </h3>
          <p>
            ¿estas pensando como empesar a programar?
            <br />
            este es un espacio donde puedes aprender y despejar tus dudas
          </p>
          <h3 className="skill-title">
            <span className="text-number">2</span>Diseño
          </h3>
        </Grid>
        <Grid item xs={4} className={classes.cardMedia}>
          <img
            src="https://res.cloudinary.com/dcyjlkfuh/image/upload/v1569932885/undraw_add_file_4gfw.svg"
            alt="img"
          />
        </Grid>
        <Grid item xs={4}>
          <h3 className="skill-title">
            <span className="text-number">1</span>video juegos
          </h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          nostrum, quos illo ipsa eos quis architecto beatae accusamus id
          commodi inventore rerum vero. Quo incidunt natus dicta nam qui
          <h3 className="skill-title">
            <span className="text-number">2</span>hardware
          </h3>
        </Grid>
      </Grid>
    </>
  )
}
