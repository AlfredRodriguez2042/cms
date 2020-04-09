import React, { useState } from 'react'
import { Checkbox, Button, Grid } from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'
import Titles from '../Titles'

const FilterArticle = ({ state, setState }) => {
  const [open, setOpen] = useState(false)
  const changeInput = (e) => {
    e.preventDefault()
    const type = e.target.type
    const name = e.target.name
    const value = e.type === 'checkbox' ? e.target.checked : e.target.value
  }

  return (
    <Grid>
      <Titles title="Filtrar por" />
      <div>
        <form>
          <div>
            <span>
              <Button endIcon={<ArrowDropDown color="primary" />}>
                categories
              </Button>
            </span>
            <span>
              <Button endIcon={<ArrowDropDown color="primary" />}>tags</Button>
            </span>
            <span>
              <Button variant="contained" size="small" color="primary">
                filtrar
              </Button>
            </span>
          </div>
        </form>
      </div>
    </Grid>
  )
}

export default FilterArticle
