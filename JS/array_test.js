let temp = [];

for(counter=0; counter<10; counter++){
    temp.push(counter * 2);
    process.std.write(temp.toString(temp[counter]) + "|");
}
