import React from "react";
import { MdLocationOn, MdEmail, MdPhone, MdLanguage } from "react-icons/md";

import SocialMedias from "./socialMedias";
import Map from "./map";

export default function ContactDetails({ organisation }) {
  const details = [
    [MdLocationOn, organisation.address],
    [MdEmail, organisation.email],
    [MdPhone, organisation.phone],
    [MdLanguage, organisation.website],
  ];

  return (
    <>
      <h2 className="font-bold mt-4 tracking-wide uppercase">Contact</h2>
      {details.map(([Icon, detail]) => {
        return (
          <div className="flex flex-row my-1 text-sm" key={Icon}>
            <div className="pt-0.5 mr-2">
              <Icon />
            </div>
            {detail}
          </div>
        );
      })}
      <SocialMedias SocialMedias={organisation.socialMedias} />
      <Map address={organisation.address} />
    </>
  );
}
