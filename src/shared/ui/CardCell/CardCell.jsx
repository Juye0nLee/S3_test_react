import React from 'react';
import './CardCell.css'

const CardCell = ({ content }) => {
    return (
        <div className="cc_card">
            hello
            <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <g id="_1421394342400">
                    <img src={content} />
                </g>
            </g>
        </div>
    );
};

export default CardCell;