import styles from './ChickenCounter.module.css';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MainContent from '../../components/MainContent/MainContent';
import PriceUpdate from '../../components/PriceUpdate/PriceUpdate';
import WorkRecord from '../../components/WorkRecord/WorkRecord';
import Dialog from '../../common/Dialog/Dialog';

function ChickenCounterContainer() {

  const priceUpdateHandler = () => {

  }

  const workRecordHandler = () => {

  }

  const updateChickenCount = () => {

  }

  return (
    <div>
      <Navbar 
      priceUpdateHandler={priceUpdateHandler}
      workRecordHandler={workRecordHandler}
      />
      <MainContent 
        chickenCount={3}
        // updateChickenCount={}
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
