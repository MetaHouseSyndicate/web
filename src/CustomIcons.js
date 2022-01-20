import { ReactComponent as OpenSeaSVG } from './icons/OpenSea-Transparent-White.svg';

const OpenSea = (props) => {
    return (
        <div style={{
            margin: 0,
            padding: 0
        }}>
            <OpenSeaSVG
                className={props.className}
                width={props.size}
                height={props.size}
            />
        </div>
    )
};

export {
    OpenSea,
};