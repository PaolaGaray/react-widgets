import React from 'react';
import Link from './Link';

export default function Header() {
    return (
        <div className="ui secondary pointing menu">
            <Link href='/' className="item">
                Image Search
            </Link>
            <Link href='/accordion' className="item">
                Jokes Accordion
            </Link>
            <Link href='/search' className="item">
                Wikipedia Search
            </Link>
            <Link href='/dropdown' className="item">
                Dropdown
            </Link>
            <Link href='/translate' className="item">
                Translate
            </Link>
        </div>
    )
}