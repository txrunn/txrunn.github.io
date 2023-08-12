
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}><Link href="/about">About</Link></li>
            <li className={styles.navItem}><Link href="/projects">Projects</Link></li>
            <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h2>Introduction</h2>
        <p>
          Hello! I'm a Cloud/SRE/DevOps engineer with extensive experience in managing and deploying scalable applications. This website showcases my projects and demonstrates my skills and understanding in this domain.
        </p>
        <h2>Skills</h2>
        <ul>
          <li>Cloud Infrastructure (AWS, GCP, Azure)</li>
          <li>Container Orchestration (Kubernetes, Docker Swarm)</li>
          <li>Infrastructure as Code (Terraform, CloudFormation)</li>
          <li>CI/CD (Jenkins, Travis CI, GitHub Actions)</li>
          <li>Configuration Management (Ansible, Chef, Puppet)</li>
        </ul>
      </main>

      <footer className={styles.footer}>
        Copyright © 2023
      </footer>
    </div>
  )
}
