import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import logo from '~assets/img/logo.svg'

const Header = styled.header`
  padding: 2.5rem 0 4rem;
  text-align: center;
  @media (max-width: 479px) {
    padding: 2rem 0 2.5rem;
  }
`

const Logo = styled.div`
  a {
    display: inline-block;
    width: 70px;
  }
`

const LogoImg = styled.img`
  margin: 0;
`

const HeaderGlobal = () => {
  return (
    <Header>
      <Logo className="logo">
        <Link to="/">
          <LogoImg src={ logo } alt="Log - Hifrnd"/>
        </Link>
      </Logo>
    </Header>
  )
}

export default HeaderGlobal
