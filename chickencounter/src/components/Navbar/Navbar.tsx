import styles from './Navbar.module.css';
import React from 'react';
import Button from '../../common/UI/Button/Button';
import logo from '../../assets/img/logo.png';

function Navbar(props: any) {
  const {
    priceUpdateHandler,
    workRecordHandler,
    chickenPrice,
    today,
    week,
    month,
    yearsCount,
    todaysRevenue,
    weeksRevenue,
    monthsRevenue,
    yearsRevenue
  } = props;

  const getUserMsg = (count:number) => {
    switch(count) {
      case 1: return `Great Bolin! You got 1 Mangso. Keep going!`; 
      case 2: return `Bolin, you are gaining momentum. Woooo!`;
      case 3: return `Bolin, you are on fire!`;
      case 4 : 
      case 5 : 
      case 6 : 
      case 7 : return `Bolin your contribution is lionshare!`;
      case 8 : 
      case 9 : 
      case 10 : return `Bolin, do you need to rest? Lots of Mangso today!`
      case 11 :  
      default: return `Bolin, isn\'t today an exceptional day?`
    }
  }

  const userMsg = today > 0 ? (getUserMsg(today)) : (`Hi Bolin, You have no mangso today.`)
 
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <div>
            <img src={logo} alt='Mangso' width='100' />
            <h1>{userMsg}</h1>
          </div>
        </li>
        <li className={styles.infoBarWrapper}>
          <div className={styles.infoBar}>
            <div className={styles.infobar_infoblock}>
              <div className={styles.infobar_infoTitle}>Today</div>
              <div className={styles.infobar_infoVal}>{today}</div>
              <div className={styles.infobar_money}>&#x20B9;{todaysRevenue}</div>
            </div>
            <div className={styles.infobar_infoblock}>
              <div className={styles.infobar_infoTitle}>Week</div>
              <div className={styles.infobar_infoVal}>{week}</div>
              <div className={styles.infobar_money}>&#x20B9;{weeksRevenue}</div>
            </div>
            <div className={styles.infobar_infoblock}>
              <div className={styles.infobar_infoTitle}>Month</div>
              <div className={styles.infobar_infoVal}>{month}</div>
              <div className={styles.infobar_money}>&#x20B9;{monthsRevenue}</div>
            </div>
            <div className={styles.infobar_infoblock}>
              <div className={styles.infobar_infoTitle}>Year</div>
              <div className={styles.infobar_infoVal}>{yearsCount}</div>
              <div className={styles.infobar_money}>&#x20B9;{yearsRevenue}</div>
            </div>
          </div>
        </li>
        <li className={styles.actionBarWrapper}>
          <div>
            <ul className={styles.actionBar}>
              <li>
                <Button text='Update Price' clickHandler={priceUpdateHandler} />
              </li>
              <li>
                <Button text='Work Record' clickHandler={workRecordHandler} />
              </li>
            </ul>
          </div>
        </li>
      </ul>
      {/* <Button /> */}
    </nav>
  );
}

export default Navbar;
