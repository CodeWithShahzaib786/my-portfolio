import React from "react";

const MobileEducation = () => {
  // My Education here
  const education = [
    {
      uniName: "national textile university (karachi campus)",
      date: "2022 - in progress",
      field: "bs textile engineering",
      details:
        "I am a 6th semester Textile Engineering student at National Textile University with hands-on experience from my internship at Artistic Milliners, where I gained insights into textile production processes and sustainable practices. I am passionate about exploring innovations in textile technology and integrating sustainability and cutting-edge solutions into the industry.",
    },
    {
      uniName: "Governor Sindh IT Initiative (Cource) ",
      date: "2024 - in progress",
      field: "AI , WEB 3.0 & METAVERSE",
      details:
        "Student at GIAIC | Pursuing Certified Cloud Applied Generative AI Engineering |Working knowledge of HTML, CSS, TypeScript | Tailwind CSS  |  Next.js | Currently learning Python",
    },
  ];
  return (
    <div className="w-full p-5">
      <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Education
      </h2>
      <div className="mt-4  divide-y-2 divide-blue-200">
        {/* Graduation */}
        {education.map((item, i) => (
          <div key={i} className="py-3 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700 uppercase">
                {item.field}
              </span>
              <span className="mt-1 text-blue-500 text-sm">{item.date}</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                {item.uniName}
              </h2>
              <p className="leading-relaxed">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileEducation;
