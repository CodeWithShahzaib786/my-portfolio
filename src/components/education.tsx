import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
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
      field: "ARTIFICIAL INTELLIGENCE, WEB 3.0 & METAVERSE",
      details:
        "Student at GIAIC | Pursuing Certified Cloud Applied Generative AI Engineering |Working knowledge of HTML, CSS, TypeScript | Tailwind CSS  |  Next.js | Currently learning Python",
    },
  ];
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {/* Graduation */}
          {education.map((item, i) => (
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700 uppercase">
                  {item.field}
                </span>
                <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
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
      </CardContent>
    </Card>
  );
};

export default Education;
