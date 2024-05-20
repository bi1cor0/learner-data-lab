# SBA 308 Output Learner Data

## Languages and Tools Used:
Javascript, Microsoft Co-Pilot

## Overview
This skills based assesment has us students of the class take on roles as programmers for an app that apparently takes 3 pieces of data organized in objects and arrays of objects. And then outputs one array of objects containing data items that are a part of each initial piece of data. In context, we are given data concerning student submissions of assignments. We are supposed to organize the data by student ID per student, calculate their average of their grades by adding all scores for all assignements divided by all the points possible for all assignments. Using our knowledge of Javascript fundamentals such as if statements, loops, and functions, we should come out with the following array: 

[
  {id: 125, 
  avg: 0.79
  1: 0.94 
  2: 1, 
  3: 0.72 }
  ,
  {id: 132 
  avg: 0.895 
  1: 0.78
  2: 0.94,}
]
The real challenge of this assignment is not the logic or the math, it's actually sorting through the data and us coming up with methods of connecting these bits of data together. 

## Method
In order to start, I needed to address what types of data needs to be paired up with. The three parts of data are very disjointed and have their own format. My first thought is to comb through each array of objects through a for loop and if statements to put the necessary data in a new array of objects. But my mind could not deal with it. How would the computer know which student ID was unique? And how do you consolidate each piece of data in a new box? These were questions were the biggest issues on my mind. But I had a plan going forward:
- Part 1, create an array of objects that takes the assignnments from the assignment groups. This is so that I can have two pieces of data I can compare: the assignment ID list and the student score list. This way, I can calculate the scores and try to push them to an array.  
- Part 2, Transform LearnerSubmissions array into the bare-essentials array. with only the student id, assignment id, and the student's scores on each assignment. And it all has to be organized according to student ID. 
- Part 3 Do some math. Create functions that calculate the results used in each object of the new results array. 
- Part 4 Put it all together in one array using the final function. 
- Part 5 implement try catch statement with if else statements and the find function. 

## Challenges
The first challenge I faced with this problem is how to start. I knew I needed to at least transform the student submissions array into what only took the student ID, assignment ID, and the scores. That way I can work with it and compare it to the assignment group array. But with the amount of data we are given, it was easy for us humans to read through it and sort it by what was needed. But to translate it for a computer, it almost seemed impossible. I tried to first iterate through the student data, but that proved to be difficult, because of the previous question of : how would the computer know which student ID was unique? And then came the problem of how to sort all the relevant data by the unique ID. I managed to create a reference array that points to the assignments array of objects, to get each assignment data. But the student submissions was a lot tougher, since the data was not sorted through student ID, but by the assignment ID. I was given the tip of iterating through the student submissions array first, and then try and grab all the relevant data. But how to sort it by the student ID?

I had to see how someone with greater knowledge of Javascript and logic would do it. I'm a very kinestitec learner. Once I see someone do one thing once, I get the idea almost immediately. And so I had to turn to Microsoft Co-Pilot to give out suggestions on code. So I asked it how would it transform the student submissions array into an array that sorts out only the students. And it gave me the suggestion of the .find function. I had to play with the .find function in order to understand it's use and ask Co-Pilot questions on it in context of the problem I gave it. 

### The solution as a lesson
The .find function takes an array and iterates through it until it finds the first instance of whatever the user wants it to find. For example, if I wanted to go through the entire array of objects for the student submissions, and then look for a unique ID, I would use the .find function. And then it would point to the exact location of where the unique ID is. Once I realized what the .find function could do, I implemented it to my code to try and transform the student data. This is where I finished part 2 of my method, by understanding what Co-Pilot suggested. And in turn I learned so much from it:
1. If you iterate through an array of objects, you can use the iterator variable to access a specific key in an object. For example s.submission will output the entry found in the key, 'submission' once the iterator s has gone through the array. 
2. If you put the .find function to a variable, it actually references the original array. And therefore, whatever you can write into the .find variable, you essentially edit the array too. For example, if I find an instance where ID is unique, and put that in a variable using the .find function, I can access the variable as if I were accessing the array itself. 

The .find function helped me out later in the assignment when setting up the try/catch statement to seee if there were any entries in the assignment group that were value zero. Complete explaination is found in part 2 of my code submission.

### Like a river
Once I reformatted the student submissions, everything else became so easier to code, and create functions for. It was like this reformatting problem was a dam that needed to be cleared before everything needed to flow out as a river. I was able to set up each math function referencing both the reformatted array, and the assignment arrays. And putting it all together became a lot clearer. Part 4, I had the idea of making a function that iterated through both arrays, and then did all the calculations at once to output the final array of objects.   
