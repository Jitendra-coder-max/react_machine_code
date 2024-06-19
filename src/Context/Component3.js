import React ,{useContext}from 'react'


import { UserContext } from './UserContext'



const Component3 = () => {
    const userState = useContext(UserContext);
  return (
    <div>Component3
        {userState.name}
    </div>
  )
}

export default Component3