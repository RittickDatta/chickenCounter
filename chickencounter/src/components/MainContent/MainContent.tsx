import styles from './MainContent.module.css'
import React from 'react'
import Button from '../../common/UI/Button/Button'
import chicken from '../../assets/img/logo.png';

function MainContent(props:any) {
    const {
        chickenCount,
        updateChickenCount
    } = props;

    const addChicken = () => {

    }

    const removeChicken = () => {

    }

    const getChickens = () => {
        let chickens = [];
        for(let i = 0; i < chickenCount; i++){
            chickens.push(<img src={chicken} width="50px" />)
        }
        return chickens;
    }

    return (
        <div className={styles.chickenWrapper}>
            <div>
                <Button text='-' customStyle={styles.extraPadding}/>
            </div>
            <div>
                {
                    getChickens()
                }
            </div>
            <div>
                <Button text='+' customStyle={styles.extraPadding}/>
            </div>
            {/* <Button/> */}
        </div>
    )
}

export default MainContent
