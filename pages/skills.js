
import Link from 'next/link';

export default function Skills() {
    const skills = [
        { name: "Skill 1", proficiency: 90 },  // proficiency is in percentage
        { name: "Skill 2", proficiency: 80 },
        // Add more skills as needed
    ];

    return (
        <div>
            <h1>Skills</h1>
            <div>
                {skills.map((skill, index) => (
                    <div key={index}>
                        <label>{skill.name}</label>
                        <progress value={skill.proficiency} max="100"></progress>
                        <span>{skill.proficiency}%</span>
                    </div>
                ))}
            </div>
            <Link href="/">Go Back</Link>
        </div>
    )
}
