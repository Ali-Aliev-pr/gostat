"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./index.module.css";
import Menu from "./Menu";
import Metro from "./Metro";
import Charts from "./Charts";
import { getStat, getUserData } from "./api";
import { IUserData, Stat } from ".";
import Header from "./Header";

export default function Dashboard() {
  const router = useRouter();

  const [activeScreen, setActiveScreen] = useState(1 as 1 | 2 | 3 | 4);
  const [sectionStat, setSectionStat] = useState({
    visits: 0,
    countries: 0,
    browsers: 0,
    bots: 0,
  });
  const [stats, setStat] = useState({} as Stat);

  const [userInfo, setUserInfo] = useState({} as IUserData);
  const [activeApp, setActiveApp] = useState(null as null | string);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUserData();

        setUserInfo(response.data);

        if (response.data.apps) {
          changeActiveApp(response.data.apps[0].id);
        }

        if (response.data.account_confirmed === false) {
          router.push("/auth/alert", { scroll: false });
        }
      } catch (error) {}
    }

    fetchData();
  }, [router]);

  const changeActiveApp = async (app: string) => {
    setActiveApp(app);

    const response = await getStat(app);
    const body = response.data;

    if (response.data.stats.avg_duration) {
      setSectionStat({
        visits: body.stats.first_visits,
        countries: body.stats.top_countries.length,
        browsers: body.stats.top_browsers.length,
        bots: 0,
      });

      setStat(response.data);
    }
  };

  return (
    <main className={styles.page}>
      <Menu />
      <div className={styles.content}>
        <Header
          userInfo={userInfo}
          activeApp={activeApp}
          setActiveApp={changeActiveApp}
        />
        <Metro
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          sectionStat={sectionStat}
        />

        <Charts activeScreen={activeScreen} stats={stats} />
      </div>
    </main>
  );
}
