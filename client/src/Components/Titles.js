import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Titles = ({ title }) => {
  return (
    <Typography
      component="h2"
      variant="h6"
      color="primary"
      gutterBottom
      align="center"
    >
      {title}
    </Typography>
  )
}
export default Titles

Titles.propTypes = {
  title: PropTypes.string,
}
