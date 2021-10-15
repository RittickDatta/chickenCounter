import styles from './Navbar.module.css';
import React from 'react'
import Button from '../../common/UI/Button/Button';
import logo from "../../assets/img/logo.png";

function Navbar(props:any) {
    const {
        priceUpdateHandler,
        workRecordHandler
    } = props;
    return (
        <nav>
            <ul className={styles.navbar}>
                <li>
                    <div>
                        <img src={logo} alt="Mangso" width="100" />
                        <h1>"Hi Bolin! {`You have no mangso today.`}"</h1>
                    </div>
                </li>
                <li className={styles.infoBarWrapper}>
                    <div className={styles.infoBar}>
                        <div className={styles.infobar_infoblock}>
                            <div className={styles.infobar_infoTitle}>
                                Today
                            </div>
                            <div className={styles.infobar_infoVal}>
                                {0}
                            </div>
                        </div>
                        <div className={styles.infobar_infoblock}>
                            <div className={styles.infobar_infoTitle}>
                                Week
                            </div>
                            <div className={styles.infobar_infoVal}>
                                {0}
                            </div>
                        </div>
                        <div className={styles.infobar_infoblock}>
                            <div className={styles.infobar_infoTitle}>
                                Month
                            </div>
                            <div className={styles.infobar_infoVal}>
                                {0}
                            </div>
                        </div>
                        <div className={styles.infobar_infoblock}>
                            <div className={styles.infobar_infoTitle}>
                                Year
                            </div>
                            <div className={styles.infobar_infoVal}>
                                {0}
                            </div>
                        </div>
                    </div>
                </li>
                <li className={styles.actionBarWrapper}>
                    <div>
                        <ul className={styles.actionBar}>
                            <li>
                                <Button text='Update Price' clickHandler={priceUpdateHandler}/>
                            </li>
                            <li>
                                <Button text='Work Record' clickHandler={workRecordHandler}/>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            {/* <Button /> */}
        </nav>
    )
}

export default Navbar
