import { useState, useEffect } from 'react';
import BaseWeaponList from '../components/BaseWeaponList';
import { Dropdown, Container } from 'semantic-ui-react';

function WeaponsBuilderPage(props) {



    const [weaponState, setWeaponState] = useState({ weapons: null });
    const [customWeaponState, setCustomWeaponState] = useState({ 
        weaponName: null,
        cost: null,
        small: null,
        medium: null,
        critMultiplier: null,
        reach: null,
        weight: null,
        damageType: null,
        special: null,
        abilities: [],
        enhancementBonus: null,
        materials: null
        
     });
    const [dropdownState, setDropdownState] = useState({
        weaponGroup: null,
        weaponBonus: null
    });


    useEffect(() => {
        getBaseWeapons()
    }, [])

    function filterWeaponsIntoGroups(weapons) {

        let weaponsArray = {};
        weaponsArray.lightMeleeGroup = weapons.filter(weapon => weapon.weapon_type === 'light_melee');
        weaponsArray.simpleLightMelee = weapons.filter(weapon => weapon.weapon_type === 'simple_light_melee');
        weaponsArray.simpleOneHandedMelee = weapons.filter(weapon => weapon.weapon_type === 'simple_one_handed_melee');
        weaponsArray.simpleTwoHandedMelee = weapons.filter(weapon => weapon.weapon_type === 'simple_two_handed_melee');
        weaponsArray.simpleRanged = weapons.filter(weapon => weapon.weapon_type === 'simple_ranged');
        weaponsArray.martialLightMelee = weapons.filter(weapon => weapon.weapon_type === 'martial_light_melee');
        weaponsArray.martial_one_handed_melee = weapons.filter(weapon => weapon.weapon_type === 'martial_one_handed_melee');
        weaponsArray.martialTwoHandedMelee = weapons.filter(weapon => weapon.weapon_type === 'martial_two_handed_melee');
        weaponsArray.martialRanged = weapons.filter(weapon => weapon.weapon_type === 'martial_ranged');
        weaponsArray.exoticLightMelee = weapons.filter(weapon => weapon.weapon_type === 'exotic_light_melee');
        weaponsArray.exoticOneHandedMelee = weapons.filter(weapon => weapon.weapon_type === 'exotic_one_handed_melee');
        weaponsArray.exoticTwoHandedMelee = weapons.filter(weapon => weapon.weapon_type === 'exotic_two_handed_melee');
        weaponsArray.exoticRanged = weapons.filter(weapon => weapon.weapon_type === 'exotic_ranged');
        return weapons;
    }

    function getBaseWeapons() {
        const url = 'http://localhost:3001/api/weapons/all_weapons';
        fetch(url)
            .then(res => res.json())
            .then(weapons => setWeaponState( { weapons : filterWeaponsIntoGroups(weapons) } ))
            
    }

    const weaponGroups = [
        {
            key: 'light_melee',
            text: 'Light Melee',
            value: 'light_melee'
        },
        {
            key: 'simple_light_melee',
            text: 'Simple Light Melee',
            value: 'simple_light_melee'
        },
        {
            key: 'simple_one_handed_melee',
            text: 'Simple One Handed Melee',
            value: 'simple_one_handed_melee'
        },
        {
            key: 'simple_two_handed_melee',
            text: 'Simple Two Handed Melee',
            value: 'simple_two_handed_melee'
        },
        {
            key: 'martial_light_melee',
            text: 'Martial Light Melee',
            value: 'martial_light_melee'
        },
        {
            key: 'martial_one_handed_melee',
            text: 'Martial One Handed Melee',
            value: 'martial_one_handed_melee'
        },
        {
            key: 'martial_two_handed_melee',
            text: 'Martial Two Handed Melee',
            value: 'martial_two_handed_melee'
        },
        {
            key: 'martial_ranged',
            text: 'Martial Ranged',
            value: 'martial_ranged'
        },
        {
            key: 'exotic_light_melee',
            text: 'Exotic Light Melee',
            value: 'exotic_light_melee'
        },
        {
            key: 'exotic_one_handed_melee',
            text: 'Exotic One Handed Melee',
            value: 'exotic_one_handed_melee'
        },
        {
            key: 'exotic_two_handed_melee',
            text: 'Exotic Two Handed Melee',
            value: 'exotic_two_handed_melee'
        }

    ]
    

    function handleWeaponDropdownChange(event, data) {
        console.log(data.value)
        setDropdownState({weaponGroup: data.value});
    }

    function renderBaseWeaponDropdown() {
        if (weaponState.weapons) {
            // create array of weapons filtered from weapon group dropdown
            let dropdownArray = [];
            dropdownArray.push(weaponState.weapons.filter(weapon => weapon.weapon_type === dropdownState.weaponGroup));
            // format dropdown for semantic ui dropdown component
            let dropdownOptions = [];
            let i = 0;
            dropdownArray[0].forEach(weapon => {
                dropdownOptions.push({ key: i, text: weapon.weapon_name, value: weapon.weapon_name});
                i++
            })

            return (
                
                <Dropdown
                placeholder='Base Weapon'
                fluid
                selection
                options={dropdownOptions}
                id='baseWeapon'

                />
              
            )
        }
        else {
            <small> weapon state failed to initialize </small>
        }
    }

    return (
        <Container>
            <div>
                <h1> Current Weapon Stats</h1>
                <p> { customWeaponState && customWeaponState.weaponName } </p>
            </div>
            <br/>
            <hr/>
            <p> Weapon Group </p>
            <Dropdown
                placeholder='Weapon Group'
                fluid
                selection
                options={weaponGroups}
                onChange={handleWeaponDropdownChange}
            />
            <br />
            <p> Base Weapon </p>
            { renderBaseWeaponDropdown() }

        </Container>
    );
}

export default WeaponsBuilderPage;