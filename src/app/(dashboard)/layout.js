"use client";
import Image from "next/image";
import SideNav from "./components/sideNav";
import { FaDoorOpen } from "react-icons/fa";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex justify-end">
      <nav className="fixed bottom-0 left-0 top-0 w-1/6 basis-4/12 rounded-tr-2xl bg-primary-light-navy px-4">
        <Image
          alt="qms logo"
          src={"/assets/icons/qms_bri_white.svg"}
          width={237}
          height={66}
          className="mb-4 mt-6 w-36"
          priority
        />
        <SideNav />
        <div className="absolute bottom-4 left-0 right-0 mx-4 flex  cursor-pointer space-x-2 p-2 font-medium text-white">
          <FaDoorOpen size={"1.5em"} />
          <p>Log Out</p>
        </div>
      </nav>
      <div className="basis-5/6 px-14 pt-6">
        {children}
      </div>
    </section>
  );
}
