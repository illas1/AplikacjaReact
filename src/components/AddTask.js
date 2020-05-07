import React, {Component} from 'react';

class AddTask extends Component {

    minDate= new Date().toISOString().slice(0,10);
    state = { 
        text: '',
        checked: false,
        date: this.minDate
     }

     handleText = (e) =>{
         this.setState({
             text: e.target.value
         })
     }

     handleDate=(e) => {
        this.setState({
            date: e.target.value
        })
     }

     handleCheckBox=(e) =>{
         this.setState({
             checked:e.target.checked
         })
     }

     handleClick = () =>{
        console.log ("DODAJ")
     }

    render() {
        let maxDate = this.minDate.slice(0,4)*1+1;
        maxDate=maxDate+"-12-31";

        return ( 
            <div className="form">
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckBox}/>
                <label htmlFor="important">PREMIUM</label>
                <input type="text" placeholder="dodaj zadanie" value ={this.state.text} onChange={this.handleText}/><br/>
                <label htmlFor="date">DATA WYKONANIA:</label>
                <input type="date" value={this.state.date}
                min={this.minDate} max={maxDate} onChange={this.handleDate}/><br/>
                <button class="ready" onClick={this.handleClick}>Dodaj</button>
            <hr/>
            </div>
         );
    }
}
 
export default AddTask;