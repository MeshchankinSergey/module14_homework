const person = {
    city: "Moscow"
   }

const student = Object.create(person);

student.name = "Andrei";
student.surname = "Ivanov";
student.age = 18;
student.position = "developer";

function printsOwnProperty (student) {
    for (let key in student) {

        if (student.hasOwnProperty(key)) {
            console.log(key + ': ' + student[key]);
        }   
    }
}

printsOwnProperty (student)

/* выведет в консоль
name: Andrei
surname: Ivanov
age: 18
position: developer*/