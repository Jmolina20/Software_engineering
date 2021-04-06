let prev=0;
let next=1;

for (counter=1; counter<=5;counter++){
    let temp = (prev + "," + next + "," );
    process.stdout.write(temp.toString())
    prev= prev + next;
    next = next + prev;
}