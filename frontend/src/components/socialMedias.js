import React from "react";
import { FaTwitter, FaFacebook } from "react-icons/fa";



export default function SocialMedia({ SocialMedias }) {
  return (
    <div>
      {SocialMedias.map((socialMedia) => {
        return (
          <ul key={socialMedia}>
            <li>{socialMedia}</li>
          </ul>
        );
      })}
    </div>
  );
}
