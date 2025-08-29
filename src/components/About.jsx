import { Briefcase, Code, HatGlasses, User } from "lucide-react"

export const About = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Cybersecurity Analyst & Developer</h3>
                        <p className="text-muted-foreground">
                            I am a recently graduated Cybersecurity Analyst with a strong foundation in network security, threat analysis, and risk management. My academic background has equipped me with hands-on experience in identifying vulnerabilities, implementing security measures, and monitoring systems for potential threats. I am passionate about protecting organizations from cyber risks and continuously expanding my knowledge of emerging technologies, attack vectors, and defense strategies.
                        </p>

                        <p className="text-muted-foreground">
                            I bring strong problem-solving skills, attention to detail, and the ability to work under pressure in fast-paced environments. With proficiency in tools such as Wireshark, Splunk, and Nessus, as well as knowledge of frameworks like NIST and ISO 27001, I am eager to apply my skills in a professional setting. I am seeking an opportunity to contribute to a cybersecurity team where I can protect systems, strengthen defenses, and grow into a well-rounded security professional.
                        </p>

                        <div className= "flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                          <a href="#contact" className="cosmic-button">Get in Touch</a>
                            {/* <a href="" className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>*/}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating Secure Scripts, Applications, and Workflows
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <HatGlasses className="h-6 w-6 text-primary"/>
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">Incident Response & Forensics</h4>
                                    <p className="text-muted-foreground">
                                        Detecting Threats with Deep Packet Inspection, Containment, and Root Cause Analysis
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">Communication</h4>
                                    <p className="text-muted-foreground">
                                        Able to translate Technical Jargon into Simple, Practical Terms
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}