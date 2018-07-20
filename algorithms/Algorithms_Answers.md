Add your answers to the Algorithms exercises here.

a) O(n)

b) O(log n)

c) O(sqr(n))

d) O(n log n)

e) O(n^3)

f) O(n)

g) O(n)

a) maxDifference =(arr) =>{
let min = arr[0]
let maxDifference = 0

for (let val of arr){
    min = Math.min(min,val);
    maxDifference = math.max(maxDifference, val - min)

    }
return maxDifference;
}
B) i start on the bottom floor and work my way up, you could go up more than one floor at a time, if you wanted it to be more speedy but less percise, i hope i understand the question this is what i got,
i made an assumption here, since it is a normal egg it would probably break on a pretty low floor so i didn't i am just going up by one, but you could easily change this.
const maxFloor = 80;
let egg = "whole"
for ( let floor = 0; f =< maxFloor; floor ++ ){
    If(egg === "broken"){
        return floor;
    }   
}

A) (0^2) every time a pivot happens to be selected we must check every element,

B) 0(n logn)when we pivot is the median we can assume the elements left will be lower, and that the the elements on the right of the median will be greater than that.