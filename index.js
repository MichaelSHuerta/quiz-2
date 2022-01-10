let arr = [0,5,10,15,20,25,30,35,40,45,50];
let max = arr[0]
let min = arr[0]

for (let i = 0; i < arr.length; i++){
  if (arr[i] >= max){
    max = arr[i];
    
  }
 
}
console.log(max + " is the maximum number")

for (let i = 0; i < arr.length; i++){
  if (arr[i] <= min){
    min = arr[i];
    
  }
 
}
console.log(min + " is the minimum number")