/**
 * Function for calculation of date of birth vs age range
 * @param {object} age Age range - min.max.
 * @returns {string} Date in ISO format
 */
function getBirthdate(age) {
    const msInYear = 365.25 * 24 * 60 * 60 * 1000;
    const now = new Date().getTime();
    const earliest = now - (age.max * msInYear);
    const latest = now - (age.min * msInYear);
    const randomMs = Math.floor(Math.random() * (latest - earliest + 1) + earliest);
    return new Date(randomMs).toISOString();
}

/**
 * Main function for employee generation
 * @param {object} dtoIn Input data
 * @returns {array} Employee list
 */
export function main(dtoIn) {
    const result = [];
    const employees = [
        { name: "Jan", surname: "Holý", gender: "male" },
        { name: "Miroslav", surname: "Rezek", gender: "male" },
        { name: "Jaroslav", surname: "Raketa", gender: "male" },
        { name: "Rostislav", surname: "Holek", gender: "male" },
        { name: "Jana", surname: "Bílá", gender: "female" },
        { name: "Zdena", surname: "Holá", gender: "female" }
    ];

    // Tady jsou ty zavitorky, ktere mi minule vypadly:
    const workloads = [10, 20, 30, 40];

    for (let i = 0; i < dtoIn.count; i++) {
        const person = employees[Math.floor(Math.random() * employees.length)];
        result.push({
            gender: person.gender,
            birthdate: getBirthdate(dtoIn.age),
            name: person.name,
            surname: person.surname,
            workload: workloads[Math.floor(Math.random() * workloads.length)]
        });
    }
    return result;
}