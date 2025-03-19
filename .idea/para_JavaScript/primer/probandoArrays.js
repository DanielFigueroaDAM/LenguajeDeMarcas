let miArray=[1,3,5,"pedro",[1,2,3],true]
console.log(miArray[6])
for(int i=0;i<miArray.length;i++){
    miArray[i]="manzana"
}
//funcionamiento del for each
miArray.forEach((element)=>{alert(element)})
