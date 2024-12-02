import styles from './Header.module.css';

import rocketLogoSVG from '../assets/rocket-logo.svg';

export function Header() {
  return (
    <header>
      <img src={rocketLogoSVG} alt="Logo Rocket" />
      <span className={styles.spanTO}>to</span>
      <span className={styles.spanDO}>do</span>
    </header >
  )
}