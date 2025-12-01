
import { useState } from 'react';

export default function InteractiveCounter({ details, index }) {
    const [open, setOpen] = useState(false);
    return (
        <dl className="list-item" key={index}>
            <dt className="list-icon">{details.icon}</dt>
            <dd className="list-text">{details.title}</dd>            
            {open && <ul>{details.description.map((item, index) => <li key={index}>{item}</li>)}</ul>}
            <button className="more-button" onClick={() => setOpen(!open)}>{open ? 'less ▵' : 'more ▾'}</button>
        </dl>
    );
}
