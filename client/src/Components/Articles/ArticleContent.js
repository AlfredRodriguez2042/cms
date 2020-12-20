import React from 'react'
import moment from 'moment'
import ArticleTag from '../ArticleTag'
import { Divider } from 'antd'
import { useHistory } from 'react-router-dom'
import { Paper, makeStyles } from '@material-ui/core'
import { EyeFilled, WechatFilled } from '@ant-design/icons'
import { CalendarOutlined } from '@ant-design/icons'
import FavoriteButton from '../Buttons.js/FavoriteButton'

const useStyles = makeStyles(() => ({
  title: {
    color: '#394d69',
    fontSize: '22px',
    cursor: 'pointer',
    '&:hover': {
      color: '#48b2ff',
    },
  },
  paper: {
    padding: '1em',
    marginBottom: '1em',
    transition: 'all 0.2s linear',
    '&:hover': {
      backgroundColor: '#effbff',
      boxShadow: '0 15px 30px 0 rgba(0, 0, 0, 0.1)',
      transform: 'translate3d(0, -5px 0)',
    },
  },
}))

const ArticleContent = ({ post }) => {
  const classes = useStyles()
  const history = useHistory()

  const JumpTo = (id) => history.push(`/articles/${id}/`)
  return (
    <Paper className={classes.paper}>
      <div>
        <span style={{ float: 'right', fontSize: 10 }}>
          <CalendarOutlined style={{ marginRight: 5 }} />

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
          <FavoriteButton post={post} />
          <span>
            <Divider type="vertical" style={{ marginRight: 7 }} />
            <EyeFilled style={{ marginRight: 7 }} />
            <span style={{ marginRight: 7 }}>{post.viewCount}</span>
          </span>
          <span>
            <Divider type="vertical" style={{ marginRight: 7 }} />
            <WechatFilled style={{ marginRight: 7 }} />
            <span style={{ marginRight: 7 }}>{post.commentNum}</span>
          </span>
          <ArticleTag tagList={post.tags} categoryList={post.categories} />
        </div>
      </div>
    </Paper>
  )
}

export default ArticleContent
