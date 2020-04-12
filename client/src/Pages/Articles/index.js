import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { ARTICLES_QUERY } from '../../Graphql/Querys/Articles'
import Loader from '../../Components/Loader'
import { translateMarkdown } from '../../Utils'
import ArticleContent from '../../Components/Articles/ArticleContent'
import { useSelector, useDispatch } from 'react-redux'
import { GetArtcles } from '../../Redux/Actions/Article'
import FilterArticle from '../../Components/Articles/FilterArticle'
import Titles from '../../Components/Titles'

const Articles = () => {
  const filterList = useSelector((state) => state.articles.listArticles)
  const articles = useSelector((state) => state.articles.articles)
  const dispatch = useDispatch()
  const [state, setState] = useState([])
  const { loading } = useQuery(ARTICLES_QUERY, {
    onCompleted: ({ Articles }) => {
      const Posts = Articles.map((item) => {
        const index = item.content.indexOf('<!--more-->')
        item.content = translateMarkdown(item.content.slice(0, index))
        return item
      })
      dispatch(GetArtcles(Posts))
      setState(Posts)
    },
  })

  if (loading) {
    return <Loader />
  }
  console.log(filterList)
  return (
    <div>
      <Titles title="Filtrar por" />

      <FilterArticle state={state} setState={setState} />
      {filterList.length > 0
        ? filterList.map((post) => <ArticleContent key={post.id} post={post} />)
        : articles.map((post) => <ArticleContent key={post.id} post={post} />)}
    </div>
  )
}

export default Articles
