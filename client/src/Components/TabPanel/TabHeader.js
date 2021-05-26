import { makeStyles, Tab, Tabs } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({}))
const TabHeader = ({
  tabs,
  handleChange,
  aligncenter,
  active,
  vertical,
  color,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Tabs
        orientation={vertical ? 'vertical' : 'horizontal'}
        value={active}
        onChange={handleChange}
        centered={aligncenter}
        indicatorColor={color}
        textColor={color}
      >
        {tabs.map((item, i) => (
          <Tab
            key={i}
            label={item.tabButton}
            icon={item.tabIcon}
            color={color}
          />
        ))}
      </Tabs>
    </div>
  )
}

export default TabHeader
