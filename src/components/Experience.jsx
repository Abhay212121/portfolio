import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Digital Supreme",
    period: "June 2025 - Present",
    location: "Remote",
    type: "Internship",
    achievements: [
      `Designed and delivered responsive, production-grade sites for clients including QCERT (ISO services), Sneha
Foundation (NGO), and 3B AutoXperts (automobile products) using React.js, Node.js, and Express.js.`,
      `Developed and deployed a secure business management dashboard for 3B AutoXperts, enabling authorized users to
efficiently manage sales, purchase, and profit/loss records, improving data visibility and operational efficiency.
`,
      ` Configured hosting environments, managed domain setup, and implemented on-page SEO (meta descriptions,
sitemap, robots.txt) to enhance search engine visibility and performance metrics.`,
      `Built user-friendly, high-performance interfaces that enhanced client credibility, streamlined customer inquiries, and
increased user engagement across multiple digital platforms.`,
    ],
  },
];

export function Experience() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-900 px-4 pt-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Work <span className="text-orange-400">Experience</span>
          </h2>
          <hr className="mx-auto mt-2 w-44 border-orange-400" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-800 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="border-b border-gray-700 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-orange-400">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:items-end">
                    <div className="w-fit rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-gray-300">
                      {exp.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="mr-1 h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="mr-1 h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-gray-200">
                      <span className="mt-1 mr-2 text-orange-400">•</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
