import { Component, OnDestroy, OnInit } from '@angular/core';
import { Seat } from './model';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.less'],
})
export class MovieBookingComponent implements OnInit,OnDestroy {
  public title: string = 'Movie Ticket Booking';
  public subTitle: string ="";
  public rows: any = [];
  public rowsLength = 8;
  public seatPerRow = 12;
  public selected: boolean = false;
  seatMap: Seat[][] = [];
  seatsInfo: any = [];
  updateSeats: any;
  selectedSeats: any = [];
  totalCosting: number = 0;
  public context: any = 'Select Seats to Book';
  loading: boolean=false;
  items: any;
  page: any;
  constructor(private _snackBar: MatSnackBar) {}
  ngOnInit(): void {
    const savedMovie = localStorage.getItem('selectedMovie');
    if(savedMovie){
      const movieData= JSON.parse((savedMovie))

      this.subTitle =movieData.name 
      console.log(JSON.parse(savedMovie))
    }
    this.rows = Array.from({ length: this.rowsLength }, (_, i) =>
      String.fromCharCode(65 + i)
    );
    console.log(this.rows);
    this.seatsInfo = [
      { type: 'Regular', price: 150 },
      { type: 'Premium', price: 200 },
      { type: 'VIP', price: 350 },
      { type: 'selected' },
      { type: 'booked' },
    ];
    this.getSeats();
  }

  getSeats() {
    this.seatMap = this.rows.map((row: any, rowIndex: number) => {
      return Array.from({ length: this.seatPerRow }, (_, seatIndex) => {
        let type: Seat['type'] = 'Regular';
        let price;
        if (rowIndex >= 0 && rowIndex < 3) {
          type = 'Regular';
          price = 150;
        } else if (rowIndex > 2 && rowIndex < 6) {
          type = 'Premium';
          price = 200;
        } else {
          type = 'VIP';
          price = 350;
        }
        return {
          row,
          number: seatIndex + 1,
          seatNum: row + String(seatIndex + 1),
          type,
          price,
          booked: Math.random() < 0.2,
          selected: false,
        };
      });
    });
    console.log(this.seatMap);
  }
  trackByIndex(index: number, item: any): number {
    return index;
  }
  selectedSeat(seat: Seat, index: number) {
    this.selected = !this.selected
    console.log(this.selected)
    console.log(seat);
    seat.selected = !seat.selected;
    if (seat.selected) {
      this.selectedSeats.push(seat.seatNum);
    } else {
      this.selectedSeats = this.selectedSeats.filter(
        (seati: any) => seati != seat.seatNum
      );
    }
    // this.selectedSeats ={...seat,selected : !seat.selected}
    this.totalCost(this.selectedSeats);
    // this.updateSeats = this.seatMap;
    // this.updateSeats.map((rows:any)=>{
    //   console.log(rows)
    //   rows.filter((seati:any)=>{
    //     if(seati.row == seat.row && seati.number == seat.number){
    //       seati.selected= true;
    //       seati.booked = true
    //     }
    //   })
    // })
    // this.seatMap = this.updateSeats
  }
  totalCost(seats: any) {
    const totalSum: any = [];
    this.seatMap.filter((rowSeat, rInx) => {
      rowSeat.filter((seat) => {
        seats.filter((s: any) => {
          if (seat.seatNum == s) {
            totalSum.push(seat.price);
          }
        });
      });
    });
    this.totalCosting = totalSum.reduce((a: any, b: any) => a + b, 0);
    if (this.totalCosting <= 0) {
      this.context = 'Select Seats to Book';
    } else {
      if (seats.length == 1) {
        this.context = `Book ${seats.length} Seat - ₹${this.totalCosting}`;
      } else {
        this.context = `Book ${seats.length} Seat(s) - ₹${this.totalCosting}`;
      }
    }
  }

  bookTicket(seats: any) {
    let message;
    if (seats.length == 1) {
      message = `Successfully booked ${seats.length} seat for ₹${this.totalCosting}`
      // alert(
      //   `Successfully booked ${seats.length} seat for ₹${this.totalCosting}`
      // );
    } else {
      message =  `Successfully booked ${seats.length} seat(s) for ₹${this.totalCosting}`
      // alert(
      //   `Successfully booked ${seats.length} seat(s) for ₹${this.totalCosting}`
      // );
    }
    this.openSnackBar(message)
    this.changeSeatColor(seats)
    this.selectedSeats.length = 0;
  }
  openSnackBar(message: string) {
    this._snackBar.open(message);
    setTimeout(()=>{
      this._snackBar.dismiss()
    },1000)
  }
  openSnackBari(){
    this._snackBar.open("open bar")
  }

  changeSeatColor(seats:any){
    this.seatMap.map((rowSeat, rInx) => {
      rowSeat.map((seat) => {
        seats.some((s: any) => {
          if (seat.seatNum == s) {
            seat.booked = true
          }
        });
      });
    });
  }
  onScroll(event: any) {
  const { scrollTop, scrollHeight, clientHeight } = event.target;

  if (scrollTop + clientHeight >= scrollHeight - 10) {
    this.loadMore();
    console.log("loadmore")
  }
}
loadMore() {
    this.loading = true;

    setTimeout(() => {
      this.items.push("helloe");
      this.page++;
      this.loading = false;
    }, 1000);
  }

  getData(page: number) {
    return Array.from({ length: 10 }, (_, i) => ({
      name: `Item ${(page - 1) * 10 + i + 1}`
    }));
  }
  ngOnDestroy(): void {
    localStorage.clear()
  }
}
