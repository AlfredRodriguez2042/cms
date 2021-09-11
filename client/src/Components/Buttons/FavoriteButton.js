import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useMutation } from '@apollo/react-hooks'
import { LIKE_ARTICLE } from '../../Graphql/Mutations/like'
import { makeStyles, IconButton } from '@material-ui/core'
import { HeartFilled } from '@ant-design/icons'

const useStyles = makeStyles(() => ({
  ghost: {
    color: '#ef9a9a',
    '&:hover': {
      color: '#ff1744',
    },
  },
  favorite: {
    color: '#ff1744',
  },
}))
const FavoriteButton = ({ post }) => {
  const classes = useStyles()
  const userId = useSelector((state) => state.user.user.id)
  const [like, setLike] = useState(false)
  const [create] = useMutation(LIKE_ARTICLE, {
    variables: {
      id: post.id,
    },
    onCompleted: () => {
      setLike(!like)
    },
  })

  useEffect(() => {
    if (post.likes.map((like) => like.userId === userId)) {
      post.likes.map((like) => {
        if (like.userId === userId) {
          console.log('color')
          return setLike(true)
        } else {
          return setLike(false)
        }
      })
    }
  }, [post.likes, like, userId])

  return (
    <span>
      <IconButton
        className={like ? classes.favorite : classes.ghost}
        disabled={!userId}
        onClick={create}
      >
        <HeartFilled style={{ fontSize: '13px' }} />
      </IconButton>
      <span>{post.likesNum}</span>
    </span>
  )
}

export default FavoriteButton
