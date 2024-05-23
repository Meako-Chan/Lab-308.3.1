let data = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

let lines = data.split('\n');
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
// console.log(cells[0][0]);
// console.log(lines);
// console.log(cells)
