import React, { useState, useRef } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_COMMENT } from '../../Graphql/Mutations/Comments'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  Grid,
  Button,
  makeStyles,
  ListItemAvatar,
  Avatar,
  Paper,
} from '@material-ui/core'
import { Send, PriorityHigh } from '@material-ui/icons'

// alt #eff3f5
const useStyles = makeStyles((theme) => ({
  textarea: {
    outline: 'none',
    resize: 'none',
    border: '1px solid #f8f9fc',
    backgroundColor: '#f8f9fc',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: '.5em',
    width: '100%',
    height: '100%',
  },
  content: {
    padding: '1em',
  },
}))

const Comment = () => {
  const classes = useStyles()
  const userId = useSelector((state) => state.user.user.id)
  const toggleInput = useRef()
  const hidenFooter = useRef()
  const { id } = useParams()
  const [content, setContent] = useState('')
  const [create, { loading, error }] = useMutation(CREATE_COMMENT, {
    variables: {
      content,
      userId,
      articleId: id,
    },
  })
  const handelFocus = () => {
    toggleInput.current.classList.toggle('toggle')
    hidenFooter.current.classList.toggle('hidenFooter')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    create()
  }

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <Grid container className={classes.content}>
          <Grid item xs={2}>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
          </Grid>
          <Grid item xs={10}>
            <div ref={toggleInput} onClick={handelFocus} className="content">
              <textarea
                placeholder="write a message"
                name="content"
                onChange={({ target }) => setContent(target.value)}
                className={classes.textarea}
              />
            </div>
            <div className="show-footer" ref={hidenFooter}>
              <Button
                color="primary"
                size="small"
                type="submit"
                variant="contained"
                disabled={!userId || content.trim() === ''}
                endIcon={userId ? <Send /> : <PriorityHigh />}
              >
                {userId ? 'Published' : 'Please Sign In'}
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default Comment
