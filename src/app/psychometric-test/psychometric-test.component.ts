import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

// Define the Question interface
interface Question {
  questionText: string;
  options: string[];
  selectedOption: string;
}

@Component({
  selector: 'app-psychometric-test',
  templateUrl: './psychometric-test.component.html',
  styleUrls: ['./psychometric-test.component.css']
})
export class PsychometricTestComponent implements OnInit {
  // Create an array of 150 sample questions
  questions: Question[] = Array(150).fill(null).map((_, index) => ({
    questionText: `Sample Question ${index + 1}?`,
    options: ['Yes', 'No', 'Not Sure'],
    selectedOption: '' // Initialize to empty string
  }));

  currentPage = 1;
  totalPages = Math.ceil(this.questions.length / 15); // Calculate total pages
  // Add this property to track test submission
  testSubmitted = false;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    // Load selected options from localStorage when the component initializes
    this.loadSelectedOptions();
  }

  // Get the questions for the current page
  getCurrentPageQuestions(): Question[] {
    const startIndex = (this.currentPage - 1) * 15;
    return this.questions.slice(startIndex, startIndex + 15);
  }

  selectOption(question: Question, option: string) {
    question.selectedOption = option;

    // Store the selected option in localStorage
    localStorage.setItem(`question_${this.questions.indexOf(question)}`, option);
  }

  nextPage() {
    const currentPageQuestions = this.getCurrentPageQuestions();
    const allAnswered = currentPageQuestions.every(q => q.selectedOption);

    if (!allAnswered) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Answer all the questions before proceeding!' });
      return;
    }

    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Calculate the percentage of questions answered
  calculateProgressPercentage(): number {
    const answeredQuestions = this.questions.filter(q => q.selectedOption).length;
    return (answeredQuestions / this.questions.length) * 100;
  }

  // Submit the test
  submitTest() {
    const allAnswered = this.questions.every(q => q.selectedOption);

    if (!allAnswered) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Answer all the questions before submitting!' });
      return;
    }

    // Handle the submission logic here
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Test submitted successfully!' });

    // Set the testSubmitted flag to true after successful submission
    this.testSubmitted = true;
  }

  // Check if all questions are answered
  allQuestionsAnswered(): boolean {
    return this.questions.every(q => q.selectedOption);
  }

  // Load selected options from localStorage
  loadSelectedOptions() {
    this.questions.forEach((question, index) => {
      const selectedOption = localStorage.getItem(`question_${index}`);
      if (selectedOption) {
        question.selectedOption = selectedOption;
      }
    });
  }
}
