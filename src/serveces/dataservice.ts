import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {DataInterface} from "../interfaces/formData.interface";

@Injectable({providedIn: 'root'})
export class Dataservice {
  constructor(private http: HttpClient) {}
  // headers = new HttpHeaders();
  // headers.set()
  // this.headers.set();
  headers= new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')

//  return this.http.post<InitialData>(
  makeDeal(dataForm: DataInterface): Observable<ArrayBuffer> {
    let options = { headers: this.headers };
    let object = {
      "due_date": "2024-09-18",
      "due_time": "<string>",
      "duration": "<string>",
      "deal_id": 16,
      "lead_id": "<uuid>",
      "person_id": 21929518,
      "project_id": "<integer>",
      "org_id": 13574584,
      "location": "<string>",
      "public_description": "<string>",
      "note": JSON.stringify(dataForm),
      "subject": "There is some title",
      "type": "<string>",
      "user_id": 21929518,
      "participants": [
        {"person_id":21929518,
          "primary_flag":true}
      ],
      "busy_flag": "<boolean>",
      "attendees": [
        {
          "person_id":21929518,
          "name": dataForm.firstname + dataForm.secondname,
          "email_address": dataForm.email
        }

      ],
      "done": "<number>"
    };
    // @ts-ignore
    return this.http.post<any>('https://api.pipedrive.com/v1//activities?api_token=c517851dab5f8bbdf208b3655216dd1a0e7be56d',object, {headers: this.headers})
      .pipe( tap(userList => {
        console.log(userList);
      }));
  }
}
/**
 * {
 *   "due_date": "2024-09-18",
 *   "due_time": "<string>",
 *   "duration": "<string>",
 *   "deal_id": 16,
 *   "lead_id": "<uuid>",
 *   "person_id": 21929518,
 *   "project_id": "<integer>",
 *   "org_id": 13574584,
 *   "location": "<string>",
 *   "public_description": "<string>",
 *   "note": "SOME NOTES",
 *   "subject": "There is some title",
 *   "type": "<string>",
 *   "user_id": 21929518,
 *   "participants": [
 *    {"person_id":21929518,
 *    "primary_flag":true}
 *   ],
 *   "busy_flag": "<boolean>",
 *   "attendees": [
 *     {
 *         "person_id":21929518,
 *         "name": "Anna",
 *         "email_address": "mail@example.com"
 *     }
 *
 *   ],
 *   "done": "<number>"
 * }
 * */
