import React from 'react'
import { useContext } from 'react'
import UserContext from '../utils/UserContext'

export default function Footer() {
  const {user } = useContext(UserContext)
  return (
    <div  className= 'flex  static bottom-0 justify-center bg-black  p-10 text-white sticky top-[100vh]'>
      <h3 className='px-5 m-0 text-white'> {user.name} </h3>
      <h5  > {user.mail} </h5>
    </div>
  )
}
