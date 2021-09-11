import React from 'react'
import Loader from 'Components/Loader'
import { translateMarkdown } from 'Utils'
import ArticleContent from './ArticleContent'
import { useSelector } from 'react-redux'
import Titles from 'Components/Titles'
import { validateError } from 'Utils/ValidateError'
import { useArticles } from 'Hooks/useArticles'
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary'
import Page from 'Components/Base/Page'
import { Container } from '@material-ui/core'

const Articles = () => {
  const filterList = useSelector((state) => state.articles.listArticles)
  const articles = useSelector((state) => state.articles.articles)
  const { loading, error } = useArticles()
  if (process.env.NODE_ENV !== 'production') {
    validateError(error)
  }
  console.log(articles)
  if (loading) {
    return <Loader />
  }
  const Posts = articles.map((item) => {
    const index = item.content.indexOf('<!--more-->')
    item.content = translateMarkdown(item.content.slice(0, index))
    return item
  })
  return (
    <Page title="articles">
      <Titles title="Filtrar por" />
      <Container>
        <ErrorBoundary>
          {filterList.length > 0
            ? filterList.map((post) => (
                <ArticleContent key={post.id} post={post} />
              ))
            : Posts.map((post) => <ArticleContent key={post.id} post={post} />)}
        </ErrorBoundary>
      </Container>
    </Page>
  )
}

export default Articles
