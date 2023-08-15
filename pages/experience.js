
import Head from 'next/head'
import Link from 'next/link'

export default function Experience() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Head>
                <title>Experience</title>
                <meta name="description" content="My Work Experience" />
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
                <h2 className="text-2xl mb-4">Work Experience</h2>
                <h3 className="text-xl mb-2">Software Engineer at XYZ Corp</h3>
                <p className="mb-4">
                    Worked on developing web applications using ReactJS and NodeJS. - 2017 to 2019
                </p>
                <h3 className="text-xl mb-2">Senior Software Engineer at ABC Inc.</h3>
                <p className="mb-4">
                    Led a team of developers to build scalable microservices. - 2020 to Present
                </p>
            </main>

            {/* Footer */}
            <footer className="bg-blue-600 text-white p-5 text-center">
                Copyright © 2023
            </footer>
        </div>
    )
}

