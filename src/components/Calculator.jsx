import React, {useState} from "react";


const Calculator = props => {
    const [myResult, setMyResult] = useState(0);
    const [entryTotal, setEntryTotal] = useState(0);
    const [entryNow, setEntryNow] = useState("0");
    const [operating, setOperating] = useState(false);
    const [calculated, setCalculated] = useState(false);
    const [entries, setEntries] = useState ("0");
    const [number, setNumber] = useState(0);

    const onClickHandler = (fig) => {
        // e.preventDefault();
        console.log(isNaN(fig));
        if(fig =="ac"){
            setCalculated(false);
            setEntries("0");
            setEntryNow("0");
            setMyResult(0);
            setEntryTotal("0");
            setOperating(false);
            setNumber(0);
        }
        else if(!(isNaN(fig))){
            if(entryNow!="0"){
                setEntryNow(entryNow+fig);
                setEntries(entryNow+fig);
            }
            else{
                setEntryNow(fig);
                setEntries(fig);
            }
        }
        else if(isNaN && !("ac")){

        }
        else if(isNaN && !(("plusminus")|| ("percent"))){

        }
        console.log(entryNow);
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log("submitted");
    }

    return(
        <div className = "calbox">
            <div className="result">
                <small className = "text-secondary pe-3">({entries})</small>
                <p className = "res">{entryNow}</p>
            </div>
            <form onSubmit = {onSubmitHandler}>
                <table>
                    <tbody>
                        <tr>
                            <td onClick = {e=> onClickHandler("ac")} className = "top">AC</td>
                            <td onClick =  {e=>onClickHandler("plusminus")}  className = "top">+/-</td>
                            <td onClick = {e=> onClickHandler("percent")}  className = "top">%</td>
                            <td onClick = {e=> onClickHandler("divide")}  className = "side">&divide;</td>
                        </tr>
                        <tr>
                            <td onClick = {e=> onClickHandler("7")}>7</td>
                            <td onClick = {e=> onClickHandler("8")}>8</td>
                            <td onClick = {e=> onClickHandler("9")}>9</td>
                            <td onClick =  {e=>onClickHandler("multiply")}  className = "side">&times;</td>
                        </tr>
                        <tr>
                            <td onClick = {e=> onClickHandler("4")}>4</td>
                            <td onClick = {e=> onClickHandler("5")}>5</td>
                            <td onClick = {e=> onClickHandler("6")}>6</td>
                            <td onClick = {e=> onClickHandler("minus")} className = "side">-</td>
                        </tr>
                        <tr>
                            <td onClick = {e=> onClickHandler("1")}>1</td>
                            <td onClick = {e=> onClickHandler("2")}>2</td>
                            <td onClick = {e=> onClickHandler("3")}>3</td>
                            <td onClick = {e=> onClickHandler("plus")} className = "side">+</td>
                        </tr>
                        <tr>
                            <td onClick = {e=> onClickHandler("0")} colspan="2">0</td>
                            <td onClick = {e=> onClickHandler("dot")}>.</td>
                            <td className = "side">
                                <button className = "pr-4 pl-4 side equal">=</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </form>
            </div>

    );
}

export default Calculator;