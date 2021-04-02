for (let row=1; row<=5; row++){
    for (let col=1;col<=5;col++){
        let temp = row + "," + col; 
        process.stdout.write(temp.toString() + "  ");
    }
    console.log();
}