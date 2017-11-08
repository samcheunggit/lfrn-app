import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

interface LoginUserResponse {
    success: boolean;
    message: string;
    loginUser: Object;
}

@Injectable()
export class LoginService {

  loginURLPrefix : string = '/loginUser'
  
  constructor(private http: HttpClient) { }
  
  // only used after added new employee
  registerLoginUser(newAddedEmployee){
    return this.http.post<LoginUserResponse>(this.loginURLPrefix+'/register', newAddedEmployee);
  }
  
  deleteLoginUserByEmployeeId(employeeId){
    let params = new HttpParams().set('employeeId', employeeId);
    return this.http.delete<LoginUserResponse>(this.loginURLPrefix+'/deleteLoginUserByEmployeeId', {params: params});
  }

}
