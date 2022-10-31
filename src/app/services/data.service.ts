import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;
  public isLoggedIn= false
      public userData :any = null
 public  imgUrl = "http://localhost:3000/"
private commonUrl= "http://localhost:3000/api/"
  constructor(private _http:HttpClient) { }

  register(data:User) :Observable<any>{
        return this._http.post(`${this.commonUrl}user/register`,data)
  }
  login(data:any) :Observable<any>{
        return this._http.post(`${this.commonUrl}user/login`,data)
  }
  me() :Observable<any>{
        return this._http.get(`${this.commonUrl}user/me`)
  }
  logout(data:any) :Observable<any>{
        return this._http.post(`${this.commonUrl}user/logout`,data)
  }
  getAllBooks():Observable<any>{
      return this._http.get(`${this.commonUrl}book/allBooks`)
    }
    getSinglebook(id:any):Observable<any>{
      return this._http.get(`${this.commonUrl}book/singleBook/${id}`)
    }
    getCategory(category:any):Observable<any>{
      return this._http.get(`${this.commonUrl}book/category/${category}`)
    }
    getCategories():Observable<any>{
      return this._http.get(`${this.commonUrl}book/categories`)
    }
    AddToCart(id:any,data:any):Observable<any>{
      return this._http.post(`${this.commonUrl}cart/AddToCart/${id}`,data)
    }
    imgUpload(data:any):Observable<any>{
      return this._http.post(`${this.commonUrl}user/uploadImage`, data)
    }
    editProfile(data:User):Observable<any>{
      return this._http.patch(`${this.commonUrl}user/edituser`,data)
    }
}
