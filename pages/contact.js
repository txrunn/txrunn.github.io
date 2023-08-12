
import Link from 'next/link';

export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <p>If you're interested in hiring me or just want to say hi, you can fill out the form below or reach out via LinkedIn, GitHub, or Twitter.</p>
            <form>
                <label>Name:</label>
                <input type="text" required />

                <label>Email:</label>
                <input type="email" required />

                <label>Message:</label>
                <textarea required></textarea>

                <button type="submit">Send</button>
            </form>
            <div>
                <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
                <a href="https://github.com/txrunn">GitHub</a>
                <a href="https://twitter.com/yourusername">Twitter</a>
            </div>
            <Link href="/">Go Back</Link>
        </div>
    )
}
