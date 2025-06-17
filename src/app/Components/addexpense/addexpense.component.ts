import { Component} from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { ExpenseService } from '../../Service/expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addexpense',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addexpense.component.html',
  styleUrl: './addexpense.component.css'
})
export class AddexpenseComponent{

  expenses: any[] = [];
  newExpense = {
    expenseName: '',
    amount: 0,
    description: ''
  };

  constructor(private expenseService: ExpenseService,private router:Router) { }

  // Add new expense
  addExpense() {
        this.expenseService.addExpense(this.newExpense).subscribe({
      next: (res) => {
        this.newExpense = { expenseName: '', amount: 0, description: ''};
        this.router.navigate(["home"])
      },
      error: (err) => {                   
        console.log('Error adding expense', err);
      }
    });
  }

}