import Image from "next/image";
import { Button } from "./ui/button";
import Typewriter from "typewriter-effect";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { SiStreamlit } from "react-icons/si";

export function SideBar() {
  return (
    <div className=" h-screen justify-center flex flex-col items-center p-3">
      {/* image */}
      <Image
        src="/assets/bg-profile.jpg"
        alt="profile-pic"
        width={1000}
        height={1000}
        className="rounded-md"
      />

      {/* name */}
      <div className="mt-2">
        <h1 className="text-2xl font-bold tracking-tight uppercase">
          Shahzaib Khan
        </h1>
        <h2 className="text-md text-center font-semibold tracking-tight text-gray-600">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "UI/UX Developer",
                "Textile Engineer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
      {/* Social Media accounts */}
      <div className="grid grid-cols-5 gap-2">
        {/* linkedin */}
        <div className="mt-4">
          <Link
            href="https://www.linkedin.com/in/shahzaib-khan-574096323/"
            target="_blank"
            className="text-gray-600 hover:text-[#0A66C2]"
          >
            <FaLinkedin className="text-4xl" />
          </Link>
        </div>
        {/* github */}
        <div className="mt-4">
          <Link
            href="https://github.com/CodeWithShahzaib786"
            target="_blank"
            className="text-gray-600 hover:text-[#6e5494]"
          >
            <FaGithubSquare className="text-4xl" />
          </Link>
        </div>
        {/* vercel */}
        <div className="mt-4">
          <Link
            href="https://vercel.com/code-with-shahzaibs-projects"
            target="_blank"
            className="text-gray-600 hover:text-black"
          >
            <IoLogoVercel className="text-4xl" />
          </Link>
        </div>
        {/* streamlit */}
        <div className="mt-4">
          <Link
            href="https://share.streamlit.io/?utm_source=streamlit&utm_medium=referral&utm_campaign=main&utm_content=-ss-streamlit-io-topright"
            target="_blank"
            className="text-gray-600 hover:text-red-500"
          >
            <SiStreamlit className="text-4xl" />
          </Link>
        </div>
        {/* instagram */}
        <div className="mt-4">
          <Link
            href="https://www.instagram.com/im._shahzaib/"
            target="_blank"
            className="text-gray-600 hover:text-[#e1306c]"
          >
            <FaInstagramSquare className="text-4xl" />
          </Link>
        </div>
      </div>
      {/* download cv button */}
      <Link
        href="/assets/cv.pdf"
        target="_blank"
        className="mt-4 cursor-pointer "
      >
        <Button className="cursor-pointer">
          <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Download CV
        </Button>
      </Link>
    </div>
  );
}
