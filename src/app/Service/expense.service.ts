import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl = 'https://expensetrackerbackend-production-b406.up.railway.app/expenses';

  constructor(private http: HttpClient) { }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
  }

  // Add expense
  addExpense(expense: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, expense, {
      headers: this.getAuthHeaders()
    });
  }

  // Get all expenses
  getExpenses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`, {
      headers: this.getAuthHeaders()
    });
  }

  // Delete expense
  deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, {
      headers: this.getAuthHeaders(),
      responseType: 'text' // since your backend returns a String message
    });
  }
}