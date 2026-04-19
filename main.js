/**
 * Random generation of birthdate according to the given age range
 * @param {{min: number, max: number}} age
 * @returns {string} ISO date
 */
function getBirthdate(age) {
    const now = new Date();

    const minDate = new Date(now);
    minDate.setFullYear(now.getFullYear() - age.max);

    const maxDate = new Date(now);
    maxDate.setFullYear(now.getFullYear() - age.min);

    const randomTime =
        minDate.getTime() +
        Math.random() * (maxDate.getTime() - minDate.getTime());

    return new Date(randomTime).toISOString();
}
/**
 * Main function generating employees
 * @param {object} dtoIn
 * @returns {object} dtoOut
 */
export function main(dtoIn) {
    const dtoOut = [];

    const employees = [
        { name: "Jan", surname: "Novák", gender: "male" },
        { name: "Petr", surname: "Svoboda", gender: "male" },
        { name: "Jakub", surname: "Dvořák", gender: "male" },
        { name: "Lukáš", surname: "Kučera", gender: "male" },
        { name: "Jana", surname: "Nováková", gender: "female" },
        { name: "Petra", surname: "Svobodová", gender: "female" },

    ];

    const workloads = [10, 20, 30, 40];

    for (let i = 0; i < dtoIn.count; i++) {
        const person =
            employees[Math.floor(Math.random() * employees.length)];

        dtoOut.push({
            name: person.name,
            surname: person.surname,
            gender: person.gender,
            birthdate: getBirthdate(dtoIn.age),
            workload:
                workloads[Math.floor(Math.random() * workloads.length)]
        });
    }

    return dtoOut;
}