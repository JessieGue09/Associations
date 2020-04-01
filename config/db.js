const Sequelize = require('sequelize').Sequelize;

let sequelize = new Sequelize('students', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('MySQL connection successful.');
    })
    .catch((err) => {
        console.error('MySQL connection error: ', err);
    });


module.exports = {
    sequelize
}

const { Student } = require('./../models/student');
const { Group } = require('./../models/group');

//Associations

//One-to-many
Group.hasMany(Student);
Student.belongsTo(Group);

//Sincronizar todos los modelos por igual
//sequelize.sync();

(async () => {

    //Create Group
    // await Group.create({name: '4to'});


    //Query existing Group
    // let group4 = await Group.findOne({
    //     where: {
    //         name: '4to'
    //     }
    // });

    // //Print a Group
    // console.log(JSON.stringify(group4));

    // //Print a Group's name
    // console.log(group4.name);




    //Create Students 

    // let group4 = await Group.findOne({
    //     where: {
    //         name: '4to',
    //     }
    // });

    // let pedro = await Student.create({name: 'Pedro'});
    // let cubano = await Student.create({name: 'Cubando'});
    // let juan = await Student.create({name: 'Juan'});
    // let erick = await Student.create({name: 'Erick'});
    // let jessy = await Student.create({name: 'Jessy'});
    // let benji = await Student.create({name: 'Benji'});

    // group4.setStudents([pedro, cubano, juan, erick, jessy, benji]);
    // await group4.save();


    //Query Students of Group

    // let group4 = await Group.findOne({
    //     where: {
    //         name: '4to'
    //     }
    // });

    // let studentsOf4to = await group4.getStudents();

    // //4thGradeStudentNames
    // let nameOfStudentsOf4to = studentsOf4to.map(s => s.name);

    // console.log(nameOfStudentsOf4to);


    // let benji = await Student.findOne({
    //     where: {
    //         name: 'benji'
    //     }
    // });
    // benji.name = 'Benji';
    // await benji.save();

    

})();