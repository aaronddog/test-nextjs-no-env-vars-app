import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
          Welcome to our About Us page! Here you can learn more about our mission, values, and the team behind this project.
        </p>
      </main>
    </div>
  );
} 