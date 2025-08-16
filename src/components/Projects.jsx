

const projects = [
    {
      id:1,
      title: "Project 1",
      description:"blah blah blah",
      image:"projects/[image]",
      tags:["react","tailwindcss", "javascript","html"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id:2,
      title: "Project 1",
      description:"blah blah blah",
      image:"projects/[image]",
      tags:["react","tailwindcss", "javascript","html"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id:3,
      title: "Project 1",
      description:"blah blah blah",
      image:"projects/[image]",
      tags:["react","tailwindcss", "javascript","html"],
      demoUrl: "#",
      githubUrl: "#",
    }
]
export const Projects = () => {
    return (<section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {""}
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="py-6 px-2">
                Some recent projects I have built and worked on.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />

                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag}
                                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-forground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 ">{project.title}</h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                    </div>
                ))}

            </div>
        </div>

    </section>)
}