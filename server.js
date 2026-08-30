import express, { response } from 'express';
import {students} from './data.js';

const app = express();
const port = 5555;


//name as the params
app.get ("/students", (request, response) =>{
    response.status(200).json({
        message : "Catalog of students",
        data : students,
    });
});

//name as a param
app.get("/students/name/:name", (request, response) => {
    const student = students.find((el) => el.name === request.params.name)
    if (student){
        response.status(200).json({
            message : "Student name found",
            data : students,
        })
    }else {
        response.status(400).json({
            message : "Student not found",
            data : students,
        });
    };
});


//id as a params
app.get("/students/id/:id", (request, response)=> {
    const userId = parseInt(request.params.id);
    const studentId = students.find((el) => el.id === userId);
    if (studentId){
       response.status(200).json({
        message : "Student found", 
        data : studentId
    })
    }else{
      response.status(400).json({
        message : "students not found",
        data : students,
       });
    };
})
//gender as  param
app.get("/students/gender/:gender", (request, response) =>{
    const userGender = request.params.gender;
    const filteredStudent = students.filter((el) => el.gender === userGender);
    if (students.length > 0){
      response.status(200).json({
        message : `${userGender} students`,

        data : filteredStudent,
    });
    }else{
      response.status(400).json({
        message : "student not found",
        data : students
       });
    };
});

//class as a param
app.get("/students/class/:class", (request, response) => {
    const class_name = request.params.class;
    const filteredStudent =  students.filter((el)=> el.class === class_name);
    if(students.length > 0){
      response.status(200).json({
        message : `student found `,
        data : filteredStudent
    });
    }else{
      response.status(400).json({
        message : "Class not found",
        data : students
      });
    };
});
app.listen (port, () => {
    console.log(`server is on and running on port ${port}`);

});