import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
//import "rxjs/add/operator/map";
//import "rxjs/Rx";
import { Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

import { Address } from "./address";

@Injectable()
export class AddressService {
  address = new Subject<Address>();

  private headers = new Headers({ "Content-Type": "application/json" });
  private adressURL = "api/addresses"; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  getAddresses(): Observable<Address[]> {
    return this.http
      .get<Address[]>(this.adressURL)
      .pipe(catchError(this.handleError<Address[]>("getAddresses", [])));
  }

  addOneAddress(address: Address) {
    return this.http.post<Address>(this.adressURL, address, this.httpOptions);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
