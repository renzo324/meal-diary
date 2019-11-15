import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMeal } from '../../Store/Actions/entryActions';
class AddMeal extends Component {
    state = { 
        title : '',
        content : ''
    }
    handleChange = (e) =>{
    this.setState({
        [e.target.id]: e.target.value
    })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addMeal(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit ={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3"> Add Entry</h5>
                    <div className="input-field">
                        <label htmlFor="meal">Meal</label>
                        <input type="text" id="meal" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="details"> Details</label>
                        <textarea  id="details"  className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Add</button>    
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addEntry: (entry)=>dispatch(addMeal(entry))
    }
}
export default connect(null, mapDispatchToProps)(AddMeal);