import React, { useState } from 'react'
import Loader from '../../Components/Loader'
import { translateMarkdown } from '../../Utils'
import ArticleContent from '../../Components/Articles/ArticleContent'
import { useSelector } from 'react-redux'
import FilterArticle from '../../Components/Articles/FilterArticle'
import Titles from '../../Components/Titles'
import { validateError } from '../../Utils/ValidateError'
import { useArticles } from '../../hooks/useArticles'

const Articles = () => {
  const filterList = useSelector((state) => state.articles.listArticles)
  const articles = useSelector((state) => state.articles.articles)
  const [state, setState] = useState()
  const { loading, error, data } = useArticles()
  if (process.env.NODE_ENV !== 'production') {
    validateError(error)
  }

  if (loading) {
    return <Loader />
  }
  const Posts = data.Articles.map((item) => {
    const index = item.content.indexOf('<!--more-->')
    item.content = translateMarkdown(item.content.slice(0, index))
    return item
  })
  return (
    <div>
      <Titles title="Filtrar por" />

      <FilterArticle state={state} setState={setState} />
      {filterList.length > 0
        ? filterList.map((post) => <ArticleContent key={post.id} post={post} />)
        : Posts.map((post) => <ArticleContent key={post.id} post={post} />)}
    </div>
  )
}

export default Articles
