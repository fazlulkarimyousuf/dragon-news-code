import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
const SociallLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-outline btn-secondary w-full"> <FcGoogle /> Login With Google</button>
        <button className="btn btn-outline btn-primary w-full"> <IoLogoGithub /> Login With GitHub</button>
      </div>
    </div>
  );
};

export default SociallLogin;
