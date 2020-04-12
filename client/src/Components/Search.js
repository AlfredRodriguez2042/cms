import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'

import SearchIcon from '@material-ui/icons/Search'
import { useApolloClient } from '@apollo/react-hooks'
import { ARTICLES_QUERY } from '../Graphql/Querys/Articles'
import { SearchArticle } from '../Redux/Actions/Article'
import { useDispatch } from 'react-redux'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
    // fontSize: "19px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: '14px',
  },
  iconButton: {
    padding: 6,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

const SearchInput = () => {
  const [initialState, setInitialState] = useState()
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const client = useApolloClient()
  const classes = useStyles()
  const changeInput = (e) => {
    e.preventDefault()
    const type = e.target.type
    const name = e.target.name
    const value = e.type === 'checkbox' ? e.target.checked : e.target.value

    setInitialState({
      ...initialState,
      [name]: value,
    })
    setOpen(true)
    dispatch(SearchArticle(initialState))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const res = await client.query({
    //   query: ARTICLES_QUERY,
    //   variables: initialState,
    // })
    // console.log(res)
  }

  return (
    <div component="form" className={classes.root}>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>

      <InputBase
        className={classes.input}
        name="title"
        onChange={changeInput}
        placeholder="Search "
      />
      {open && <Paper></Paper>}
    </div>
  )
}

export default SearchInput
