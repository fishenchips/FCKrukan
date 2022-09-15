//import Head from "next/head"; // ADDING Head again for future use of metatags etc
import styles from "../styles/Home.module.css";

export default function Home() {
  /* FIRST TIME PAGE LOADS the array is empty (when sending request to backend),
  Which isnt great for search engine optimization, so we use getStaticProps*/

  return <div className={styles.container}></div>;
}
