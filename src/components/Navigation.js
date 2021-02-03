import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
        <div>
            <h1> <Link to='/'> HOME </Link> </h1>
            <h2>Item Exploration</h2>
            <ul>
                <li> <Link to='/artifacts'> Artifacts </Link> </li>
                <li> <Link to='/base-armors'> Base Armors </Link> </li>
                <li> <Link to='/base-weapons'> Base Weapons </Link> </li>
                <li> <Link to='/cursed-items'> Cursed Items </Link> </li>
                <li> <Link to='/magical-tattoos'> Magical Tattoos </Link> </li>
                <li> <Link to='/magic-armors'> Magic Armors </Link> </li>
                <li> <Link to='/magic-weapons'> Magic Weapons </Link> </li>
                <li> <Link to='/potions'> Potions </Link> </li>
                <li> <Link to='/rings'> Rings </Link> </li>
                <li> <Link to='/rods'> Rods </Link> </li>
                <li> <Link to='/shadow-piercings'> Shadow Piercings </Link> </li>
                <li> <Link to='/staves'> Staves </Link> </li>
                <li> <Link to='/wondrous-items'> Wondrous Items </Link> </li>

            </ul>
            <h2>Tools</h2>
            <ul>
                <li> <Link to='/weapon-builder'> Weapon Builder </Link> </li>
                <li> <Link to='/potions-calculator'> Potions Calculator </Link> </li>
                <li> <Link to='/scroll-cost-calculator'> Scroll Calculator </Link> </li>
            </ul>
        </div>
    );
}

export default Navigation;