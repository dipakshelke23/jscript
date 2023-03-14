/*
let data=[
    ["Name","Id","City","Role"],
    ["Mindstix","1","Pune","Organization"],
    ["Dipak","638","Nashik","MTS Intern"],
    ["Hardik Sir","X..","Nashik","Director of Engineering"],
    ["Chetan Sir","X..","Pune","Senior Talent Recruiter"],


]
console.log(data)
let CSV= "" ;    //"data:text/csv;charset=utf-8," ;
data.forEach(function(RowArray){
let row= RowArray.join(",");
CSV=CSV+row+"\r\n" ;
});
console.log(CSV); */

let data={
    Name:"mindstix",
    Age:12,
    City:"Pune" ,
    Area:"IT & Consulting"

};
let jsonformat= JSON.stringify(data);
console.log(jsonformat)
console.log(JSON.parse(jsonformat))