import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  api = config.API_URL;

  constructor(private http:HttpClient) { }
}
