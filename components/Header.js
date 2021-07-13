import Link from "next/link";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import AuthContext from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import {
  FaPlusCircle,
  FaSignInAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import SearchBar from "./SearchBar";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const [width, setWidth] = useState(null);
  const [button, setButton] = useState(false);

  const onClickHandler = () => {
    setClick(!click);
  };
  const showButton = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 950) {
        setButton(true);
      } else {
        setButton(false);
      }
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <div className={styles.logo_div}>
            <a>Dj Events</a>
          </div>
        </Link>
        {button && (
          <div>
            {!click ? (
              <FaBars onClick={onClickHandler} />
            ) : (
              <FaTimes onClick={onClickHandler} />
            )}
          </div>
        )}
      </div>

      <SearchBar />

      <nav className={!click ? styles.nav : styles.nav.active}>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/events/add">
                  <a>
                    Add Event <FaPlusCircle />{" "}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard </a>
                </Link>
              </li>
              <li>
                <button onClick={() => logout()} className="btn">
                  <FaSignOutAlt /> LogOut
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/account/login">
                  <a className={styles.btnLogin}>
                    Login <FaSignInAlt />{" "}
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
