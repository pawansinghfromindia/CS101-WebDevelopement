const course = {
  coursename: "React",
  price: 499,
  instructor: "Mr Sir",
};
//course.instructor
//course["instructor"]
//Both ways are fine but sometime you need to make your code clean then you don't use course.price again & again buz you have to access these many a times

const { instructor } = course; // now after this you don't have to write course.instructor every time simply you can use instructor
console.log(instructor); //Mr Sir

const { coursename: cname } = course;
console.log(cname); // React

//This is what we known as Object De-structing

/*
This is what happens in React

const navbar = (props.company) => {
    navbar(company = "Google")
}
   
const navbar = ({company}) => {
    navbar(company = "Google")
}
*/
