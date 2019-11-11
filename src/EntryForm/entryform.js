import React, { Component } from 'react';

class EntryForm extends Component{
    constructor(props){
        super(props);
        
        this.state={
            newEntryContent:'',
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.newEntry = this.newEntry.bind(this);
    }
    //Set newEntryContent value = input box value
    handleUserInput(e){
        this.setState({
            newEntryContent: e.target.value,
        })
    }
    newEntry(){
        //Call addEntry method to update entries array to input value
        this.props.addEntry(this.state.newEntryContent);
        // reset newNoteContent to empty string
        this.setState({
            newEntryContent:'',
        })
    }
    render(){
        return(
            <div className="">
                <input className="entryInput"
                placeholder= "What did you eat today?"
                value={this.state.newEntryContent}
                onChange={this.handleUserInput}/>
                <button className="entryButton"
                onclick={this.newEntry}>Add Entry</button>
            </div>
        )
    }
}
export default EntryForm;