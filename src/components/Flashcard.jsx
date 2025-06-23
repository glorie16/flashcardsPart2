import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ word, translation, flipped, onClick}) => {
        return (
            <div className={`flashcard-container ${flipped ? 'flipped' : ''}`} onClick={onClick}>

                <div className="flashcard-inner">
                    <div className="flashcard-front">
                        <h2>{word}</h2>
                    </div>
                    <div className="flashcard-back">
                        <h2 className='back-text'>{translation}</h2>
                    </div>
                </div>
            </div>
        )
    }
export default Flashcard;