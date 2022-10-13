import React, { Component } from 'react'
import { add_Reminder , remove_Reminder, clear_Reminder } from '../actions'
import { connect } from 'react-redux'
import  moment  from 'moment'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import logo from './images.png'

class App extends Component {
    state ={
        text: '',
        date : new Date()
    }

    render_Reminders = () => {
        const {reminders} = this.props;
       return (
        <div>
        <ul className='list-group'>
            {
            reminders.map( reminder => {
            return (
                <li key={reminder.id} className='list-group-item'>
                    <div className='text'>{reminder.text}</div>
                    {/* <div>{reminder.date}</div> */}
                    <div className='date m-2'>{moment(new Date(reminder.date)).fromNow()}</div>
                    <div className='close-icon text-danger btn fs-5' onClick={() => this.props.remove_Reminder(reminder.id)}>×</div>
                </li>
            )
        })}
        </ul>
        </div>
       )
    }
   
    render() { 
        return (
          <div className="App">
            <img src={logo} alt="" srcSet="" />
            <div className="reminder-title">
              <h2>What Should You Do ? </h2>
            </div>
            <input
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
              type="text"
              className="form-control"
              placeholder="Enter What U Think ... ?"
            />            
            <DatePicker
              className="form-control"
              value={this.state.date}
              selected={this.state.date}
              onChange={(date) => {this.setState({date})}}
              showTimeSelect
              timeFormat='HH:mm'
              dateFormat='MMMM d, yyyy h:mm aa'
              timeCaption="Time"
            />
            <button
              onClick={() => {
                this.props.add_Reminder(this.state.text, this.state.date);
                this.setState({ text: "", date : new Date()});
              }}
              className="btn btn-primary btn-block form-control m-1"
            >
              Add Reminder
            </button>
            <div> {this.render_Reminders()} </div>
            <button
              onClick={() => this.props.clear_Reminder()}
              className="btn btn-danger btn-block form-control m-1"
            >
              Clear Reminders
            </button>
          </div>
        );
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         add_reminder : () => dispatch (add_Reminder())
//     }
// }

// function mapStateToProps(state){

//     return {
//         reminders: state
//     }
// }

export default connect((state) => {return {reminders: state}} ,{add_Reminder,remove_Reminder,clear_Reminder})(App);