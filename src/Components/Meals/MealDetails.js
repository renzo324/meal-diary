import React from 'react'

const MealDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section meal-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> Entry Title  - {id} </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, molestias suscipit, nihil numquam voluptas veritatis officia labore facere hic, doloremque explicabo ullam ratione saepe reprehenderit ex aliquam exercitationem repellendus quae.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By: Author</div>
                    <div>Date and time</div>
                </div>
            </div>
        </div>
    )
}

export default MealDetails
