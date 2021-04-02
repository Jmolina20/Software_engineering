let value=1;
for (let row =1; row<=4; row++){
    for (let col=1;col<=4;col++){
        if (value<10){
            process.stdout.write(value.toString() + "  ");
            value++;
        }
        else if (value>9){
        process.stdout.write(value.toString() + " ");
        value++;}
    }
    console.log();
}