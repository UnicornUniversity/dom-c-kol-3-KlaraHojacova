// input (dtoIn)
const dtoIn = {
    count: 6,
    age: {
        min: 40,
        max: 50
    }
};
//list of 6 employees
const dtoOut = [
    {
        gender: "male",
        birthdate: "1979-05-03T00:00:00.000Z",
        name: "Jan",
        surname: "Holý",
        workload: 40
    },
    {
        gender: "male",
        birthdate: "1983-08-15T00:00:00.000Z",
        name: "Miroslav",
        surname: "Rezek",
        workload: 30
    },
    {
        gender: "male",
        birthdate: "1981-04-03T00:00:00.000Z",
        name: "Jaroslav",
        surname: "Raketa",
        workload: 20
    },
    {
        gender: "male",
        birthdate: "1975-05-06T00:00:00.000Z",
        name: "Rostislav",
        surname: "Holek",
        workload: 10
    },
    {
        gender: "female",
        birthdate: "1983-01-05T00:00:00.000Z",
        name: "Jana",
        surname: "Bílá",
        workload: 40
    },
    {
        gender: "female",
        birthdate: "1983-06-13T00:00:00.000Z",
        name: "Zdena",
        surname: "Holá",
        workload: 30
    }
];

//function for generating

export function main(dtoIn) {
    let result = [];

    // List of people for random selection
    const names = ["Jan", "Miroslav", "Jaroslav", "Rostislav", "Jana", "Zdena"];
    const surnames = ["Holý", "Rezek", "Raketa", "Holek", "Bílá", "Holá"];
    const genders = ["male", "female"];
    const workloads = [10, 20, 30, 40];

    for (let i = 0; i < dtoIn.count; i++) {
        // Calculation of age to meet the age range
        const birthYear = 2026 - Math.floor(Math.random() * (dtoIn.age.max - dtoIn.age.min + 1) + dtoIn.age.min);
        const birthdate = new Date(Date.UTC(birthYear, 0, 1)).toISOString();

        result.push({
            gender: genders[Math.floor(Math.random() * genders.length)],
            birthdate: birthdate,
            name: names[Math.floor(Math.random() * names.length)],
            surname: surnames[Math.floor(Math.random() * surnames.length)],
            workload: workloads[Math.floor(Math.random() * workloads.length)]
        });
    }

    return result;
}

// code runnig for controlling purposes
console.log(main(dtoIn));