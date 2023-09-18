// psychometric-test.component.ts

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

interface Question {
  id: number;
  questionText: string;
  options_array: [];
  options: { text: string; weight: number }[];
  selectedOption: string;
}

@Component({
  selector: 'app-psychometric-test',
  templateUrl: './psychometric-test.component.html',
  styleUrls: ['./psychometric-test.component.css'],
})
export class PsychometricTestComponent implements OnInit {
  questions: any;
  currentPage = 1;
  totalPages = 0;
  testSubmitted = false;
  userResponses: { [key: number]: number } = {};
  options_array = ["Yes", "No", "Not Sure"];

  // userResponses: { 
  //   [questionId: number]: {
  //     selectedOption: string;
  //     q_name: string;
  //     student_id: string;
  //   }
  // } = {}; // Use an object to store responses for each question
  

  constructor(private http: HttpClient ,private messageService:MessageService) {}

  ngOnInit(): void {
    this.http.get<Question[]>('http://localhost:3000/getAllQuestions').subscribe(
      (data) => {
        this.questions = data;
        console.log('questions_ngonit---->',this.questions);  
        this.totalPages = Math.ceil(this.questions.length / 15);
      },
      (error) => {
        console.error('Failed to load questions:', error);
        // Handle error
      }
    );
  }

  getCurrentPageQuestions(): Question[] {
    const startIndex = (this.currentPage - 1) * 15;
    return this.questions.slice(startIndex, startIndex + 15);
  }
   
  selectOption(question: number,option:any, selectedOption: string): void {
    let student_mark = 0;
    console.log('question---->',question);
    console.log('option---->',option);
    console.log('selectedOption---->',selectedOption);
    if (selectedOption === 'No' || selectedOption === 'Not Sure') {
      student_mark = 0;
    }
    else if (selectedOption === 'Yes') {
      student_mark = question;
    }
     
  
    // Prepare the user response
    let topic_name = option.mcq_qname.substring(0,2);
    const userResponse = {
      student_id:18291,
      student_name: 'Harris', // Replace with actual student name
      st_email: 'harris@iamneo.ai', // Replace with actual email
      topic_name: topic_name, // Replace with actual topic name
      subtopic_name: topic_name, // Replace with actual subtopic name
      q_name: option.mcq_qname,
      q_description: option.question_description,
      student_mark: student_mark,
      test_id: 1, // Replace with the actual test ID
    };
    console.log('userResponse---->',userResponse);

    this.http
    .post('http://localhost:3000/studenQuestionMarks', userResponse)
    .subscribe(
      (response) => {
        console.log('User responses submitted successfully:', response);
        // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully Submitted!' });
        this.testSubmitted = true;
      },
      (error) => {
        console.error('Failed to submit user responses:', error);
        // Handle error
      }
);

  }
  

  postUserResponsesNext(): void {
    const currentPageQuestions = this.getCurrentPageQuestions();
    const allAnswered = currentPageQuestions.every((q) => q.selectedOption);

    // if (!allAnswered) {
    //   this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Answer all the questions before proceeding!' });
    //   return;
    // }
    

    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
    
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  
calculateProgressPercentage(): number {
  const answeredQuestions =this.questions.filter((q: { selectedOption: any; }) => q.selectedOption).length;
  return (answeredQuestions / this.questions.length) * 100;}

  postUserResponses(): void {
    const currentPageQuestions = this.getCurrentPageQuestions();
  
    const allAnswered = currentPageQuestions.every((q) => q.selectedOption);
  
    // if (!allAnswered) {
    //   this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Answer all the questions on this page before submitting!' });
    //   return;
    //}
  }
}
