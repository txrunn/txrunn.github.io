
import Link from 'next/link';

export default function Education() {
    const educationList = [
        {
            degree: "Degree 1",
            institution: "Institution 1",
            year: "2020"
        },
        // Add more educational details as needed
    ];

    return (
        <div>
            <h1>Education</h1>
            <div>
                {educationList.map((edu, index) => (
                    <div key={index}>
                        <h2>{edu.degree} from {edu.institution}</h2>
                        <p>Year: {edu.year}</p>
                    </div>
                ))}
            </div>
            <Link href="/">Go Back</Link>
        </div>
    )
}
