/**
 * Generates a random birthdate within the given age range.
 * @param {{min: number, max: number}} age
 * @returns {string} ISO date
 */
function getBirthdate(age) {
    const msInYear = 365.25 * 24 * 60 * 60 * 1000;
    const now = new Date().getTime();

    const earliest = now - (age.max * msInYear);
    const latest = now - (age.min * msInYear);

    const randomTime = earliest + Math.random() * (latest - earliest);

    return new Date(randomTime).toISOString();
}

/**
 * Main function generating employees.
 * @param {object} dtoIn
 * @returns {array} dtoOut
 */
export function main(dtoIn) {
    const dtoOut = [];

    const employees = [
        { name: "Jan", surname: "Holý", gender: "male" },
        { name: "Miroslav", surname: "Rezek", gender: "male" },
        { name: "Jaroslav", surname: "Raketa", gender: "male" },
        { name: "Rostislav", surname: "Holek", gender: "male" },
        { name: "Jana", surname: "Bílá", gender: "female" },
        { name: "Zdena", surname: "Holá", gender: "female" }
    ];

    const workloads = [10, 20, 30, 40];

    for (let i = 0; i < dtoIn.count; i++) {
        const person = employees[Math.floor(Math.random() * employees.length)];

        dtoOut.push({
            gender: person.gender,
            birthdate: getBirthdate(dtoIn["age"]),
            name: person.name,
            surname: person.surname,
            workload: workloads[Math.floor(Math.random() * workloads.length)]
        });
    }

    return dtoOut;
}