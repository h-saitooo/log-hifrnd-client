import React from 'react'

import HeaderGlobal from '~components/header'
import FooterGlobal from '~components/footer'

import layoutStyle from './global.module.css'

export default function GlobalLayout({ children }) {
  return (
    <div>
      <HeaderGlobal/>
      <main className={layoutStyle.layoutGlobal}>
        { children }
      </main>
      <FooterGlobal/>
    </div>
  )
}
