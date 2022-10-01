function findMatching (drivers, name) {
    const newDrivers = drivers.filter(person =>  person.toLowerCase() === name.toLowerCase())
    return newDrivers
}

findMatching()