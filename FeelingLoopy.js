let test = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'
let test1 = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232'

let lines = test1.split('\n');
let cells = [];
let cell1, cell2, cell3, cell4;
for(const i of lines){
    cells.push(i.split(','));
}
for(let cell of cells){
    cell1 = cell[0];
    cell2 = cell[1];
    cell3 = cell[2];
    cell4 = cell[3];
    console.log(cell1, cell2, cell3, cell4);
}

