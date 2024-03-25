import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";
export default function TimerChallenge({title,targetTime}) {
    const[timeExpired,setTimeExpired] =useState(false);
    const[timeStarted,setTimeStarted] =useState(false);
    const timer=useRef();
    const dialog=useRef();

    function handleStart(){
        timer.current=setTimeout(() => {
            setTimeExpired(true);
            dialog.current.showModal();
            setTimeStarted(false);
        }, targetTime*1000);

        setTimeStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current)
        setTimeStarted(false);
    }

    return(
        <>
        <ResultModal ref={dialog} targetTime={targetTime}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime>1?"s":""}
            </p>
            <p>
                <button onClick={timeStarted?handleStop:handleStart}>
                    {timeStarted?"Stop Timer":"Start Challenge"}
                </button>
            </p>
            <p className={timeStarted?"active":undefined}>
                {timeStarted?"Time is Running":"Timer Inactive" }
            </p>
        </section>
        </>
        
    )
}