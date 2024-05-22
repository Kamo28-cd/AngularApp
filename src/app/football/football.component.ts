import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Observable,
  Subject,
  of,
  repeat,
  scan,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { playout } from '../data/playout';

interface Fixtures {
  homeTeam: number;
  awayTeam: number;
  homeTeamScore: number;
  awayTeamScore: number;
  homeTeamAbbr: string;
  awayTeamAbbr: string;
  homeTeamImg: string;
  awayTeamImg: string;
}

@Component({
  selector: 'app-football',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './football.component.html',
  styleUrl: './football.component.css',
})
export class FootballComponent {
  private stop$ = new Subject<boolean>();
  timer$: Observable<number>;
  current: number = 0;
  fixtures: Fixtures[] = [];
  isHalfTime: boolean = false;
  isFullTime: boolean = false;

  halfTime = playout.config.msPerGamePeriod;
  fullTime = playout.config.msPerGamePeriod * 2 + playout.config.break;

  constructor() {
    this.timer$ = of(0);
  }

  ngOnInit() {
    this.getFixtures();
  }
  // this.timer$.subscribe(() => console.log('timer'));
  // startTimer() {
  //   this.timer$ = timer(0, 1000).pipe(takeUntil(this.stop$));
  // }
  getSeconds(ms: number) {
    return Math.floor(ms / 1000);
  }

  getGameDuration(gamePeriod: number, breakPeriod: number) {
    const result = gamePeriod + gamePeriod + breakPeriod;
    return Math.floor(result / 1000);
  }

  getFixtures() {
    playout.data.forEach((match) => {
      this.fixtures.push({
        homeTeam: match.homeTeamID,
        awayTeam: match.awayTeamID,
        homeTeamScore: 0,
        awayTeamScore: 0,
        homeTeamAbbr: match.homeTeamAbbr,
        awayTeamAbbr: match.awayTeamAbbr,
        homeTeamImg: `../../assets/team-badges/${match.homeTeamAbbr}.png`,
        awayTeamImg: `../../assets/team-badges/${match.awayTeamAbbr}.png`,
      });
    });
  }
  startTimer() {
    this.timer$ = of(true).pipe(
      scan(
        (acc, curr) => ((acc = acc + this.current), this.current++),
        this.current
      ),
      repeat({
        delay: 1000,
        count:
          this.getGameDuration(
            playout.config.msPerGamePeriod,
            playout.config.break
          ) + 1,
      }),
      takeUntil(this.stop$),
      tap((val) => {
        if (
          this.getSeconds(this.halfTime) <= val &&
          val <= this.getSeconds(this.halfTime + playout.config.break)
        ) {
          this.isHalfTime = true;
        } else {
          this.isHalfTime = false;
        }

        if (this.getSeconds(this.fullTime) <= val) {
          this.isFullTime = true;
        } else {
          this.isFullTime = false;
        }
        playout.data.forEach((match) => {
          match.goals.find((goal) => {
            if (this.getSeconds(goal.videoMS) == val) {
              this.fixtures.find((fixture) => {
                if (goal.teamID === fixture.homeTeam) {
                  fixture.homeTeamScore++;
                }
                if (goal.teamID === fixture.awayTeam) {
                  fixture.awayTeamScore++;
                }
              });
            }
          });
        });
      })
    );
  }

  stopTimer() {
    this.stop$.next(true);
  }
}
