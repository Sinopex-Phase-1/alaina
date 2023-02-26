import { Link } from "react-router-dom";
import NavActive from "./NavActive";

export default function Navbar({ children }) {
  return (
    <div className="w-full border-gray-200 h-14 hidden lg:block">
      <div className="h-full flex flex-wrap items-center justify-center max-w-screen-xl mx-auto px-4">
        <ul className="w-full flex justify-between mt-4 font-medium lg:mt-0 text-md">
          <NLink to="/">home</NLink>
          <NLink to="/about">about us</NLink>
          <NLink to="/services">services</NLink>
          <NLink to="/contact">contact</NLink>
          <NLink to="/blog">blog</NLink>
          <NLink to="/faq">FAQ</NLink>
          <NItem to="/testimonials">testimonials</NItem>
          <NItem to="/shop">shop</NItem>
          <NItem to="/contacts">contacts</NItem>
        </ul>
      </div>
    </div>
  );
}

const linkClass =
  "text-gray-600 font-semibold transition-all ease-in uppercase hover:text-green-500 ";

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
