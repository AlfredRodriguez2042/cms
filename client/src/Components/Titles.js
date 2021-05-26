import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Titles = ({ title, type, ...rest }) => {
  return (
    <Typography variant={type} {...rest} align="center">
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
