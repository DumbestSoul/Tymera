import React from "react";
import ReactDOM  from "react-dom/client";


function App(){
    return(
        <div className="app">
            <div className="container">
                <div className="timer">
                    <div className="hours">01</div> : 
                    <div className="minutes">30</div> :
                    <div className="seconds">50</div>
                </div>
                <div className="buttons">
                    <button className="start-stop">
                        Start
                    </button>
                    <button className="reset">Reset</button>
                </div>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);