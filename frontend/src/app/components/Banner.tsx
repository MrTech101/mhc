import React from "react";
import styles from "@/app/styles/Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.banner}>
    {/* Circular Background Image */}
    <img
      src="/images/round2.png"
      alt="Background Decoration"
      className={styles["banner-background"]}
    />

    {/* Main Image */}
    <img
      src="/images/promotion/slide1.png"
      alt="Promotional Banner"
      className={styles["banner-image"]}
    />

    {/* Text Content */}
    <div className={styles["banner-content"]}>
      <h1 className={styles["banner-title"]}>Candid Whitening Kit</h1>
      <p className={styles["banner-subtitle"]}>Only this week. Don’t miss!</p>
      <div className={styles["banner-price"]}>
        <p className={styles["banner-price-current"]}>Rs. 15.99</p>
        <p className={styles["banner-price-old"]}>Rs. 29.99</p>
      </div>
      <button className={styles["banner-button"]}>Shop now</button>
    </div>
  </section>
  );
};

export default Banner;
