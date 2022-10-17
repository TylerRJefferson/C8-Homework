/*
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored. 
Create a function that calculates the final points for the team and returns that value.
*/

function calculatePoints(x,y) {
  return (x * 2) + (y * 3)
}
console.log(calculatePoints(10,5))


/*
EXTRA CHALLENGE: Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of items but containing one item, "needle".
After your function finds the needle, it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle.

Example(Input --> Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] => "found the needle at position 5"
*/

const arr = ["hay", "hay", "hay", "needle", "hay", "hay"]

function findNeedle(arr) {
console.log(`found the needle at position ${arr.indexOf("needle")}`)
}
findNeedle(arr)