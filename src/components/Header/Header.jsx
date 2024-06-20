import { HashLink } from 'react-router-hash-link';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import headerData from '../../db/header.json';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {headerData.map(item => (
            <li key={item.id}>
              <HashLink smooth to={item.href}>
                {item.label}
              </HashLink>
            </li>
          ))}
        </ul>
        <button className={styles.contactButton}>Contact us</button>
      </nav>
    </header>
  );
};

export default Header;
