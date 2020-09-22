import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GOOGLE_TRANSLATE_KEY = process.env.REACT_APP_GOOGLE_TRANSLATOR

export default function Convert( { language, text } ) {

    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState('');


    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);


    useEffect(() => {

        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', 
            {}, 
            {
            params: {
                q: debouncedText,
                target: language.value,
                key: GOOGLE_TRANSLATE_KEY
            }
        }
        );

        setTranslated(data.data.translations[0].translatedText);

        };

        doTranslation(); 

    }, [language, debouncedText]);


    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}