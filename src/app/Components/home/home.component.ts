import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../../Service/expense.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private router:Router,private expenseService:ExpenseService){}

  expenses: any[] = [];

  Add(){
    this.router.navigate(["add"])
  } 
    ngOnInit(): void {
    this.fetchExpenses();
  }

  // Fetch expenses for logged-in user
  fetchExpenses() {
    this.expenseService.getExpenses().subscribe({
      next: (res) => {
        this.expenses = res;
      },
      error: (err) => {
        console.log('Error fetching expenses', err);
      }
    });
  }

    // Delete an expense
  deleteExpense(id: number) {
    this.expenseService.deleteExpense(id).subscribe({
      next: (res) => {
        console.log(res);
        this.fetchExpenses();
      },
      error: (err) => {
        console.log('Error deleting expense', err);
      }
    });
  }
}
