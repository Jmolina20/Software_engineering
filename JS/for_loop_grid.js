/*for (let counter=1;counter<=5;counter++){
    for (let temp=1;temp<=counter;temp++){
        process.stdout.write(counter.toString());
        
    }
    console.log("");
}*/


for (row=5;row>=1;row--){ //establishes number of rows
    for (col=1;col<=row;col++){ //establishes number of columns to be written in each row
        process.stdout.write(col + "");//writes out each element 1-5 in each row
        
    }
   console.log("");
}