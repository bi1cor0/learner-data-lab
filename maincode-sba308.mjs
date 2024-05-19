const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-27",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-27",
        score: 140
      }
    }
  ];

 ///////////////////////////////////////////////////////////////////////////////////////////start/////////////////////////////////////////////////////////////////////// 
  function transformLearner(ids) {
    const resultArr = [];

    for(const s of ids){//part 2, iterate through the leanersubs array of objects. put learner_id in a placeholder var and create empty object. Create a new function within this function. 
      let learner_id = s.learner_id; //found out you can set the iterator var in a for of loop can be used to call keys themselves within an array. 
      let assignmentid = s.assignment_id; //i'm using the value of the object in the array ids and putting it in a holder variable to be used in this loop.

      const isIDsame = resultArr.find(item => item.id === learner_id); //i found and read up on the .find function. the find function searches for the first instance of what I set the function to find.
      // In this case: if the iterator: item.id in the resultArr array, has the same learner_id as the LearnerSubmissions, .find will send out the object, which I put in a var.                   
      if(!isIDsame) { //now if isIDSsame is false (empty) then a new object within the array will start. 
        resultArr.push({[assignmentid]: s.submission,
          id: learner_id //the resultArr will push out an object with the assignmentid key name with the value of whatever iterator s found in .submission. along with the id of the learner. this will in turn create a new object in the array. 
        } )  
      } else {  //if isIDsame is true (has a value) then it will add on to the object inside.
          isIDsame[assignmentid] = s.submission; //the assignmentid will uptick, and will create a new entry in the object of isIDsame. isIDsame is actually referencing an object directly onto the resultArr array.
        }//so, whatever I do to the object isIDsame, I do to the object in resultArr. In this case, I'm reassigning the assignment ID in the object entry, and includeing the submission
        //once the loop continues, resultArr should have more entries in the object value in the array for as long as item.id and learner_id are the same. 
    } 
    return resultArr;
  }

//part 3 do some math
function divide(learnerScore, totalScore) { //dividing function. will be used in conjuction with the sum function to try and find the weighted average of the student. 
   return learnerScore / totalScore;
}

function isDue(dueDate, submissionDate) { //if statement used to check due date.
  return Date.parse(dueDate) < Date.parse(submissionDate);
}

function isLate(dueDate, submissionDate) { //if statement used to check if the due date has past and the assignment is late.
  return Date.parse(dueDate) > Date.parse(submissionDate);
}

function lateEntry(points){ //function to convert the amount of points that are reduced by 10%
  let redux = points - (0.1 * points);
  return redux;
}

//part 4 put it all together
//create a function that takes the reformatted LearnerSubmitions and extract the necessary data. First take the student ID, and then iterate through the LearnerSubmissions. 
//Second, take the learner assignments and manipulate the scores. Create a variable to take the values of each object to reference later in the weighted avg scores. 

function allTogether(studentObj, assignArr){
  let count = 0;
  let studentSum = 0; //student score sum, from the student submissions
  let assignSum = 0;  //total amount of points sum from the assignment group
  const studentID = studentObj.id; //grabbing student id from the array of objects.
  let results = { //declaring final results object. 
    id: studentID
  }
  try{ //checking to see if the assignments array has an entry of zero using a try catch statement. 

    const isZero = assignArr.find(item => item.points_possible === 0) //using find function again to iterate through the assignments array. 
    if(!isZero){
  
      for(let c in studentObj){ //logic for function starts here and will iterate through the transformed student submissions.
        if(c == 'id') {continue;} //the object will include the student ID and will iterate through it. Setting up if statement if c is equal to the key name 'id.'
        if(isDue(studentObj[c].submitted_at, assignArr[count].due_at)) { //running the early due date check. 
          count++ //counting up
          continue; //skipping entry if it is not due yet. 
        }
        else if(isLate(studentObj[c].submitted_at, assignArr[count].due_at)){ //running the late check. 
          let lateVal = lateEntry(studentObj[c].score) //assigning value to recalculated score that has been late. 
          results[c] =  divide(lateVal, assignArr[count].points_possible) //doing math before putting it into the results object. 
          studentSum += lateVal; //upticking the value of student sum using the laveVal var.
          assignSum += assignArr[count].points_possible;
          count++
        }
        else { //now that the checks have been made, I'm doing the proper math. 
          results[c] =  divide(studentObj[c].score, assignArr[count].points_possible); 
          studentSum += studentObj[c].score;
          assignSum += assignArr[count].points_possible;
          count++
        }

      }
    results.avg = divide(studentSum, assignSum); //calculating the avg of the total scores.
    return results; //results obj should now be completed. 
    } else { 
      throw console.log(`Error - Please recheck Assignment Group. Score entries cannot be zero.`)//end of catch statement.
    }
  } 
  catch(err) {console.log(err)}
}


//////main function/////////////////////////
function getLearnerData(courseinfo, assignmentgroups, learnersubs) {

  //part 1, create an array of objects that takes the assignnments from the assignment groups.  
  let mainMents = assignmentgroups.assignments; 
  let transformed = transformLearner(learnersubs); //created new variable that takes the new reformatted learnersubs array.
  let mainResults = []; //setting up final array of objects. 
  
  //part 5 implement try catch statement with if else
    try {
      if (courseinfo.id === assignmentgroups.course_id){
        for(let i = 0; i < transformed.length; i++){ //creating final loop that references the transformed student data, which should also be an array of objects. 
          mainResults.push(allTogether(transformed[i], mainMents)) //pushing the results of allTogether into the final array. 
        }
        return mainResults;
        } else{ 
          throw console.log(`Error - Please submit matching Course Info ID with Assignment Group that references the Course ID.`)
        }

      }
      catch(err) {console.log(err)}
    }
    
  



console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions))
