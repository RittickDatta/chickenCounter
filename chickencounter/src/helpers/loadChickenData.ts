import { INITIAL_VALUE } from "../common/Constants";
import { ChickenCounter } from "../types/ChickenCounter"

export const loadChickenData = () => {
    let chickenData:ChickenCounter = INITIAL_VALUE;
    const data = localStorage.getItem('chickenData');
    if(data) {
        return JSON.parse(data);
    } else {
        localStorage.setItem('chickenData', JSON.stringify(chickenData));
        return chickenData;
    }
}