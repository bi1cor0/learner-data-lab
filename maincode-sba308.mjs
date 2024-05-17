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
        submitted_at: "2023-02-12",
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
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

 ///////////////////////////////////////////////////////////////////////////////////////////start/////////////////////////////////////////////////////////////////////// 
  function transformLearner(ids) {
    const resultArr = [];

    for(const s of ids){//part 2, iterate through the leanersubs array of objects. put learner_id in a placeholder var and create empty object. Create a new function within this function. 
      let learner_id = s.learner_id; //found out you can set the iterator var in a for of loop can be used to call keys themselves within an array. 
      let assignmentid = s.assignment_id; //i'm using the value of the object in the array and putting it in a holder variable to be used in this loop.

      const isIDsame = resultArr.find(item => item.id === learner_id); //i found and read up on the .find function. the function's output is actually the instance where 
      if(!isIDsame) {
        resultArr.push({[assignmentid]: s.submission,
          id: learner_id
        }) 
      } else { 
          isIDsame[assignmentid] = s.submission;
        }
      
    }
    return resultArr;
  }

  //part 3 do some math
function sum(...nums) { //using the separator parameter, I can input as many numbers I need to add up to.
    return nums.reduce((i,j) => i + j, 0); //called reduce function to add all selected numbers in the parameters.
}

function divide(learnerScore, totalScore) { //dividing function. will be used in conjuction with the sum function to try and find the weighted average of the student. 
   return learnerScore / totalScore;
}

function isDue(dueDate, submissionDate) { //if statement used to check due date.
  return Date.parse(submissionDate) < Date.parse(dueDate);
}

//part 4 put it all together
//create a function that takes the reformatted LearnerSubmitions and extract the necessary data. First take the student ID, and then iterate through the LearnerSubmissions. 
//Second, take the learner assignments and manipulate the scores. Create a variable to take the values of each object to reference later in the weighted avg scores. 




function getLearnerData(courseinfo, assignmentgroups, learnersubs) {
    //part 1, create an array of objects that takes the assignnments from the assignment groups.
    let mainMents = assignmentgroups.assignments;
    let transformed = transformLearner(learnersubs); //created new variable that takes the new reformatted learnersubs array.

    //const weightSumtop = sum(transformed[0][1][`score`], transformed[0][2][`score`], transformed[0][3][`score`]) 
    //const weightSumbottom = sum(mainMents[0]['points_possible'], mainMents[1]['points_possible'], mainMents[2]['points_possible'])
    //
    //const studID = transformed[0]['id'];
    //const weightAvg = divide(weightSumtop, weightSumbottom)
    //let one = divide(transformed[0][1][`score`],mainMents[0]['points_possible'])
//
    //
    //let testObj = {
    //  id: studID,
    //  avg: weightAvg,
    //  2: one
    //} 

    function allTogether(studentArr, assignArr){
      let studentSum;
      let assignSum;
      const studentID = studentArr[0].id;
      let results = {
        id: studentID
      }
      return results;
    }

    let mainResults = allTogether(transformed, mainMents)
    return mainResults

  }


console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions))
