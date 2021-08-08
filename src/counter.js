import React from "react";

const Counter = ({counter, inc, dec, rnd}) => {

    return (
        <div className="jumbotron">
            <h2 >{counter}</h2>
            <button onClick={dec}  className="btn btn-primary bnt-lg">DEC</button>
            <button onClick={inc} className="btn btn-primary bnt-lg">INC</button>
            <button onClick={rnd} className="btn btn-primary bnt-lg">RND</button>
        </div>
    )
}
export default Counter
