import React from 'react'
import styled from '@emotion/styled'

import HeaderGlobal from '~components/header'
import FooterGlobal from '~components/footer'

const Container = styled.div`
  max-width: var(--max-width);
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--margin-side);
  padding-left: var(--margin-side);
`

export default function GlobalLayout({ children }) {
  return (
    <div>
      <HeaderGlobal/>
      <Container className="post">
        { children }
      </Container>
      <FooterGlobal/>
    </div>
  )
}
