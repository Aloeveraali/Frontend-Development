// Prompt the user for a value and store it in N as a constant
const N=parseInt(prompt("Enter a postive integer: "))



// Function to calculate the sum of the first N odd integers
function sumOfOddIntegers(N)
{
    let sum=0;

    for(let i=1;i<=N;i++)
    {
        let oddNumber = 2* i-1; //finding the next odd number

        sum+=oddNumber; //adding number to the total
    }
    console.log("the sum of the first " + N + " odd integers is: " + sum);

}
sumOfOddIntegers(N);