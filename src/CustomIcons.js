import { ReactComponent as OpenSeaSVG } from './icons/OpenSea-Transparent-White.svg';
import { ReactComponent as NFTCalendarSVG } from './icons/nftcalendar-logo.svg';

const OpenSea = (props) => {
    return (
        <div style={{
            margin: 0,
            padding: 0
        }}>
            <OpenSeaSVG {...props} />
        </div>
    )
};

const NFTCalendar = (props) => {
    return (
        <div style={{
            margin: 0,
            padding: 0
        }}>
            <NFTCalendarSVG {...props} />
        </div>
    )
};

export {
    OpenSea,
    NFTCalendar
};