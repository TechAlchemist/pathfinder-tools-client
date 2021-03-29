import React from 'react';



function BaseWeaponList({ allWeapons }) {

    console.log(allWeapons)

    return (
        <div>
            { allWeapons.weapons && allWeapons.weapons.map( (weapon, idx) => 
                
                    <div>
                        <h1> {weapon.weapon_name} </h1>
                        <p> {weapon.cost}</p>
                        <p> Damage Small: {weapon.small}</p>
                        <p> Damage Medium: {weapon.medium}</p>
                        <p> Critical Multiplier: {weapon.crit_multiplier}</p>
                        <p> </p>

                    </div>
                
            )}
        </div>
    );
}

export default BaseWeaponList;