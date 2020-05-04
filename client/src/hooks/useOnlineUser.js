import { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { USERS_ONLINE_QUERY } from '../Graphql/Querys/User'

const useOnlineUser = () => {
  const [users, setUsers] = useState([])
  const total = users.length
  const { loading, error } = useQuery(USERS_ONLINE_QUERY, {
    onCompleted: ({ UsersOnline }) => {
      setUsers(UsersOnline)
    },
  })
  return { users, loading, error, total }
}

export default useOnlineUser
