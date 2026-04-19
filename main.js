// Birth date/range age
function getBirthdate(age) {
    const now = new Date().getTime();
    const msInYear = 365.25 * 24 * 60 * 60 * 1000;
    const minMs = now - (age.max * msInYear);
    const maxMs = now - (age.min * msInYear);
    const randomMs = Math.floor(Math.random() * (maxMs - minMs + 1) + minMs);
    return new Date(randomMs).toISOString();
}

/**
 * Main fuction for list generation
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