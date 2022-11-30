const addStudentBtn = document.getElementById('addStudent')
const addTeacherBtn = document.getElementById('addTeacher')
const getStudentsBtn = document.getElementById('getStudents')
const getTeachersBtn = document.getElementById('getTeachers')
let Students = []
let Teachers = []
class Person {
  constructor(name, surname, dateofBirth) {
    ;(this.name = name),
      (this.surname = surname),
      (this.dateofBirth = dateofBirth)
    this.age = this.getAge()
  }
}
Person.prototype.getAge = function () {
  return 2022 - this.dateofBirth
}
class Teacher extends Person {
  constructor(name, surname, dateofBirth, subject) {
    super(name, surname, dateofBirth)
    this.subject = subject
  }
}
class Student extends Person {
  constructor(name, surname, dateofBirth, average) {
    super(name, surname, dateofBirth)
    this.average = average
  }
}
function getAllStudents() {
  console.log(Students)
}
function getAllTeachers() {
  console.log(Teachers)
}
function addStudent() {
  let name = prompt('Name')
  let surname = prompt('Surname')
  let dateOfBirth = prompt('Date of Birth')
  let average = prompt('Average')
  let student = new Student(name, surname, dateOfBirth, average)
  Students.push(student)
}
function addTeacher() {
  let name = prompt('Name')
  let surname = prompt('Surname')
  let dateOfBirth = prompt('Date of Birth')
  let subject = prompt('Subject')
  let teacher = new Teacher(name, surname, dateOfBirth, subject)
  Teachers.push(teacher)
}
addStudentBtn.addEventListener('click', addStudent)
addTeacherBtn.addEventListener('click', addTeacher)
getStudentsBtn.addEventListener('click', getAllStudents)
getTeachersBtn.addEventListener('click', getAllTeachers)
