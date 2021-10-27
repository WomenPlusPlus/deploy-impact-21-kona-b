import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";

export default function Navigation() {
  return (
    <nav className="border-b-2 border-kona">
      <div className="relative flex items-end justify-between mt-8 mb-8">
        <Link to="/" className="text-md sm:text-3xl text-kona">
          Dots. logo
        </Link>
        <Button description={"menu"} url={''}/>
      </div>
    </nav>
  );
}
