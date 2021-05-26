import { makeStyles } from '@material-ui/core'
import React from 'react'
import SwipeableViews from 'react-swipeable-views'

const useStyles = makeStyles(() => ({
  content: {
    marginTop: '20px',
  },
}))
const TabContent = ({ tabs, direction, active, handleChangeIndex }) => {
  const classes = useStyles()
  return (
    <SwipeableViews
      axis={direction === 'rtl' ? 'x-reverse' : 'x'}
      index={active}
      onChangeIndex={handleChangeIndex}
      className={classes.content}
    >
      {tabs.map((item, i) => {
        return <div key={i}>{item.tabContent}</div>
      })}
    </SwipeableViews>
  )
}

export default TabContent
