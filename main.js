// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

// ### `createUser`

// * Accepts two parameters, a user's first name and last name
// * Returns a user objects

function createUser(firstName, lastName){
    let fullName = {
        firstName: firstName,
        lastName: lastName
    }
    return fullName;
}


// ### `setAge`

// * Accepts two parameters, a user object and an age
// * Adds a new `age` field to the user
// * Returns the user object

function setAge(user, age){
    user.age = age    
    return user;
}

// ### `incrementAge`

// * Accepts a user object
// * Increments the age field by one
// * Returns the user object

function incrementAge(user){
    user.age++
    return user;
}



// ### `fixCar`

// * Accepts a car object
// * Sets the `needsMaitenance` field to `false`
// * Returns the car object

function fixCar(car){
    car.needsMaintenance = false;
    return car;
}



// ### `addGrades`

// * Accepts two parameters, a student object and an array of grades
// * Adds each new grade to the student's `grades` array
// * Returns the student object

function addGrades(student, newGrades){
    student.grades = student.grades.concat(newGrades)
    return student;
}




// ### `getDataType`

// * Accepts two parameters, an object and a key in that object
// * Returns the data type of the value at that key in the object

function getDataType(object, key){
    return typeof object[key]
}


// ### `addTodo`

// * Accepts two parameters, an array of to-do items and a new to-do item
// * Adds the new-todo item to the array
// * Returns the array of to-do items

function addTodo(todos, newTodo){
    todos.push(newTodo)
    return todos;
}



// ### `addSong`

// * Accepts two parameters, a playlist object and a song object
// * Updates the duration of the playlist
// * Adds the song to the playlist's `songs`
// * Returns the playlist object

function addSong(playlist, newSong){
    playlist.duration += newSong.duration
    playlist.songs.push(newSong)
    return playlist;
}


// ### `updateReportCard`

// * Accepts two parameters, a report card and a new grade (a number between 0 and 100)
// * Updates the report card's lowest grade, highest grade, and average grade
// * Adds the new grade to the report card's grades

function updateReportCard(reportCard, newGrade){
        reportCard.grades.push(newGrade)
        reportCard.lowestGrade = Math.min(...reportCard.grades)
        reportCard.highestGrade = Math.max(...reportCard.grades)

    //update average grade
        let sum = 0;
        for (let i = 0; i < reportCard.grades.length; i++){
        //for (let grade of reportCard.grades){
            sum += reportCard.grades[i];
        }
    reportCard.averageGrade = sum / reportCard.grades.length;

    return reportCard;
}






// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
