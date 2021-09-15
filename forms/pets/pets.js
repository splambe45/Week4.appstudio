let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
console.log(`${petNames}`)
let withSal = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam", "Sal"]
console.log(`The third pet is ${petNames[2]}`)
let lengthSal = withSal.length
console.log(`The array has ${lengthSal} names in it`)

withSal.pop()
console.log(`With popped ${withSal}`)
