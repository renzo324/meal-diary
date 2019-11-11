import React, { Component } from 'react';

class Entry extends Component{
    constructor(props){
        super(props);
        this.entryContent = props.entryContent;
        this.entryId = props.entryId;
        this.handleRemoveEntry = this.handleRemoveEntry.bind(this);
    }
    handleRemoveEntry(id){
        this.props.removeEntry(id);
    }
    render(){
        return(
            <div className="entry fade-in">
                <span className="closebtn" onClick={() => this.handleRemoveEntry(this.entryId)}>
                    &times;   
                </span>
                <p className="entryContent">{ this.entryContent }</p>
            </div>
           
        )
    }
}

export default Entry;