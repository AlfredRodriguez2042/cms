import React, { useState } from 'react'
import TabContent from './TabContent'
import TabHeader from './TabHeader'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
}))
const TabPanel = (props) => {
  const classes = useStyles()
  const [active, setActive] = useState(props.active)
  const { tabs, direction, color, vertical, alignCenter } = props
  const handleChange = (event, active) => {
    setActive(active)
  }
  const handleChangeIndex = (index) => {
    setActive(index)
  }

  return (
    <div className={vertical ? classes.root : null}>
      <TabHeader
        tabs={tabs}
        active={active}
        aligncenter={alignCenter}
        vertical={vertical}
        handleChange={handleChange}
        color={color}
      />
      <TabContent
        tabs={tabs}
        active={active}
        direction={direction}
        handleChangeIndex={handleChangeIndex}
      />
    </div>
  )
}

export default TabPanel
TabPanel.defaultProps = {
  active: 0,
  color: 'primary',
}

TabPanel.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node,
    })
  ).isRequired,
  color: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
  ]),
  direction: PropTypes.string,
  vertical: PropTypes.bool,
  alignCenter: PropTypes.bool,
}
