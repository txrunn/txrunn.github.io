
import Head from 'next/head'
import Link from 'next/link'

export default function Skills() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Head>
                <title>Skills</title>
                <meta name="description" content="My Technical Skills" />
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
                <h2 className="text-2xl mb-4">Technical Skills</h2>
                <ul className="list-disc pl-5">
                    <li className="mb-2">JavaScript (React, NodeJS)</li>
                    <li className="mb-2">Python (Flask, Django)</li>
                    <li className="mb-2">Database (SQL, MongoDB)</li>
                    <li className="mb-2">Cloud (AWS, Azure)</li>
                    <li className="mb-2">DevOps (Docker, Kubernetes)</li>
                </ul>
            </main>

            {/* Footer */}
            <footer className="bg-blue-600 text-white p-5 text-center">
                Copyright © 2023
            </footer>
        </div>
    )
}

