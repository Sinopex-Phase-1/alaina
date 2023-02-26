import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import NavActive from "./NavActive";

export default function Navbar({ children }) {
  return (
    <div className="w-full border-gray-200 h-14 hidden lg:block">
      <div className="h-full flex flex-wrap items-center justify-center max-w-screen-xl mx-auto">
        <ul className="flex mt-4 font-medium lg:space-x-8 lg:mt-0 text-xl">
          <NLink to="/">Thuis</NLink>
          <NLink to="/about">Wat Betreft</NLink>
          <div className="relative group">
            <button
              className="hover:underline hover:underline-offset-4 hover:decoration-2 text-gray-900 transition-all ease-in flex gap-2 items-center capitalize"
              type="button"
            >
              <span>massages</span>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </button>
            <div className="z-10 w-44 hidden group-hover:block absolute top-full left-0 bg-transparent">
              <ul className="py-2 text-sm text-gray-700 bg-green-50 mt-5 shadow">
                <DDLink to="/massages/sports">sports</DDLink>
                <DDLink to="/massages/shiatsu">shiatsu</DDLink>
                <DDLink to="/massages/chair">stoel</DDLink>
                {/* <DDLink to="/massages/relaxation">relaxation</DDLink> */}
                <DDLink to="/massages/relaxation">ontspanning</DDLink>
              </ul>
            </div>
          </div>
          {/* <NLink to="/ahmassage">ah massage</NLink> */}
          <NLink to="/contact">contact</NLink>
          <NItem to="/living">Jong leven</NItem>
        </ul>
      </div>
    </div>
  );
}

const linkClass =
  "hover:underline hover:underline-offset-4 hover:decoration-2 text-gray-900 transition-all ease-in uppercase ";

export function NItem({ children, to }) {
  return (
    <li className="capitalize">
      <Link to={to} className={linkClass + NavActive(to)}>
        {children}
      </Link>
    </li>
  );
}
export function DDItem({ children, to }) {
  return (
    <li className="py-3 px-6 relative font-medium">
      <Link to={to} className={linkClass + NavActive(to)}>
        {children}
      </Link>
    </li>
  );
}
export function NLink({ children, to }) {
  return (
    <li className="capitalize">
      <Link to={to} className={linkClass + NavActive(to)}>
        {children}
      </Link>
    </li>
  );
}
export function DDLink({ children, to }) {
  return (
    <li className="py-3 px-6 relative font-medium capitalize">
      <Link to={to} className={linkClass + NavActive(to)}>
        {children}
      </Link>
    </li>
  );
}
