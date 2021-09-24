import React, {useState} from "react";


const Calculator = props => {
    const [entry, setEntry] = useState("0");
    const [myResult, setMyResult] = useState(0);

    const onClickHandler = e => {
        if(e.target.value ==="AC"){
            // reset everything
            setEntry("0");
            setMyResult(0);
        }
        else if(e.target.value==="="){
            console.log("clicked equals!")
            let res = eval(entry);
            setMyResult(res);
        }
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