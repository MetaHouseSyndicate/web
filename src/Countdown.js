import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

var moment = require('moment-timezone');

const Countdown = ({ endDate, fontFamily, fontSize, fontWeight, marginBottom }) => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {

        interval = setInterval(() => {
            
            if (endDate.diff(moment()) < 0) {
                clearInterval(interval.current);

            } else {
                const days = endDate.diff(moment(), 'days');
                const hours = endDate.diff(moment(), 'hours') % 24;
                const minutes = endDate.diff(moment(), 'minutes') % 60;
                const seconds = endDate.diff(moment(), 'seconds') % 60;

                setTimerDays( toString(days) );
                setTimerHours( toString(hours) );
                setTimerMinutes( toString(minutes) );
                setTimerSeconds( toString(seconds) );

            }
    
            
        }, 1000);
        
    }

    useEffect(() => {
        startTimer();
        const current = interval.current;
        return () => {
            clearInterval(current);
        }
    })

    return (
        <Box
            display='flex'
            justifyContent='center'
            marginBottom={marginBottom} 
            
            fontFamily={fontFamily} 
            fontWeight={fontWeight} 
            fontSize={fontSize} 
            // backgroundColor='gray'
        >
            {timerDays} : {timerHours} : {timerMinutes} : {timerSeconds}
        </Box>
        
    );
}

Countdown.defaultProps = {
    endDate: moment().tz('America/Toronto'),
}

function toString(val) {
    if (val < 10) return '0' + String(val);
    else return String(val);
}
 
export default Countdown;