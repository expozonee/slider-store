import Image from "next/image";
import { Input } from "../ui/input";
import List from "../List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const LIST_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export default function Header() {
  return (
    <header className="px-1 py-6 md:px-6 md:py-6">
      <article className="flex justify-between md:justify-center gap-3 items-center px-10 mx-auto max-w-[1200px]">
        <section className="flex items-center gap-3">
          <Image src={"/favicon.ico"} alt="logo" width={40} height={40} />
          <h3 className="whitespace-nowrap">Slider Store</h3>
        </section>

        <Input
          className="hidden md:block md:max-w-[250px] lg:max-w-[400px] mx-10 bg-gray-100"
          type="search"
          placeholder="Search"
        />
        <List
          className="hidden md:flex gap-6 whitespace-nowrap"
          items={LIST_ITEMS}
          LiStyle={{
            className: "text-gray-500 hover:text-gray-800",
          }}
        />
        <div className="hidden md:flex px-5  gap-6">
          <FontAwesomeIcon className="w-[25px]" icon={faHeart} />
          <FontAwesomeIcon className="w-[25px]" icon={faCartShopping} />
          <FontAwesomeIcon className="w-[25px]" icon={faUser} />
        </div>
        <button className="md:hidden w-[25px] cursor-pointer">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </article>
    </header>
  );
}
