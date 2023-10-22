import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, timer } from 'rxjs';
import{ map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [
        style({
          position: 'relative'
        }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            //display: 'block',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),

        /* query(':enter', [
          style({ opacity: 0 })
        ], { optional: true }), */
        
        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: 0,
              transform: 'translateX(-50px)'
            }))
          ], { optional: true }), 
  
          query(':enter', [
            style({
              transform: 'translateX(50px)',
              opacity: 0
            }),
            animate('250ms 120ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0)'
            }))
          ], { optional: true })
        ])

      ]),

      transition(':decrement', [
        style({
          position: 'relative'
        }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            //display: 'block',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),

        /* query(':enter', [
          style({ opacity: 0 })
        ], { optional: true }), */
        
        group([
          query(':leave', [
            animate('250ms 120ms ease-out', style({
              opacity: 0,
              transform: 'translateX(50px)'
            }))
          ], { optional: true }),
  
          query(':enter', [
            style({
              transform: 'translateX(-50px)',
              opacity: 0
            }),
            animate(200, style({
              opacity: 1,
              transform: 'translateX(0)'
            }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  bg: string = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a30d13c6-d1fa-4253-8a2b-ff975e5856e4/de9i785-0b919b04-9bf7-4909-a6ef-b4707f90375c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EzMGQxM2M2LWQxZmEtNDI1My04YTJiLWZmOTc1ZTU4NTZlNFwvZGU5aTc4NS0wYjkxOWIwNC05YmY3LTQ5MDktYTZlZi1iNDcwN2Y5MDM3NWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ElPMmrhSpU7J8TxfQ0jWnCEtwDzxTfoB3aLw-KxmCbE'

  loadingBGImage: boolean
  dateTime: Observable<Date>

  ngOnInit() {
  //  this.dateTime = new Date()
  //   //  timer(0, 1000).subscribe(()=> {
  //   //    this.dateTime = new Date()
  //   // })

  this.dateTime = timer(0, 1000).pipe(
    map(() => {
      return new Date()
    })
  )
  }

  public prepareRoute(outlet: RouterOutlet) {
    //return outlet.isActivated ? outlet.activatedRoute : 'tab';
    //return outlet.activatedRoute.snapshot.url
    if (outlet.isActivated) return outlet.activatedRouteData['tab']


  }

 async changeBGImage() {
   this.loadingBGImage = true
   const result = await fetch('https://source.unsplash.com/random/1920x1080', {
      method: 'HEAD'
    })

    //if (result.url === this.bg) return this.changeBGImage()
    this.bg = result.url
  }

  onBGImageLoad () {
    this.loadingBGImage = false
  }

}




