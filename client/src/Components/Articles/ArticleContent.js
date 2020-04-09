import React from 'react'
import moment from 'moment'
import ArticleTag from '../ArticleTag'
import { Divider } from 'antd'
import { useHistory } from 'react-router-dom'
import { Paper, makeStyles, IconButton } from '@material-ui/core'
import { EyeFilled, HeartFilled } from '@ant-design/icons'

const useStyles = makeStyles(theme => ({
  title: {
    color: '#394d69',
    fontSize: '22px'
  },
  paper: {
    padding: '1em',
    marginBottom: '1em'
  },
  favorite: {
    color: '#ff1744'
  }
}))

const ArticleContent = ({ post }) => {
  const classes = useStyles()
  const history = useHistory()
  const JumpTo = id => history.push(`/articles/${id}`)
  return (
    <Paper className={classes.paper}>
      <div>
        <span style={{ float: 'right' }}>
          {moment(post.createdAt).fromNow()}
        </span>
        <Divider orientation="left">
          <span className={classes.title} onClick={() => JumpTo(post.id)}>
            {post.title}
          </span>
        </Divider>

        <div
          onClick={() => JumpTo(post.id)}
          className="article-detail content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="list-item-others">
          <span>
            <IconButton className={classes.favorite}>
              <HeartFilled style={{ fontSize: '13px' }} />
            </IconButton>
            <span>{post.likesNum}</span>
          </span>
          <span>
            <Divider type="vertical" style={{ marginRight: 7 }} />
            <EyeFilled style={{ marginRight: 7 }} />
            <span style={{ marginRight: 7 }}>{post.viewCount}</span>
          </span>
          <ArticleTag tagList={post.tags} categoryList={post.tags} />
        </div>
      </div>
    </Paper>
  )
}

export default ArticleContent
