import React from 'react'
import { Paper, ListItem, ListItemAvatar, Avatar } from '@material-ui/core'
import { ListItemText, Typography, Grid, makeStyles } from '@material-ui/core'
import moment from 'moment'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(() => ({
  date: {
    float: 'right',
    fontSize: '.8em',
    paddingTop: '.3em',
    paddingRight: '.5em',
  },
  papper: {
    marginBottom: '.8em',
  },
}))
const CommentBox = ({ comment }) => {
  const classes = useStyles()
  const username = useSelector((state) => state.user.user.username)
  return (
    <Paper className={classes.papper}>
      <Grid>
        <div className={classes.date}>
          <span>{moment(comment.createdAt).fromNow()}</span>
        </div>
        <ListItem style={{ paddingTop: 0 }}>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>

          <ListItemText
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {comment.user ? comment.user.username : username}
                </Typography>
                {` —  ${comment.content}`}
              </>
            }
          />
        </ListItem>
      </Grid>
    </Paper>
  )
}

export default CommentBox
