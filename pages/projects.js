
import Head from 'next/head'
import Link from 'next/link'

export default function Projects() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Head>
                <title>Projects</title>
                <meta name="description" content="My Notable Projects" />
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
                <h2 className="text-2xl mb-4">Notable Projects</h2>
                <h3 className="text-xl mb-2">Web Dashboard for Analytics</h3>
                <p className="mb-4">
                    Developed a web dashboard for real-time data analytics using React and D3.js. The project improved data visualization by 50% for the client.
                </p>
                <h3 className="text-xl mb-2">E-commerce Backend System</h3>
                <p className="mb-4">
                    Architected and implemented a scalable backend system for a major e-commerce platform using NodeJS and MongoDB. This improved the system's efficiency by 30%.
                </p>
            </main>

            {/* Footer */}
            <footer className="bg-blue-600 text-white p-5 text-center">
                Copyright © 2023
            </footer>
        </div>
    )
}

