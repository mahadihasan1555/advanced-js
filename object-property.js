const students = [
    {id : 21, name: "mahadi" },
    {id : 54, name: "hasan"},
    {id : 867, name: "sabuj"},
    {id : 76, name : "sanug"}
];
const names = students.map( s => s.name);
const ids = students.map (s => s.id);
const bigger = students.filter ( s => s.id>50);
const biggerOne = students.find ( s => s.id>100 );

console.log(biggerOne);

