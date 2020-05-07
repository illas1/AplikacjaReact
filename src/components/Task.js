import React from 'react';

const Task = (props) => { //Komponent funkcyjny
    
    const style = {
        border: '2px solid white',
        padding: '2px 10px',
        borderRadius:'10px',
        backgroundColor:'rgba(0,0,0,.3)',
        color:'white'
    }
    
    
    const {text, date, id, active,important,finishDate} = props.task;
    if(active){

    return ( 
        <div>
            <p>
                <strong style={important ? style : null}>{text}</strong> <br/>
                do <span>{date} </span>
            
            <button 
                onClick={() => props.change(id)}>
                ✓</button>
            <button
                onClick={() => props.delete(id)}>
                X</button>
            </p>
        </div>
     );} else{

        const finish=new Date(finishDate).toLocaleDateString()

         return(<div><p>
                <strong>{text}</strong> <br/>
                <em>wykonane <span>{finish}</span></em>
            
            <button
                onClick={() => props.delete(id)}>
                X</button>
            </p></div>)
     }
}
 
export default Task;