import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from './Campsite.module.css';

function Campsite() {
    

    return (
        <div className={styles.container}>
            <div className={styles.animatedLetters}>JM</div>

            <h1 className={styles.title}>Bem-vindo!</h1>
            <p className={styles.paragrafo}>CAMPSITE JOTAEME</p>
            <ul className={styles.linkList}>
                <li>
                    <a href="https://github.com/Jotaeme00" className={styles.link}>
                        <FaGithub className={styles.icon} aria-label="Github" /> Github
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/juan-muniz-b695132b6/" className={styles.link}>
                        <FaLinkedin className={styles.icon} aria-label="Linkedin" />Juan - Linkedin
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/j0t4eme_" className={styles.link}>
                        <FaInstagram className={styles.icon} aria-label="Instagram" /> Instagram 
                        <span className={styles.pessoal}>PRIVADO</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Campsite;


