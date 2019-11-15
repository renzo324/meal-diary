import React from 'react';
import MealSummary from './MealSummary';


const MealList = ({entries}) => {
    return(
        <div className="meal-list section">
            { entries && entries.map(entry =>{
                return(
                    <MealSummary entry={entry} key={entry.id} /> 
                )
            })}
        </div>
    )
}

export default MealList;