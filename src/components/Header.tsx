import Menu from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import styles from '../styles/components/Header.module.css';
export function Header(){
    return(
        <>
        <div className={styles.container}>
            <div className={styles.body}>

            <div className={styles.menu}>
                <img src="logo.png" alt="uze medusa" />
                <button>Home</button>
                <button>Blog</button>
                <button>Quem somos</button>
                <button>Contato</button>
            </div>
            <div className={styles.icons}>
                <ShoppingBasketIcon   />
                <Menu   />
            </div>            
                
            </div>
        </div>
        </>
    )
}