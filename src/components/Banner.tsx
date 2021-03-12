import styles from '../styles/components/Banner.module.css';
export function Banner() {
    return (
        <>
        <div className={styles.container}>
            <div>
                <h1>Dia <br/> Internacional <br/> das Mulheres</h1>
                <h2>Descontos de até 50% em uma variedade de peças</h2>
                <button type="button">Compre agora</button>
            </div>
            <div>
                <img src="/banner.png" alt="banner" />
            </div>
        </div>
        </>
    )
}