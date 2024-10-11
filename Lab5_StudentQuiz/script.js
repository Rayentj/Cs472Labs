/*class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }

    addAnswer(question) {
        this.answers.push(question);
    }
}

class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(studentAnswer) {
        return this.answer === studentAnswer; // Return true if correct
    }
}

class Quiz {
    constructor(questionArray) {
        this.questions = new Map();
        this.students = [];

        questionArray.forEach(({ qid, answer }) => {
            this.questions.set(qid, answer);
        });
    }

    addStudent(student) {
        this.students.push(student);
    }

    scoreStudentBySid(sid) {
        const student = this.students.find(s => s.studentId === sid);
        if (!student) return 0;

        let score = 0;
        student.answers.forEach(answer => {
            const correctAnswer = this.questions.get(answer.qid);
            if (correctAnswer && answer.checkAnswer(correctAnswer)) {
                score++;
            }
        });
        return score;
    }

    getAverageScore() {
        if (this.students.length === 0) return 0;

        const totalScore = this.students.reduce((sum, student) => {
            return sum + this.scoreStudentBySid(student.studentId);
        }, 0);

        return totalScore / this.students.length;
    }
}*/


//*********************class constructor */
let Student=function(studentid,answers){
    this.studentid=studentid
    this.answers=[]
}

Student.prototype.addAnswer=function(question){
    this.answers.push(question)
}


let Question = function(qid,answer){
    this.qid=qid
    this.answer=answer
}

Question.prototype.checkAnswer=function(answer){
    return answer === this.answer
}

let Quiz = function(questions,students){
    this.questions=new Map()
    questions.forEach(q => this.questions.set (q.qid,q.answer));
    this.students=students
}


Quiz.prototype.scoreStudentBysid = function(studentid){
    const student = this.students.filter(s=>s.studentid=== studentid)[0]
    return student.answers.reduce((sum,currentQuestion)=>{
        if(currentQuestion.checkAnswer(this.questions.get(currentQuestion.id))){
            sum=sum+1;
        }
        return sum
    },0)

}

Quiz.prototype.getAverageScore = function() {
    return this.students.reduce((accmulator, student, index, array) => {
    return accmulator + this.scoreStudentBySid(student.studentId) / array.len
    gth;
    }, 0);
    }

// Create questions
const questions = [
    { qid: 1, answer: 'a' },
    { qid: 2, answer: 'b' },
    { qid: 3, answer: 'c' }
];

// Create a new quiz
const quiz = new Quiz(questions);

// Create students
const student1 = new Student(101);
const student2 = new Student(102);

// Student1 adds answers
student1.addAnswer(new Question(1, 'a')); // Correct answer
student1.addAnswer(new Question(2, 'b')); // Correct answer
student1.addAnswer(new Question(3, 'd')); // Wrong answer

// Student2 adds answers
student2.addAnswer(new Question(1, 'b')); // Wrong answer
student2.addAnswer(new Question(2, 'b')); // Correct answer
student2.addAnswer(new Question(3, 'c')); // Correct answer

// Add students to quiz
quiz.addStudent(student1);
quiz.addStudent(student2);

// Calculate and print scores
console.log("Student 1 Score:", quiz.scoreStudentBySid(101)); // Output: 2
console.log("Student 2 Score:", quiz.scoreStudentBySid(102)); // Output: 2

// Calculate and print average score
console.log("Average Score:", quiz.getAverageScore()); // Output: 2



