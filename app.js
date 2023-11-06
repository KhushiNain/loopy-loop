// Important Note - No Built-in functions to be used
// Progression 1: Names and Input


// 1.1 Create a variable `Kalvian-1` with the driver's name.
let Kalvian1 = "Mohan";

// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is",Kalvian1)

// 1.3 Create a variable `Kalvian-2` with the navigator's name.
let Kalvian2="Anuskha";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is", Kalvian2);


// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if(Kalvian1.length==Kalvian2.length){
  console.log("Wow, you both have equally long names," ,Kalvian2.length ,"characters!")
}
else if(Kalvian1.length>Kalvian2.length){
  console.log("The driver has the longest name, it has" ,Kalvian1.length ,"characters.")

}
else{
  console.log("It seems that the navigator has the longest name, it has " ,Kalvian2.length ," characters.")
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.
const possibleVowels= "aeiouAEIOU";
let array1=[];
let array2=[];

                                           // use of includes and push

for(var i=0;i<Kalvian1.length;i++){
  let letter= Kalvian1[i];
  if (possibleVowels.includes(letter)){
    array1.push({letter, i});
  }
}

for(var i=0;i<Kalvian2.length;i++){
  let letter= Kalvian2[i];
  if (possibleVowels.includes(letter)){
    array2.push({letter, i});
  }
}

                                            // use of map and join

let letters=array1.map((vowelData)=> vowelData.letter);
let indexs=array1.map((vowelData)=> vowelData.i);
let letters2=array2.map((vowelData)=> vowelData.letter);
let indexs2=array2.map((vowelData)=> vowelData.i);



if (array1.length>0){
  console.log(Kalvian1,letters.join(" "),indexs.join(" "))

}
if(array2.length>0){
  console.log(Kalvian2,letters2.join(" "),indexs2.join(" "))
}
else{
  console.log("no vowels")
}
 




// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters


let upperCount = 0;
let lowerCount = 0;

  for (let i = 0; i < Kalvian1.length; i++) {
    const char = Kalvian1[i];
    if (char >= 'A' && char <= 'Z') {
      upperCount++;
    } else if (char >= 'a' && char <= 'z') {
      lowerCount++;
    }
  }

  console.log(`Uppercase characters in kalvian1: `,upperCount);
  console.log(`Lowercase characters in kalvian1: ` ,lowerCount);


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

                                // using toUpperCase , split and join
let Kalvian11New=Kalvian1.toUpperCase()
let words = Kalvian11New.split("");
console.log(words.join(" "))



// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

                                        // converting to string then using reverse fucntion
let Kalvian2New = Kalvian2.split('').reverse().join('');
console.log(Kalvian2New);
                                                                // or
                                                // storing in empty varaible in using reverse index



// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
console.log(Kalvian1+" "+ Kalvian2)
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
console.log(Kalvian2+" "+Kalvian1)

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

let strings=["The driver's name goes first","Yo, the navigator goes first definitely.","What?! You both have the same name?"];
sortedstrings=strings.sort();
for  (let i = 0; i < sortedstrings.length; i++){
  console.log(sortedstrings[i]);
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
