Question -1)- this inside global scope, this inside the object, this inside the method, this inside the function,call function to rescue, this inside an inner function, this inside a constructor, this inside a class

Question -2)-

this.table = 'window table';

const cleanTable = function(soap){

const innerFunction = function(){

console.log('cleaning ${this.table}');

};

innerfunction(soap);

cleanTable.call(this, 'some soap');

this.garage = {

table: 'garage table',



};

let johnsRoom = {

table: 'johns table',



};

class createRoom  {

constructor(name){

this.table =  '${name}s room'

}

const jillsRoom = new createRoom('jill');

const johnsRoom = new createRoom('john');

cleanTable.call(this, 'some soap');

cleanTable.call(this.garage , 'some soap');

cleanTable.call(johnsRoom, 'some soap');

jillsRoom.cleanTable('some soap');

johnsRoom.cleanTable('some soap');





class student{

     static count=0;  //static variable to call

     

    constructor(name,age,ph_no,marks){

        this.name=name;

        this.age=age;

        this.ph_no=ph_no;

        this.marks=marks;

        student.countStudent();

    }

    static countStudent(){

        

        return(student.count++);     //this is how u access static variable

    }

    eligible(){

        if(this.marks >=40){

            console.log(`${this.name} age ${age} is eligible`);

        }

        else if(this.marks<40){

            console.log(`${this.name} age ${age} is not eligible`);

        }

    }







    

}

const Riya=new student('Riya',18,1234,34);

const Hiya=new student('Hiya',15,2345,35);

const Diya=new student('Diya',16,4567,60);

const Siya=new student('Siya',17,7891,70);

const Rooh=new student('Rooh',19,3456,80);

console.log(student.countStudent());

Riya.eligible();

Hiya.eligible();

Diya.eligible();

Siya.eligible();

Rooh.eligible();



Arrow Functions:

let square =a => a*a;

let square =a=> a*a;

console.log(square(2));



class student {

   constructor{name,age,marks}{

      this.name=name;

      this.age=age;

      this.marks = marks;

  }

setPlacementAge(minPlacementAge){

console.log(this);

return (minMarks) => {

console.log('inside egiligibleForCurrentCompany' , this)

if(this.marks >minmarks && this.age > minPlacementAge){

console.log(this.name + "is ready for placements")

}else{

console.log(this.name + "is not  ready for placements')

}

}

}

}

const Yash = new Student('yash',25,75);

const Vaibhav = new Student('vaibhav',13,35);

Yash.setPlacementAge(18)(40);

Vaibhav.setPlacementAge(18)(40);

