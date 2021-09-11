import React from 'react'
import { useSubscription } from '@apollo/react-hooks'
import { USERS_ONLINE } from '../Graphql/Mutations/User'
import BadgeAvatar from './BadgeAvatar'
import { validateError } from '../Utils/ValidateError'
import Loader from './Loader'
import useOnlineUser from '../Hooks/useOnlineUser'

const UsersOnline = () => {
  const { data: { userOnline } = {} } = useSubscription(USERS_ONLINE)
  const { users, loading, error } = useOnlineUser()

  validateError(error)
  if (loading) return <Loader />
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <BadgeAvatar title={user.username} />
        </div>
      ))}
      {userOnline && <BadgeAvatar title={userOnline.username} />}
    </div>
  )
}

export default UsersOnline
