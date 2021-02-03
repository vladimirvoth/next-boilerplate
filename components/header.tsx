import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <h1 className={styles.header__brand}>Next.js Boilerplate</h1>
        <nav className={styles.header__nav}>
          View Documentation on{' '}
          <a
            className={styles.header__navLink}
            href="https://github.com/vladimirvoth/next-boilerplate"
            target="_blank"
          >
            {' '}
            Github
          </a>{' '}
          for Version 1.0.0
        </nav>
      </div>
    </header>
  );
}
