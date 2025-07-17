import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <button className={styles.profileImageButton} type="button">
        <img
          className={styles.profileImage}
          src="./icons8-profile-48.png"
          alt=""
        />
      </button>
    </div>
  );
}
