import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { ARTICLES_QUERY } from '../../Graphql/Querys/Articles'
import Loader from '../../Components/Loader'
import { translateMarkdown } from '../../Utils'
import ArticleContent from '../../Components/Articles/ArticleContent'

const Articles = () => {
  const { data, loading } = useQuery(ARTICLES_QUERY)

  if (loading) {
    return <Loader />
  }

  const { Articles } = data
  const Posts = Articles.map(item => {
    const index = item.content.indexOf('<!--more-->')
    item.content = translateMarkdown(item.content.slice(0, index))
    return item
  })

  return (
    <div>
      {Posts.map(post => (
        <ArticleContent key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Articles
