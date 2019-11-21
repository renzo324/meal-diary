import React from 'react'

export const EntryDetails = () => {
    return (
        <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Entry Title</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by: </div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
    )
}
export const EntrySummary = () => {
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">TITLE</span>
          <p>Posted by:</p>
          <p className="grey-text">Date, Time</p>
        </div>
      </div>
    )
  }