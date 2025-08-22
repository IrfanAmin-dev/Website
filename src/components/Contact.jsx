import { Linkedin, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I am eager to connect with professionals and organizations looking for a dedicated cybersecurity analyst. If you’re seeking someone with strong technical knowledge, problem-solving ability, and the communication skills to translate complex issues into actionable solutions, I’d love to hear from you. Please feel free to reach out via email or LinkedIn to discuss opportunities where I can contribute and grow as part of your team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:irfanali0.amin@gmail.com"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  irfanali0.amin@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Seattle, WA</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/irfanali0-amin/"
              >
                <Linkedin className="h-6 w-6 text-primary hover:text-primary/80 transition" />
              </a>
            </div>
          </div>
        </div>

      {/* Image */}
        <div className="bg-card rounded-lg shadow-xs overflow-hidden group">
          <div className="w-full">
            <img
              src="images/cybermainframe.jpeg"
              alt="mainframe picture"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          </div>

      </div>
    </section>
  );
};
