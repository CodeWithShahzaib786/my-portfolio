import React from "react";

const MobileExperience = () => {
  // My Experience here
  const experience = [
    {
      companyName: "Artistic Milliners (AM-4)",
      dateStart: "Sep 2024",
      dateEnd: "Oct 2024",
      position: "Internee",
      details:
        "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.",
      work: ["I completed 4 week internship program in cut to pack process"],
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
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700 uppercase">
                {item.position}
              </span>
              <span className="mt-1 text-blue-500 text-sm">
                {`${item.dateStart} - ${item.dateEnd}`}
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                {item.companyName}
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
