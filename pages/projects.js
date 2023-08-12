
import Link from 'next/link';

export default function Projects() {
    const projects = [
        {
            title: "Project 1",
            description: "A brief description of Project 1.",
            techStack: ["Tech 1", "Tech 2"],
            imagePath: "/img/project1_placeholder.jpg",
            link: "/projects/project1"
        },
        // Add more projects as needed
    ];

    return (
        <div>
            <h1>Projects</h1>
            <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <Link href={project.link}>
                            <a>
                                <img src={project.imagePath} alt={project.title} />
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
            <Link href="/">Go Back</Link>
        </div>
    )
}
