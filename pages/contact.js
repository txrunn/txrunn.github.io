
import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contact Me" />
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
                <h2 className="text-2xl mb-4">Get In Touch</h2>
                <p className="mb-4">
                    If you have any questions, project inquiries, or just want to say hi, feel free to drop me a message at <a href="mailto:example@email.com" className="text-blue-600 underline">example@email.com</a>.
                </p>
                <p className="mb-4">
                    You can also find me on <a href="https://github.com/txrunn" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>.
                </p>
            </main>

            {/* Footer */}
            <footer className="bg-blue-600 text-white p-5 text-center">
                Copyright © 2023
            </footer>
        </div>
    )
}

