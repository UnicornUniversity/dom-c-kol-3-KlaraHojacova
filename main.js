// Function for generation of random date of birth according to age range
function getBirthdate(age) {
    const now = new Date().getTime();
    const msInYear = 365.25 * 24 * 60 * 60 * 1000;
    const minMs = now - (age.max * msInYear);
    const maxMs = now - (age.min * msInYear);
    const randomMs = Math.floor(Math.random() * (maxMs - minMs + 1) + minMs);
    return new Date(randomMs).toISOString();
}
/**
 * Main function for generation of employees
 */
export function main(dtoIn) {
    const result = [];
    const names = ["Jan", "Miroslav", "Jaroslav", "Rostislav", "Jana", "Zdena"];
    const surnames = ["Holý", "Rezek", "Raketa", "Holek", "Bílá", "Holá"];
    const genders = ["male", "female"];
    const workloads = [10, 20, 30, 40];

    for (let i = 0; i < dtoIn.count; i++) {
        result.push({
            gender: genders[Math.floor(Math.random() * genders.length)],
            birthdate: getBirthdate(dtoIn.age),
            name: names[Math.floor(Math.random() * names.length)],
            surname: surnames[Math.floor(Math.random() * surnames.length)],
            workload: workloads[Math.floor(Math.random() * workloads.length)]
        });
    }
    return result;
}