import { ArrowRight, ExternalLink, Github } from "lucide-react"


const projects = [
    {
      id:1,
      title: "SOC HomeLab",
      description:"A home lab environment with Windows Sysmon configured, forwarding logs to Splunk Universal Forwarder. Includes custom Splunk dashboards and queries to detect failed logins, PowerShell usage, and privileged logons.",
      image:"projects/soc_iot.jpg",
      tags:["Sysmon","Splunk", "Powershell","SPL(Search Processing Language for querying)"],
      githubUrl: "https://github.com/IrfanAmin-dev/Windows-Sysmon-Splunk-Home-Lab",
    },
    {
      id:2,
      title: "Website Portfolio",
      description:"React.js built web application to create an online portfolio.Uses TailwindCSS and deployed with Vercel.",
      image:"projects/websiteGif.gif",
      tags:["React.js","Tailwindcss", "Javascript","HTML","Vercel"],
      githubUrl: "https://github.com/IrfanAmin-dev/Website",
    },
       {
      id:3,
      title: "Terraform for Remote Consulting Saas",
      description:"Capstone project creating a terraform configuration file for Remote based consulting company seeking to expand infrastructuture via Azure.",
      image:"projects/terraformIMG.png",
      tags:["Terraform","Vscode", "Azure","IaC","HCL","JSON"],
      githubUrl: "https://github.com/IrfanAmin-dev/Terraform-IaC-Template-for-Saas",
    },
    {
      id:4,
      title: "Enumeration with Nmap,Network sniffing and Pcap file analysis",
      description:"Enumerated an Enterprise Environment and performed packet analysis on suspicious traffic flow",
      image:"projects/network.jpg",
      tags:["Wireshark","Nmap", "Packet Sniffing","zenMap","TCP/IP","Kali Linux"],
      githubUrl: "https://github.com/IrfanAmin-dev/Labs",
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
                            <h3 className="text-xl font-semibold mb-2 ">{project.title}</h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">    
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    target="_blank"> <ExternalLink size={20}/> </a>
                                    
                                    <a href={project.githubUrl}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    target="_blank"> <Github size={20}/> </a>
                                </div>
                                </div>
                            </div>
                    </div>
                ))}

            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                target="_blank"
                href="https://github.com/IrfanAmin-dev"
                >
                    Check out my Github!!! <ArrowRight size={16} />
                </a>
            </div>
        </div>

    </section>)
}