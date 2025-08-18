///DuckDB, Wireshark, TCPDump, BurpSuite,Shodan, Metasploit,OpenVAS
//
import { useState } from "react";
import {cn} from "@/lib/utils"

const skills = [
  // Cybersecurity & IAM
  { name: "Identity & Access Management (IAM)", level: 75, category: "security" },
  { name: "NIST 800-53 (Compliance)", level: 75, category: "security" },
  { name: "Incident Detection & Response", level: 70, category: "security" },
  { name: "Splunk (SOC Monitoring)", level: 70, category: "security" },
  { name: "Sysmon (Endpoint Monitoring)", level: 65, category: "security" },
  { name: "Wireshark (Network Analysis)", level: 70, category: "security" },
  { name: "Shodan (Network Reconnaissance)", level: 60, category: "security" },
  { name: "OpenVas", level: 60, category: "security" },
  { name: "Nmap", level: 60, category: "security" },
  { name: "Nessus", level: 60, category: "security" },
  { name: "Metasploit", level: 60, category: "security" },

  // Cloud & Infrastructure
  { name: "Azure", level: 80, category: "cloud" },
  { name: "AWS", level: 70, category: "cloud" },
  { name: "Terraform (IaC)", level: 75, category: "cloud" },
  { name: "Kubernetes", level: 60, category: "cloud" },

  // Development
  { name: "HTML5", level: 85, category: "dev" },
  { name: "CSS3", level: 80, category: "dev" },
  { name: "JavaScript (ES6+)", level: 70, category: "dev" },
  { name: "Python", level: 75, category: "dev" },
  { name: "Node.js", level: 55, category: "dev" },
  { name: "React.js", level: 55, category: "dev" },

  // Networking
  { name: "TCP/IP", level: 80, category: "networking" },
  { name: "Firewalls & Access Control", level: 75, category: "networking" },
  { name: "DNS & DHCP", level: 70, category: "networking" },
  { name: "VPN & Tunneling Protocols", level: 65, category: "networking" },

  // Automation & DevOps
  { name: "CI/CD Pipelines", level: 65, category: "automation" },
  { name: "Automation & Scripting", level: 75, category: "automation" },

  // Systems & Tools
  { name: "Linux", level: 80, category: "tools" },
  { name: "Docker (Containers)", level: 60, category: "tools" },

  // Frameworks & Libraries
  { name: "React", level: 70, category: "frameworks" },

  // Soft Skills
  { name: "Collaboration", level: 90, category: "soft" },
  { name: "Leadership & Team Management", level: 85, category: "soft" },
  { name: "Customer-Focused Mindset", level: 95, category: "soft" },
  { name: "Detail-Oriented & Analytical", level: 85, category: "soft" }
];

const categories = [
  "security",
  "cloud",
  "dev",
  "networking",
  "automation",
  "tools",
  "frameworks",
  "soft",
  "all"
];


export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredState = skills.filter(
        (skill) => activeCategory == "all" || skill.category == activeCategory
);

    return ( <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key)=> (
                    <button key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory == category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-primary/10 transition-colors duration-300"
                    )}
                    >{category}</button>
                ))}

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredState.map((skills, key) => (
                    <div key={key}
                     className="bg-card p-6 rounded-lg shadow-xs card-hover"
                     >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skills.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style = {{width: skills.level + "%" }}
                            />
                        </div>
                        <div className="text-right ml-1">
                            <span className="text-sm text-muted-foreground">{skills.level}%</span>
                        </div>


                    </div>
                ))}


            </div>
        </div>
    </section>
    )
}