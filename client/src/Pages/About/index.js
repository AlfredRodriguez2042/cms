import React from 'react'

import { SIDEBAR } from '../../Config'

import MyInfo from '../../Components/MyInfo'
import BadgeAvatar from '../../Components/BadgeAvatar'

export default function BadgeAvatars() {
  return (
    <div>
      <BadgeAvatar image={SIDEBAR.avatar} title={SIDEBAR.title} />
      <MyInfo />
    </div>
  )
}
