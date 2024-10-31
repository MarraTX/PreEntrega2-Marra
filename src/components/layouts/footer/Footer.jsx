import React from "react";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 flex flex-col items-center gap-2 mt-auto w-full">
      <span className="text-xl font-semibold">Natural Chadi</span>
      <IconButton
        color="inherit"
        href="https://www.instagram.com/naturalchadi/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition duration-300"
      >
        <InstagramIcon fontSize="large" />
      </IconButton>
      <p className="text-sm mt-2 text-gray-400">
        &copy; {new Date().getFullYear()} Natural Chadi. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
