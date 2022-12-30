import styles from './socialNetworks.module.css'
import { TwitterLogo, InstagramLogo, GithubLogo, MediumLogo, LinkedinLogo } from 'phosphor-react'

export function SocialNetworks() {
    return (
        <div>
            <footer>
                <p className={styles.socialNetworksTitle}>Redes sociais</p>
                <div className={styles.socialNetworks}>
                    <ul className={styles.iconsGroup}>
                        <li className={styles.icons}>
                            <a href='#'><TwitterLogo size={64} color={'#00acee'} /></a>
                        </li>

                        <li className={styles.icons}>
                            <a href='#'><InstagramLogo size={64} color={'#962fbf'} className={styles.instagramLogo} style={{ color: "linear-gradient(#9c47fc, #356ad2)" }} /></a>
                        </li>

                        <li className={styles.icons}>
                            <a href='#'><GithubLogo size={64} color={'#000'} /></a>
                        </li>

                        <li className={styles.icons}>
                            <a href='#'><LinkedinLogo size={64} color={'#0072b1'} /></a>
                        </li>

                        <li className={styles.icons}>
                            <a href='#'><MediumLogo size={64} color={'white'} /></a>
                        </li>
                    </ul>
                </div>


            </footer>
        </div>
    )
}