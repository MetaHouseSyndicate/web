import { Box } from "@mui/material";
import { useEffect, useState } from "react";

var moment = require('moment-timezone');

const Countdown = ({ endDate, fontFamily, fontSize, fontWeight, marginBottom }) => {

    const timerZero = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const [timer, setTimer] = useState(timerZero);

    useEffect(() => {

        const stopTimer = () => {
            clearInterval(interval);
        }

        const interval = setInterval(() => {
                
            if (endDate.diff(moment()) < 0) {
                stopTimer();

            } else {
                const daysLeft = endDate.diff(moment(), 'days');
                const hoursLeft = endDate.diff(moment(), 'hours') % 24;
                const minutesLeft = endDate.diff(moment(), 'minutes') % 60;
                const secondsLeft = endDate.diff(moment(), 'seconds') % 60;

                setTimer({ days: daysLeft, hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft });

            }

        }, 1000);
        
        return () => stopTimer();
    }, [endDate]);

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
            {stringify(timer.days)} : {stringify(timer.hours)} : {stringify(timer.minutes)} : {stringify(timer.seconds)}
        </Box>
        
    );
}

Countdown.defaultProps = {
    endDate: moment().tz('America/Toronto'),
}

function stringify(val) {
    if (val < 10) return '0' + String(val);
    else return String(val);
}
 
export default Countdown;