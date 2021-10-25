import styles from './ChickenCounter.module.css';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MainContent from '../../components/MainContent/MainContent';
import PriceUpdate from '../../components/PriceUpdate/PriceUpdate';
import WorkRecord from '../../components/WorkRecord/WorkRecord';
import Dialog from '../../common/Dialog/Dialog';
import { loadChickenData } from '../../helpers/loadChickenData';
import { ChickenCounter, Count } from '../../types/ChickenCounter';

function ChickenCounterContainer() {
  const chickenData: ChickenCounter = loadChickenData();
  const { countData, chickenPrice } = chickenData;
  console.log(':::chickenPrice:::', chickenPrice);
  const {
    todaysCount: countToday,
    thisWeeksCount,
    thisMonthsCount,
    thisYearsCount,
  } = countData;
  const [todaysCount, setTodaysCount] = useState(countToday);
  const [todaysRevenue, settodaysRevenue] = useState(
    todaysCount * chickenPrice
  );

  const [weeksCount, setWeeksCount] = useState(thisWeeksCount);
  const [weeksRevenue, setWeeksRevenue] = useState(weeksCount * chickenPrice);

  const [monthsCount, setMonthsCount] = useState(thisMonthsCount);
  const [monthsRevenue, setMonthsRevenue] = useState(
    monthsCount * chickenPrice
  );

  const [yearsCount, setYearsCount] = useState(thisYearsCount);
  const [yearsRevenue, setyearsRevenue] = useState(yearsCount * chickenPrice);

  const priceUpdateHandler = () => {};

  const workRecordHandler = () => {};

  const updateChickenCount = (chickenCount: number) => {
    if (chickenCount < 0) return;
    console.log(':::updatedCountData:::', chickenCount);
    setTodaysCount(chickenCount);
    settodaysRevenue((todaysCount + 1) * chickenPrice);
    console.log(':::todaysRevenue:::', todaysRevenue);
  };

  return (
    <div>
      <Navbar
        priceUpdateHandler={priceUpdateHandler}
        workRecordHandler={workRecordHandler}
        chickenPrice={chickenPrice}
        today={todaysCount}
        week={weeksCount}
        month={monthsCount}
        yearsCount={yearsCount}
        todaysRevenue={todaysRevenue}
        weeksRevenue={weeksRevenue}
        monthsRevenue={monthsRevenue}
        yearsRevenue={yearsRevenue}
      />
      <MainContent
        chickenCount={todaysCount}
        updateChickenCount={updateChickenCount}
      />
      {
        <Dialog>
          <PriceUpdate />
        </Dialog>
      }
      {
        <Dialog>
          <WorkRecord />
        </Dialog>
      }
    </div>
  );
}

export default ChickenCounterContainer;
