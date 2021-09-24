import React, {useState} from "react";

const Calculator = props => {
    const [entry, setEntry] = useState("0");
    const [myResult, setMyResult] = useState(0);
    const [clickedEquals, setClickedEquals] = useState(false);

    const onClickHandler = e => {
        // reset everything if AC was clicked
        if(e.target.value ==="AC"){
            setEntry("0");
            setMyResult(0);
            setClickedEquals(false);
        }
        // do calculation if "=" was clicked
        else if(e.target.value==="="){
            console.log("clicked equals!")
            let res = eval(entry);
            setMyResult(res);
            setEntry(res);
            setClickedEquals(true);
        }
        // add to the entry string if a number or operator was clicked
        else{
            // if user clicked a number or operator immediately after obtaining result
            if(clickedEquals === true){
                // if user clicked an operator immediately after, entry value will be reset to be the result concatenated with the operator
                if(isNaN(e.target.value)){
                    setEntry(myResult+e.target.value)
                }
                // if user clicked a number immediately after, new entry value will be reset to be the number clicked
                else{
                    setEntry(e.target.value);
                }
                // resetting clickedEquals as false
                setClickedEquals(false);
            }
            // if user clicked a number or operator after reset or just started the calculator
            else{
                if(entry==="0"){
                setEntry(e.target.value);
                }
                else{
                    setEntry(entry+e.target.value);
                    console.log("here entry till now:"+(entry+e.target.value))
                }
            }
        }
    }
    return(
        <div className = "calbox">
            <div className="result">
                <small className = " pe-3">({entry})</small>
                <p className = "res">{myResult}</p>
            </div>
            
            <table>
                <tbody>
                    <tr>
                        <td><button onClick = {onClickHandler} className = "top" value = "AC">AC</button></td>
                        <td><button onClick = {onClickHandler}  className = "top" value = "+-">+/-</button></td>
                        <td><button onClick = {onClickHandler}  className = "top" value = "%">%</button></td>
                        <td><button onClick = {onClickHandler}  className = "side" value = "/">&divide;</button></td>
                    </tr>
                    <tr>
                        <td><button onClick = {onClickHandler} value = "7">7</button></td>
                        <td><button onClick = {onClickHandler} value = "8">8</button></td>
                        <td><button onClick = {onClickHandler} value = "9">9</button></td>
                        <td><button onClick = {onClickHandler} className = "side"  value = "*">&times;</button></td>
                    </tr>
                    <tr>
                        <td><button onClick = {onClickHandler} value = "4">4</button></td>
                        <td><button onClick = {onClickHandler} value = "5">5</button></td>
                        <td><button onClick = {onClickHandler} value = "6">6</button></td>
                        <td><button onClick = {onClickHandler} className = "side" value = "-">-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick = {onClickHandler} value = "1">1</button></td>
                        <td><button onClick = {onClickHandler} value = "2">2</button></td>
                        <td><button onClick = {onClickHandler} value = "3">3</button></td>
                        <td><button onClick = {onClickHandler} className = "side" value = "+">+</button></td>
                    </tr>
                    <tr>
                        <td colSpan = "2" className ="zer"><button onClick = {onClickHandler} className = "zero"  value = "0">0</button></td>
                        <td><button onClick = {onClickHandler} value = ".">.</button></td>
                        <td><button onClick = {onClickHandler} className = "side eq" value = "=">=</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Calculator;