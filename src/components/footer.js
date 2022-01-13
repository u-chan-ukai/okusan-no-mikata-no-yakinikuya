import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Copyright © {new Date().getFullYear()},{' '}
      <a rel="noreferrer" target="_blank" href="https://mesu-ushi.com">Yakiniku U</a>.{' '}
      Powerd by <a rel="noreferrer" target="_blank" href="https://ukai-mnap.co.jp">UKAI K. K.</a>
    </div>
  </Container>
)

export default Footer
