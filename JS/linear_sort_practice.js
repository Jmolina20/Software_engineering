function linear_search (){
let data=8;
let set = [10,244,405, 1, 66, 7, 8];
for (counter=0; counter< set.length;counter++){
    if (set[counter] == data){
        console.log("Data is found at index " + counter);
        
    }
    else if (data!=set[counter]){
        console.log("404 data not found.");
        
    }
}
}