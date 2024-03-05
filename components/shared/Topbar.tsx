"use client";
// Importar los estilos de Tailwind CSS
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { PiSignInBold } from "react-icons/pi";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { AiOutlineHome, AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import UserIcon from "./UserIcon";
import { fetchUser } from "@/lib/actions/user.actions";

const Topbar = ({ userId }: { userId: string }) => {
  console.log("este es el id del usuario", userId);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await fetchUser(userId);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);
  console.log(user?.image)

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="topbar">
      <div className="topbar_logo">
        <Link href="/home" className="topbar_link">
          <FaHeadphonesSimple size={40} color="cyan" />
        </Link>
      </div>
      <div className="topbar_links hidden md:flex space-x-4">
        <Link href="/" className="topbar_link">
          <AiOutlineHome size={30} color="cyan" />
          <span className="hidden md:inline text-light-1">Inicio</span>
        </Link>
        <Link href="/home" className="topbar_link">
          <AiOutlineShopping size={30} color="white" />
          <span className="hidden md:inline text-light-1">Productos</span>
        </Link>
        {userId ? (
          <Link href="/profile" className="topbar_link">
            <UserIcon userImage={user?.image} size={30} />
            <span className="hidden md:inline text-light-1">Perfil</span>
          </Link>
        ) : (
          <Link href="/sign-up" className="topbar_link">
            <PiSignInBold size={30} color="cyan" />
            <span className="hidden md:inline text-light-1">Regístrese</span>
          </Link>
        )}
      </div>
      <div className="topbar_menu md:hidden">
        <button onClick={toggleMenu} className="text-light-1">
          <TiThMenuOutline size={30} color="cyan" />
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        {menuOpen && (
          <div className="topbar_menu-dropdown absolute top-16 right-4 bg-gray-800 p-4 rounded">
            <Link href="/" className="topbar_link block">
              <AiOutlineHome size={30} color="cyan" />
              <span className="text-light-1">Inicio</span>
            </Link>
            <Link href="/home" className="topbar_link block">
              <AiOutlineShopping size={30} color="cyan" />
              <span className="text-light-1">Productos</span>
            </Link>
            {userId ? (
              <Link href="/profile" className="topbar_link">
                <UserIcon userImage={user?.image} size={30} />
                <span className="hidden md:inline text-light-1">Perfil</span>
              </Link>
            ) : (
              <Link href="/sign-up" className="topbar_link">
                <PiSignInBold size={30} color="cyan" />
                <span className="hidden md:inline text-light-1">
                  Regístrese
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Topbar;
