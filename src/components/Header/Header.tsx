import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">LOGO</Link>
      </div>
      <ul>
        <li>
          <a href="/ask-question">Ask Question</a>
        </li>
        <li>
          <a href="">xxx</a>
        </li>
        <li>
          <a href="">ccc</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
