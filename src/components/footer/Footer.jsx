import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Ideas&apos; Store All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15}  alt="FB" className={styles.icon}/>
        <Image src="/2.png" width={15} height={15}  alt="insta" className={styles.icon}/>
        <Image src="/3.png" width={15} height={15}  alt="twitter" className={styles.icon}/>
        <Image src="/4.png" width={15} height={15}  alt="YT" className={styles.icon}/>
      </div>
    </div>
  );
};

export default Footer;