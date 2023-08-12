
import Link from 'next/link';

export default function Experience() {
    const experiences = [
        {
            position: "Position 1",
            company: "Company 1",
            startDate: "Jan 2020",
            endDate: "Present",
            description: "Brief description of your role at Company 1."
        },
        // Add more experiences as needed
    ];

    return (
        <div>
            <h1>Experience</h1>
            <div>
                {experiences.map((exp, index) => (
                    <div key={index}>
                        <h2>{exp.position} at {exp.company}</h2>
                        <p>{exp.startDate} - {exp.endDate}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
            <Link href="/">Go Back</Link>
        </div>
    )
}
