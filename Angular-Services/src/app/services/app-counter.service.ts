import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class AppCounterService{
  counter = 0
  constructor(protected losService:LogService) {
  }
  increase(){
    this.losService.log('increase counter')
    this.counter++
  }
  decrease(){
    this.losService.log('decrease counter')
    this.counter--
  }
}
