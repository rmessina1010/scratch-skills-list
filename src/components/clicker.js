import { useRef } from "react";
export const Clicker = function (props) {
    const clickHist = useRef(0);
    return (<div>
        <div>{clickHist.current}</div>
        <button onClick={() => { clickHist.current++; console.log(clickHist.current); }}>Click me</button>
    </div>);

}