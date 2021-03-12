import styles from '../styles/components/Catalog.module.css'
export function Catalog() {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <h2>Pro dia a dia</h2>
                        <img src="/descontraída.jpg" alt="blusa" />
                    </div>

                    <div className={styles.arroundItens}>
                    <h2>Pro dia a dia</h2>

                        <div className={styles.tickets}>
                            <button className={styles.activeTicket}>Blusas</button>
                            <button>Shorts</button>
                            <button>Calças</button>
                            <button>Sapatos</button>
                        </div>
                        <div className={styles.cardList}>
                            <div className={styles.card}>
                                <img src="/blusa1.webp" alt="blusa" />
                                
                                <div>
                                    <p>Blusa Gola Floral</p>
                                    <strong>R$: 24,99</strong>
                                    <span>ou 2x de 13,00</span>

                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src="/blusa2.webp" alt="blusa" />
                                <div>
                                    <p>Blusa gola amarrada lisa</p>
                                    <strong>R$: 24,99</strong>
                                    <span>ou 2x de 13,00</span>

                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src="/blusa3.webp" alt="blusa" />
                                <div>
                                    <p>Blusa lisa gola colorida</p>
                                    <strong>R$: 19,99</strong>
                                    <span>ou 2x de 10,00</span>
                                </div>

                            </div>
                            <div className={styles.card}>
                                <img src="/blusa4.webp" alt="blusa" />
                                <div>
                                    <p>Blusa Estampa floral</p>
                                    <strong>R$: 24,99</strong>
                                    <span>ou 2x de 13,00</span>

                                </div>

                            </div>
                            <div className={styles.card}>
                                <img src="/blusa5.jpg" alt="blusa" />
                                <div>
                                    <p>Blusa Jeans lisa</p>
                                    <strong>R$: 24,99</strong>
                                    <span>ou 2x de 13,00</span>
                                </div>

                            </div>
                            <div className={styles.card}>
                                <img src="/blusa6.jfif" alt="blusa" />
                                <div>
                                    <p>Blusa Teen preta lisa</p>
                                    <strong>R$: 29,99</strong>
                                    <span>ou 2x de R$ 15,00</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}