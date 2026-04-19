/**
 * Generates a random birthdate within the given age range.
 * @param {object} age age object
 * @returns {string} iso string
 */
function getBirthdate(age) {
    const msInYear = 31557600000;
    const now = new Date().getTime();
    const earliest = now - (age.max * msInYear);
    const latest = now - (age.min * msInYear);
    const randomTime = earliest + Math.random() * (latest - earliest);

    const birthdate = new Date(randomTime);
    birthdate.setUTCHours(0, 0, 0, 0);

    return birthdate.toISOString();
}

/**
 * Main function generating employees.
 * @param {object} dtoIn input data
 * @returns {Array} list of employees
 */
export function main(dtoIn) {
    const dtoOut = [];
    const employees = [
        { name: "Jan", surname: "Holý", gender: "male", workload: 40 },
        { name: "Miroslav", surname: "Rezek", gender: "male", workload: 20 },
        { name: "Jaroslav", surname: "Raketa", gender: "male", workload: 30 },
        { name: "Rostislav", surname: "Holek", gender: "male", workload: 10 },
        { name: "Jana", surname: "Bílá", gender: "female", workload: 40 },
        { name: "Zdena", surname: "Holá", gender: "female", workload: 20 },
        { name: "Petr", surname: "Marek", gender: "male", workload: 30 },
        { name: "Eva", surname: "Nováková", gender: "female", workload: 40 }
    ];

    for (let i = 0; i < dtoIn.count; i++) {
        const person = employees[Math.floor(Math.random() * employees.length)];
        dtoOut.push({
            gender: person.gender,
            birthdate: getBirthdate(dtoIn["age"]),
            name: person.name,
            surname: person.surname,
            workload: person.workload
        });
    }
    return dtoOut;
}