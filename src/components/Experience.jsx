import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Digital Supreme",
    period: "June 2025 - August 2025",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Designed and delivered fully responsive, production-ready websites for clients including QCERT (ISO certification services) and Sneha Foundation (NGO), among others.",
      "Managed hosting, domain setup, and implemented on-page SEO (meta descriptions, sitemap, robots.txt) to improve visibility and performance.",
      "Developed user-friendly interfaces that enhanced online credibility, facilitated customer inquiries, and boosted engagement across multiple projects.",
    ],
  },
  {
    title: "Backend Developer",
    company: "3B AutoXperts",
    period: "July 2025",
    location: "Remote",
    type: "Freelance",
    achievements: [
      "Developed a secure business dashboard for 3B AutoXperts, enabling authorized users to efficiently manage sales and purchase records.",
      "Replaced spreadsheets with a user-friendly dashboard that improved efficiency, real-time visibility, and business decision-making for the co-founders.",
      "Enabled the business's 3 co-founders to track individual contributions and visualize profit/loss breakdowns, making business insights more accessible.",
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
