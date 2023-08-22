import { useGetRolesLinks } from '@/config/useGetRoles'
import React from 'react'
import { Navbar, Props } from './Navbar'

const Wrapper = ({ hidden }: Omit<Props, 'data'>) => {
  const navLinks = useGetRolesLinks()
  return (
    <Navbar data={navLinks} hidden={hidden}/>
  )
}

export default Wrapper