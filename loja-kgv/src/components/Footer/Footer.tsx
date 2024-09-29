import styles from "./Footer.module.css"

import kgvLogo from "/images/kgv-logo.png"

export default function Footer() {
  return (
    <footer className={styles.rodape}>
        <img src={kgvLogo} alt="Logo KGV" />
    </footer>
  )
}
