"use client"
import React, { useEffect, useState } from "react";

import styles from "./index.module.css";

import defaultAvatar from "@/app/assets/header/avatar/default_dark.svg";

import bellDark from "@/app/assets/header/bell_dark.svg";

import Image from "next/image";

import PopUp from "./Popup";

import { useRouter } from "next/navigation";
import Storage from "@/app/utils/storage";

const Header = () => {
  const router = useRouter();
  
  const [search, setSearch] = useState("")

  const [openedPopUp, setOpenedPopUp] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetElement = event.target as Element;

      if (
        openedPopUp &&
        !targetElement.closest("#popup") &&
        targetElement.id !== "avatar_image"
      ) {
        setOpenedPopUp((prev) => !prev);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openedPopUp]);

  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`search: ${search}`);
  };

  const clickAvatar = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
      setOpenedPopUp((prev) => !prev);
  };

  const clickNotifications = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(e);
  }

  const singOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    router.push("/auth/sign-in", { scroll: false });
    Storage.delete("access_token");
    Storage.delete("refresh_token");
  };

  return (
    <div className={styles.header}>
      <div></div>

      <search role="search">
        <form onSubmit={submitSearch}>
          <input
            className={styles.header__search}
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            placeholder="Search"
          />
        </form>
      </search>

      <div className={styles.buttons}>
        <button
          onClick={clickNotifications}
          className={styles.header__bell_button}
        >
          <Image
            className={styles.header__bell_image}
            width={20}
            height={20}
            src={bellDark}
            alt="user avatar"
          />
        </button>
        <button onClick={clickAvatar} className={styles.header__avatar_button}>
          <Image
            id="avatar_image"
            className={styles.header__avatar_image}
            width={50}
            height={50}
            src={defaultAvatar}
            alt="user avatar"
          />
        </button>
        {openedPopUp && <PopUp name={"User"} singOut={singOut} />}
      </div>
    </div>
  );
}

export default Header;