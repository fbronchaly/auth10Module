import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})

export class LogOutComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }

}
