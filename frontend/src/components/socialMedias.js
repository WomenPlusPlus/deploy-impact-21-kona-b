import React from "react";
import { FaTwitter, FaFacebook } from "react-icons/fa";

export default function SocialMedia({ SocialMedias }) {
  // the social media icons are hard coded for the demo. They can be linked to the
  // data with the SocialMedias props

  return (
    <div>
      <div className="pt-0.5 mr-2 my-2">
        <FaFacebook />
      </div>
      <div className="pt-0.5 mr-2 my-2">
        <FaTwitter />
      </div>
    </div>
  );
}
