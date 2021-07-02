import React, { Component } from 'react';
import emailjs from 'emailjs-com';


class LecturerPage extends Component {
  constructor(props) {
    super(props);
    // this.handleYesClick = this.handleYesClick.bind(this);


    this.state = { feedback: 'Hey Mark I have uhhhhh Covid, I wont be attending your lecture today.', name: 'Name', email: 'mset995@aucklanduni.ac.nz' };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getCurrentDate(separator='/'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    // return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
    }




    handleSubmit (event) {
      const templateId = 'template_id';
    
      this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
      }
    
      sendFeedback (templateId, variables) {
      window.emailjs.send(
        'gmail', templateId,
        variables
        ).then(res => {
          console.log('Email successfully sent!')
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }


    render(){
      return(
        <div>
          <h1>Hello Matthew you have a lecture at 1pm on the {this.getCurrentDate()}</h1>
          <h1>with Mark Wilson</h1>

          <button onClick = {this.handleSubmit()}>Yes</button>
          <button>No</button>
        </div>
      )
    }


    


  }
export default LecturerPage;