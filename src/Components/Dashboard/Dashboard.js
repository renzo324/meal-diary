import React, { Component } from 'react';
import Notifications from './Notification';
import MealList from '../Meals/MealList';
import { connect } from 'react-redux';


class Dashboard extends Component{
    render(){
        // console.log(this.props);
        const { entries } = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <MealList entries={entries} />
                    </div>    
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>    
                </div>    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        entries: state.entry.entries
    }
}
export default connect(mapStateToProps)(Dashboard);