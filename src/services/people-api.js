export function getAllPeopleData() {
    return fetch('http://localhost:3001/api/people/getAllPeople').then(res => res.json());
}
