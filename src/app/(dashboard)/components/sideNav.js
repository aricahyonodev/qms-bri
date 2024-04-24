import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdHome } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";
import { FaClipboardList, FaUser } from "react-icons/fa";
function SideNavItem({ href, name, children }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link href={href}>
      <li
        className={` text-primary-white-smoke my-2  rounded-sm p-2  font-medium  ${active && "bg-primary-white-smoke text-primary-light-navy"}`}
      >
        <div
          className={`flex items-end space-x-2 ${active && " text-primary-light-navy"}`}
        >
          {children}
          <p>{name}</p>
        </div>
      </li>
    </Link>
  );
}
export default function SideNav() {
  return (
    <ul>
      <SideNavItem href={"/home"} name={"Dashboard"}>
        <MdHome size={"1.5em"} />
      </SideNavItem>
      <SideNavItem href={"/ticket"} name="Tiket">
        <FaTicket size={"1.5em"} />
      </SideNavItem>
      <SideNavItem href={"/bank-list"} name="Daftar Bank">
        <FaClipboardList size={"1.5em"} />
      </SideNavItem>
      <SideNavItem href={"/profile"} name="Profile">
        <FaUser size={"1.5em"} />
      </SideNavItem>
    </ul>
  );
}
