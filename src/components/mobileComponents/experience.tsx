import React from "react";

const MobileExperience = () => {
  // My Experience here
  const experience = [
    {
      experience: "Project-Based Experience",
      work: [
        "Developed multiple projects using TypeScript, Next.js, Tailwind CSS, Python, HTML, and CSS",
        "Built real-world applications, and hackathons including an ATM System, a Currency Converter, Nike Ecommerce Website and a Resume Builder.",
        "Gained experience in API integration, UI/UX design, and web development best practices.",
      ],
    },
  ];
  return (
    <div className="w-full p-5">
      <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Experience
      </h2>
      <div className="mt-4  divide-y-2 divide-blue-200">
        {/* Graduation */}
        {experience.map((item, i) => (
          <div key={i} className="py-4 flex flex-wrap md:flex-nowrap">
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                {item.experience}
              </h2>
              <ul className="ml-4 list-disc text-gray-700 mr-2">
                {item.work.map((workItem, i) => (
                  <li key={i}>{workItem}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileExperience;
