import React from 'react';
import cardStyle from './MiniCard.module.css';
import classnames from "classname";
import CountUp from 'react-countup';

function MiniCard({ statusType, count }) {
    return (
        <div className={classnames(cardStyle.tiles, cardStyle[statusType])}>
            <h6 className={cardStyle.type}>{statusType}</h6>
            <CountUp
                start={0}
                end={count}
                separator=','
                duration={2}
            />
        </div>
    )
}

export default MiniCard;