import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/react-hooks'
import { LIKE_ARTICLE } from '../../Graphql/Mutations/like'
import { makeStyles, IconButton } from '@material-ui/core'
import { HeartFilled } from '@ant-design/icons'
import { ARTICLES_QUERY } from '../../Graphql/Querys/Articles'
import { GetArtcles } from '../../Redux/Actions/Article'

const useStyles = makeStyles((theme) => ({
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
  const dispatch = useDispatch()
  const classes = useStyles()
  const username = useSelector((state) => state.user.user.username)
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
          return setLike(true)
        } else {
          return setLike(false)
        }
      })
    }
  }, [like, username])

  return (
    <span>
      <IconButton
        className={like ? classes.favorite : classes.ghost}
        disabled={!username}
        onClick={create}
      >
        <HeartFilled style={{ fontSize: '13px' }} />
      </IconButton>
      <span>{post.likesNum}</span>
    </span>
  )
}

export default FavoriteButton
