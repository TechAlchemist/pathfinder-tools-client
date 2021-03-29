import React, { useState, useEffect } from 'react';
import PersonCard from '../components/PersonCard';
import { getAllPeopleData } from '../services/people-api';

function PeoplePage(props) {

    const [peopleData, setPeopleData] = useState({
        people: null
    });

    async function getPeopleData() {
        const data = await getAllPeopleData();
        setPeopleData({ data });
    }

    useEffect(() => {
        getPeopleData();
    }, []);

    return (
        <div>
            <h1> People Page </h1>




            { peopleData.data && peopleData.data.map((person, idx) => 
                <PersonCard key={idx} person={person} />
            )}

        </div>
    );
}

export default PeoplePage;