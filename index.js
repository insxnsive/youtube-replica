import React, { useState } from "react";
import { AiFillHome, AiOutlineUser, AiOutlineDownload } from "react-icons/ai";
import { SiYoutubeshorts, SiYoutubemusic } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MenuIcon from "@mui/icons-material/Menu";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const menuItems = [
    { icon: <AiFillHome />, text: "Início" },
    { icon: <SiYoutubeshorts />, text: "Shorts" },
    { icon: <MdSubscriptions />, text: "Inscrições" },
    { icon: <SiYoutubemusic />, text: "YouTube Music" },
    { icon: <AiOutlineUser />, text: "Você" },
    { icon: <AiOutlineDownload />, text: "Downloads" },
    // Add other menu items here
  ];

  const buttonItems = ["Você", "Inscrições"];

  const channels = [
    { name: "Channel 1", icon: "/channel-icons/channel1.png" },
    { name: "Channel 2", icon: "/channel-icons/channel2.png" },
    // Add more channels as needed
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <GiHamburgerMenu size={24} />
        </button>
        {/* Other header content */}
      </header>

      <div className={styles.content}>
        <aside
          className={`${styles.sidebar} ${isMenuOpen ? styles.open : styles.closed}`}
        >
          {isMenuOpen ? (
            <div className={styles.openMenu}>
              {menuItems.map((item, index) => (
                <div key={index} className={styles.menuItem}>
                  {item.icon}
                  {buttonItems.includes(item.text) ? (
                    <button className={styles.menuButton}>
                      {item.text} <span>&#62;</span>
                    </button>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
              {channels.map((channel, index) => (
                <div key={index} className={styles.channel}>
                  <Image
                    src={channel.icon}
                    alt={channel.name}
                    width={64}
                    height={64}
                    className={styles.channelIcon}
                  />
                  <span>{channel.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.closedMenu}>
              {menuItems.map((item, index) => (
                <div key={index} className={styles.menuItem}>
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          )}
        </aside>

        <main className={styles.mainContent}>{/* Main content */}</main>
      </div>

      <div className={styles.shortsContainer}>{/* Shorts content */}</div>
    </div>
  );
}
