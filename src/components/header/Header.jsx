import Navbar from "./navbar/Navbar";
import TopBar from "./TopBar";

export default function Header({ children }) {
  return (
    <header>
      <TopBar></TopBar>
      <Navbar></Navbar>
    </header>
  );
}
