import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Titles = ({ title, type }) => {
  return (
    <Typography
      component="h2"
      variant={type}
      color="primary"
      gutterBottom
      align="center"
    >
      {title}
    </Typography>
  )
}

Titles.defaultProps = {
  type: 'h6',
}
export default Titles

Titles.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
}
