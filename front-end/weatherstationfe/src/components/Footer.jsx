import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Weather App. All Rights Reserved.
        </p>
        <p className="text-sm">
          Built with ❤️. By <a
            href="https://github.com/zprakash" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >Prakash</a> , Hira, Lucas and Bishal
        </p>
        
        <div className="mt-4">
          <a
            href="https://github.com/zprakash/Weather-Station" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white hover:text-gray-400 transition-colors"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.868 8.168 6.839 9.487.5.092.684-.217.684-.484 0-.237-.01-.867-.014-1.555-2.781.604-3.369-1.35-3.369-1.35-.45-1.14-1.096-1.44-1.096-1.44-.897-.612.069-.601.069-.601 1.057.074 1.612 1.09 1.612 1.09.939 1.615 2.464 1.151 3.059.88.095-.684.37-1.152.674-1.417-2.334-.266-4.792-1.167-4.792-5.193 0-1.145.408-2.08 1.08-2.82-.109-.267-.469-.968-.104-2.02 0 0 .897-.29 2.94 1.08C7.226 5.423 8.492 5 10 5s2.774.423 3.398 1.084c2.044-1.37 2.94-1.08 2.94-1.08.365 1.051.005 1.753-.104 2.02.672.74 1.08 1.675 1.08 2.82 0 4.032-2.46 4.925-4.802 5.187.381.328.723.979.723 1.979 0 1.426-.014 2.574-.014 2.927 0 .269.183.577.692.485C17.134 18.168 20 14.418 20 10c0-5.523-4.477-10-10-10z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
