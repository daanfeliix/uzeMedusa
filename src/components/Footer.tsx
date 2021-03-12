import { Email, Instagram, Phone, Twitter, WhatsApp } from '@material-ui/icons'
import styles from '../styles/components/Footer.module.css'

export function Footer() {


    return (
    <>
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="logo" />
                <span>Copyright 2021 &#169; Uze Medusa</span>
                <span>All Rights Reserved</span>
            </div>
            <div className={styles.about}>
                <h3>Sobre nós</h3>
                <ul>
                    <li>Sobre nós</li>
                    <li>Devoluções</li>
                    <li>Sobre Entregas</li>
                    <li>Politica de Privacidade</li>
                </ul>
            </div>
            <div className={styles.informations}>
                <h3>Contato</h3>
                <span>
                    <Phone /> Fone: (xx) x xxxx-xxxx</span>
                <span><Email />Email: contato@uzemedusa.com.br</span>
                <div>
                    <div>
                        <Instagram />
                    </div>
                    <div>
                        <WhatsApp />
                    </div><div>
                        <Twitter />
                    </div>
                </div>

            </div>
        </div>
        <div className={styles.fillet}>
        <span>Copyright 2021 &#169; Uze Medusa | All Rights Reserved </span>

        </div>
        </>
    )
}