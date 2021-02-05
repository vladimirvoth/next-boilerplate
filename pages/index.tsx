import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/header';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main role="main">
        <div className={styles.cover}>
          <img src="/next.jpg" alt="my image" width="300" />
          <h1 className={styles.cover__heading}>
            Congratulations! The installation worked successfully!
          </h1>
          <p className={styles.cover__lead}>
            You are seeing this page because you have installed the Next.js Boilerplate successfully. You are doing great, keep going!
          </p>
          <Link href={{ pathname: '/nextpage' }} as="/nextpage">
            <a className={styles.cover__link}>Example for a Link</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
