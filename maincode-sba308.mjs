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
  
  function transformLearner(ids) {
    const resultArr = [];

    for(const s of ids){
          //part 2, iterate through the leanersubs array of objects. put learner_id in a placeholder var and create empty object. Create a new function within this function. 
      let learner_id = s.learner_id; //found out you can set the iterator var in a for of loop can be used to call keys themselves within an array. 
      let assignment_id = s.assignment_id; //i'm using the value of the object in the array and putting it in a holder variable to be used in this loop.

      const isIDsame = resultArr.find(item => item.id === learner_id); //i found and read up on the .find function. the find function is essentially going through the resultArr to find an instance of repeated learner Ids

      if(!isIDsame) {
        resultArr.push({[assignment_id]: s.submission,
          id: learner_id
        })
      } else { 
          isIDsame[assignment_id] = s.submission;
        }
      
    }
    return resultArr;
  }

  //part 3 do some math
function doTotalAvg(num1, num2){
  let total = num1 + num2;
  console.log(total);
  let avg = total / 2;
  console.log(avg);
  return avg;
}

function getLearnerData(courseinfo, assignmentgroups, learnersubs) {
    //part 1, create an array of objects that takes the assignnments from the assignment groups.
    let mainMents = assignmentgroups.assignments;
    let transformed = transformLearner(learnersubs); //created new variable that takes the new reformatted learnersubs array.

    console.log(transformed[0][`1`].scores) 
    console.log(mainMents['1'].points_possible);
    return transformed;
  }

let test = doTotalAvg(99, 100);
console.log(test)

console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions))
