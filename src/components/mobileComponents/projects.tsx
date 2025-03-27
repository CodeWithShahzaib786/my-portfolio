import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileProjects = () => {
  const projects = [
    {
      name: "Nike Ecommerce Website",
      detail:
        "Check out my Nike E-commerce project, a sleek and dynamic online store built with Next.js & Tailwind CSS!👟",
      link: "https://template-3-marketplace-hackathon-3-by-shahzaib-khan.vercel.app/",
      image: "e-commerce.PNG",
    },
    {
      name: "Blog Website",
      detail:
        "Check out my blog-website project, a sleek website built with Next.js & Tailwind CSS!",
      link: "https://shahzaib-blog.vercel.app/",
      image: "blog-web.PNG",
    },
    {
      name: "Resume builder Website",
      detail:
        "Check out my Resume Builder web. Create your own professional resume now! Made with HTML, CSS, and TypeScript.",
      link: "https://milestone5-resume-by-shahzaib-khan.vercel.app/",
      image: "resume-builder.PNG",
    },
    {
      name: "Solar Energy Website",
      detail:
        "Check out my Solar Energy website. Discover the power of clean and renewable energy! Made with HTML and CSS.",
      link: "https://html-css-website-sigma.vercel.app/",
      image: "solar-energy-web.PNG",
    },
    {
      name: "Unit Converter Website",
      detail: "Check out my Unit Converter web built with Python!",
      link: "https://unit-converter-by-shahzaib-khan.streamlit.app/",
      image: "Unit Converter.PNG",
    },
    {
      name: "Student Management System",
      detail:
        "This is my Student Management System project, built with TypeScript.",
      link: "https://github.com/CodeWithShahzaib786/Project-6-Student-Management-System.git",
      image: "sms system.JPG",
    },
    {
      name: "File Converter Website",
      detail:
        "Check out my File Converter website, which converts Excel files to CSV and vice versa. Built with Python.",
      link: "https://growthmindset-by-shahzaib.streamlit.app/",
      image: "file-converter.PNG",
    },
    {
      name: "Currency Converter",
      detail: "This is my Currency Converter project, built with TypeScript.",
      link: "https://github.com/CodeWithShahzaib786/Project04_Currency-Converter.git",
      image: "currency converter.JPG",
    },
  ];

  return (
    <div className="w-full p-4">
      <h2 className="border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight">
        Projects
      </h2>
      <div className="mt-4 flex flex-wrap -m-4">
        {projects.map((item, i) => (
          <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="relative h-64">
              {/* Project Image */}
              <Image
                alt={item.name}
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-center rounded-lg"
                src={`/assets/projects/${item.image}`}
              />
              {/* Desktop View: Hover Effect */}
              <div className="hidden sm:flex absolute inset-0 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 flex-col justify-center items-center text-center">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="mt-2 text-sm">{item.detail}</p>
                <Link href={item.link} target="_blank" className="text-blue-500 underline mt-2 block">
                  View Project
                </Link>
              </div>
            </div>
            {/* Mobile View: Show Details Below Image */}
            <div className="sm:hidden mt-3 text-center">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm mt-1">{item.detail}</p>
              <Link href={item.link} target="_blank" className="text-blue-500 underline text-sm mt-1 block">
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileProjects;
