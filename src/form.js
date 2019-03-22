import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form ml120 mt20">
      
        Ask a Question
        <form className="mt20">
        <textarea className="bxrd20 w90 h90">
             Please enter your questions
</textarea>
        <br/>
        <br/>
        <input type="submit" value="Submit" className="or bxrd20 fr mr90"/>
        </form>
      </div>
    );
  }
}

export default Form;
