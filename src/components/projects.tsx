import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  // My Projects here
  const projects = [
    {
      name: "Nike Ecommerce Website",
      detail:
        "  Check out my Nike E-commerce project  a sleek and dynamic online store built with Next.js & Tailwind CSS!👟",
      link: "https://template-3-marketplace-hackathon-3-by-shahzaib-khan.vercel.app/",
      image: "e-commerce.PNG",
    },
    {
      name: "Blog Website",
      detail:
        "  Check out my blog-website project  a sleek website built with Next.js & Tailwind CSS!",
      link: "https://shahzaib-blog.vercel.app/",
      image: "blog-web.PNG",
    },
    {
      name: "Resume builder Website",
      detail:
        "Check out my Resume Builder web  Create your own professional resume now! that made from HTML,CSS,Typescript",
      link: "https://milestone5-resume-by-shahzaib-khan.vercel.app/",
      image: "resume-builder.PNG",
    },
    {
      name: "Solar Energy Website",
      detail:
        "Check out my Solar Energy website Discover the power of clean and renewable energy! that made from HTML and CSS",
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
      name: "Student management system",
      detail:
        "This is my student management system project that made from Typescript",
      link: "https://github.com/CodeWithShahzaib786/Project-6-Student-Management-System.git",
      image: "sms system.JPG",
    },
    {
      name: "File Converter Website",
      detail:
        "Check my file converter website which convert excel file to csv file and csv to excel file that made from python",
      link: "https://growthmindset-by-shahzaib.streamlit.app/",
      image: "file-converter.PNG",
    },
    {
      name: "Currency-Converter",
      detail: "This is my currency-converter project that made from Typescript",
      link: "https://github.com/CodeWithShahzaib786/Project04_Currency-Converter.git",
      image: "currency converter.JPG",
    },
  ];
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap -m-4">
          {/* My Projects here */}
          {projects.map((item, i) => (
            <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative h-64">
                <Image
                  alt="gallery"
                  width={1000}
                  height={1000}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={`/assets/projects/${item.image}`}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
                  <h2 className="text-lg font-semibold tracking-tight">
                    {item.name}
                  </h2>
                  <p className="mt-3 leading-relaxed line-clamp-4">
                    {item.detail}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="text-sm font-semibold tracking-tight hover:text-blue-500 hover:underline"
                  >
                    <p className="mt-3">View Project</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
