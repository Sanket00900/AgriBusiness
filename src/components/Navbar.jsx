import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-primary-green backdrop-filter backdrop-blur-lg bg-opacity-30 sticky top-0">
        <div className="flex justify-center items-center h-full">
          <ul className="flex gap-x-12 text-primary-yellow items-center">
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <p>Projects</p>
              </Link>
            </li>
            <li>
              <Link href="/all">
                <p>All Pages</p>
              </Link>
            </li>
            <li>
              <Button buttonText={"Let's Talk"} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
