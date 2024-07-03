// Write your solution in this file!
const employee = {
    name : "Geoffrey",
    streetAddress : "Sigona "
}
function updateEmployeeWithKeyAndValue(employee, streetAddress ,Sigona){
    return {
        ...employee,
        [streetAddress] : "11 Broadway"
    }
   
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress,Sigona){
   employee[streetAddress] = "12 Broadway"
   return employee

}

function deleteFromEmployeeByKey(employee, name){
    const newEmployee = {...employee }
    delete newEmployee[name]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name]
    return employee
}

