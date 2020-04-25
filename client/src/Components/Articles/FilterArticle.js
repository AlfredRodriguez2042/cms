import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'

const FilterArticle = () => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen(!open)
  }
  const changeInput = (e) => {
    // e.preventDefault()
    // const type = e.target.type
    // const name = e.target.name
    // const value = e.type === 'checkbox' ? e.target.checked : e.target.value
  }

  return (
    <Grid style={{ marginBottom: '1.5em' }}>
      <form>
        <Grid container justify="space-between">
          <span>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={handleToggle}
              endIcon={<ArrowDropDown color="primary" />}
            >
              categories
            </Button>
            <span></span>
          </span>

          <span>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              endIcon={<ArrowDropDown color="primary" />}
            >
              tags
            </Button>
            <span></span>
          </span>
          <span>
            <Button variant="contained" size="small" color="primary">
              filtrar
            </Button>
          </span>
        </Grid>
      </form>
    </Grid>
  )
}

export default FilterArticle
