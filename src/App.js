import React, { Component } from 'react';
import Entry from './Entry/entry.js';
import EntryForm from './EntryForm/entryform.js';
import { FIREBASE_CONFIG } from './Config/config.js';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.addEntry = this.addEntry.bind(this);
    if (!firebase.apps.length) {
      try {
          firebase.initializeApp(FIREBASE_CONFIG)
      } catch (err) {
        this.database = this.app.database().ref().child('entries');
      }
  }
    
    this.state={
      entries:[],
    }
    
  }
  componentWillMount(){
    
    const previousEntries = this.state.entry;
    
    //firebase dataSnapshot
    this.database.on('child_added', snap =>{
      previousEntries.push({
        id: snap.key,
        entryContent: snap.val().entryContent,
      })
    })
      this.setState({
        entries: previousEntries
      })
    
  }
  addEntry(entry){
   this.database.push().set({ entryContent: entry});
  }
  componentDidMount(){
   
  }
  render() {
    return (
      <div className="container-fluid diaryWrapper">
        <div className="diaryHeader">
          <h1 className="header">React+Firebase Meal Diary</h1>  
        </div>
       <div className="diaryBody">
        {
          this.state.entries.map((entries)=>{
            return(
              <Entry entryContent={entries.entryContent} entryId={entries.id} key={entries.id} />
            )
          })
        }
       </div>
       <div className="addEntry">
         <EntryForm addEntry={this.addEntry}/>
       </div>
      </div>
    );
  }
}

export default App;
