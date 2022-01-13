import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>OKUSAN NO MIKATA NO YAKINIKUYA</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link rel="noreferrer" target="_blank" to="https://www.youtube.com/channel/UCgn3X6vR930oNRYI__kETRw" activeClassName="active">
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link rel="noreferrer" target="_blank" to="https://www.tiktok.com/@yakiniku_1129" activeClassName="active">
          <FontAwesomeIcon icon={faTiktok} />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
