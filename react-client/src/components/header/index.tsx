import React, { useContext } from 'react'
import { ThemeContext } from '../theme-provider'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import LogoBlack from '../../assets/svg/PostikLogoBig-B.svg';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Navbar>
        <NavbarBrand>
            <img src={LogoBlack}></img>
        </NavbarBrand>
        <NavbarContent justify='end'>
            <NavbarItem className='lg:flex text-3xl cursor-pointer'>
                
            </NavbarItem>    
        </NavbarContent>
    </Navbar>
  )
}
