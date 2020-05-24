import React from 'react'
import styled from '@emotion/styled'

const Footer = styled.footer`
  padding: 4rem 0 2.5rem;
  text-align: center;
`

const Copyright = styled.p`
  font-size: .6rem;
`

const year = new Date().getFullYear()

const FooterGlobal = () => {
  return (
    <Footer>
      <Copyright>
        <small>© { `${year}` } Hiroki Saito.</small>
      </Copyright>
    </Footer>
  )
}

export default FooterGlobal
