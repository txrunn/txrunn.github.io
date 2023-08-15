
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="My Portfolio Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <header className="bg-blue-600 text-white p-5">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <nav className="mt-4">
                    <ul className="flex space-x-4">
                        <li><Link href="/"><a className="hover:underline">Home</a></Link></li>
                        <li><Link href="/education"><a className="hover:underline">Education</a></Link></li>
                        <li><Link href="/experience"><a className="hover:underline">Experience</a></Link></li>
                        <li><Link href="/skills"><a className="hover:underline">Skills</a></Link></li>
                        <li><Link href="/projects"><a className="hover:underline">Projects</a></Link></li>
                        <li><Link href="/contact"><a className="hover:underline">Contact</a></Link></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow p-5">
                <h2 className="text-2xl mb-4">Introduction</h2>
                <p className="mb-4">
                    Hello! I'm a Cloud/SRE/DevOps engineer with extensive experience in managing and deploying scalable applications. This website showcases my projects and demonstrates my skills and understanding in this domain.
                </p>
                <h2 className="text-2xl mb-4">Skills</h2>
                <ul className="list-disc list-inside pl-5">
                    <li>Cloud Infrastructure (AWS, GCP, Azure)</li>
                    <li>Container Orchestration (Kubernetes, Docker Swarm)</li>
                    <li>Infrastructure as Code (Terraform, CloudFormation)</li>
                    <li>CI/CD (Jenkins, Travis CI, GitHub Actions)</li>
                    <li>Configuration Management (Ansible, Chef, Puppet)</li>
                </ul>
            </main>

            {/* Footer */}
            <footer className="bg-blue-600 text-white p-5 text-center">
                Copyright © 2023
            </footer>
        </div>
    )
}

