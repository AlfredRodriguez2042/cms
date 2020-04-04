import React from 'react'
import moment from 'moment'
import ArticleTag from '../ArticleTag'
import { Divider } from 'antd'
import { useHistory } from 'react-router-dom'
const ArticleContent = ({ post }) => {
  const history = useHistory()
  const JumpTo = id => history.push(`/article/${id}`)
  return (
    <li>
      <Divider orientation="left">
        <span onClick={() => JumpTo(post.id)}>{post.title}</span>
        <span>{moment().fromNow(new Date(post.createAt))}</span>
      </Divider>
      <div
        onClick={() => JumpTo(post.id)}
        className="article-detail content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="list-item-others">
        <span>
          &nbsp; Views &nbsp;
          <span>{post.viewCount}</span>
        </span>
        <ArticleTag tagList={post.tags} categoryList={post.tags} />
      </div>
    </li>
  )
}

export default ArticleContent
