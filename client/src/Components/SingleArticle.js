import React from 'react'
import {} from 'react-redux'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { ARTICLE_QUERY } from '../Graphql/Querys/Articles'

const SingleArticle = () => {
  const { id } = useParams()
  const { data, loading } = useQuery(ARTICLE_QUERY, {
    variables: { id }
  })
  return <div></div>
}

export default SingleArticle
