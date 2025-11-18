// Loader.jsx
import React from "react";
import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-4 border-white/50 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white mt-2 text-sm tracking-wide">Loading...</p>
      </div>
    </Html>
  );
};

export default Loader;
