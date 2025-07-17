import { NavLink } from "react-router-dom";
import Textslider from "./TextCarousel/textslider";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer style={{ color: "white" }} className={styles.footer}>
      <Textslider />

      <NavLink to="/template" className={styles.getStartedButtonText}>
        <button className={styles.getStartedButton}>Get Started</button>
      </NavLink>

      <p className={styles.footerStats}>
        <span>💼 Over 10,000 resumes created •</span>{" "}
        <span>🌐 Trusted by users in 20+ countries © •</span>{" "}
        <span>2025 CVBuilder. Made with 💜</span>
      </p>
    </footer>
  );
}
