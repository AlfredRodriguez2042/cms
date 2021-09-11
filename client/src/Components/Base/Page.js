import React, { forwardRef } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: theme.palette.background.dark,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}))

const Page = forwardRef(({ children, title = '', styles }, ref) => {
  const classes = useStyles()
  return (
    <div ref={ref} className={(classes.root, `${styles}`)}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  )
})

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Page
