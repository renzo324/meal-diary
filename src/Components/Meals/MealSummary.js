import React from 'react';


const MealSummary = ({entry}) => {
    
    return(
    <div className="meal-list section">
        <div className="card z-depth-0 Meal-Summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{entry.title}</span>
                <span className="card-content">{entry.content}</span>
                <p>Posted by User</p>
                <p className="grey-text"> Date and time</p>
            </div>
        </div>
    </div>
    )
}

export default MealSummary;