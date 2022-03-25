import Link from 'next/link'

import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href={'/'}>
          <img src={'/images/logo.svg'} alt="Space traveling logo" />
        </Link>
      </div>
    </header>
  )
}
