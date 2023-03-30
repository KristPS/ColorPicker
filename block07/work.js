/* Building a vault that requires three mathematical calculations to generate three codes in a combination.
    The combination of the lock is 10-40-39. Need to use three arithemtic operatiors that will generate each individual
    number.*/

    
    let num1 = 5 * 2;
    // The first number will be 10, since 5 times 2 is 10

    // expected output is "number"
    let num2 = 20 + 20;
    // The second number will be 40, since 20 plus 20 is 40
    
    let num3 = 40 - 1;
    // The third number will be 39, since 40 minus 1 is 39
    

    const name =`Vault Codes`;
    console.log(`Vault Codes` + `num1` + `num2` + `num3`);
    const str1 = `the`
    const str2 = `result`
    const strComplete = `Get ${str1} ${str2}!`;
    console.log(strComplete);
    //expected output: Get the result!


    alert (`You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${num1} ${num2} ${num3}`)
      
