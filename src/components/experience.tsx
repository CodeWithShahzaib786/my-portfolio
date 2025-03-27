import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  // My Experience here
  const experience = [
    {
      experience: "Project-Based Experience",
      work: [
        "Developed multiple projects using TypeScript, Next.js, Tailwind CSS, Python, HTML, and CSS",
        "Built real-world applications and hackathons including an ATM System, a Currency Converter, Nike Ecommerce Website and a Resume Builder.",
        "Gained experience in API integration, UI/UX design, and web development best practices.",
      ],
    },
  ];
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-col items-center justify-center -my-8 divide-y-2 divide-gray-100">
          {/* Graduation */}
          {experience.map((item, i) => (
            <div
              key={i}
              className="py-8 flex flex-wrap md:flex-nowrap justify-center"
            >
              <div className="md:flex-grow text-center">
                {" "}
                {/* Center Text */}
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                  {item.experience}
                </h2>
                <ul className="ml-4 list-disc mr-2 text-left">
                  {item.work.map((workItem, i) => (
                    <li key={i}>{workItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
