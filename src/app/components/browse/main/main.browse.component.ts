import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MoviesService } from '../movies.service';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-main-browse',
  templateUrl: './main.browse.component.html',
  styleUrls: ['./main.browse.component.scss']
})
export class MainBrowseComponent implements OnInit {

  @ViewChild(SwiperComponent) swiper!: SwiperComponent

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.resizeWidthImage()
  }

  allMovies!: any;
  trendingNow!: any;
  randomBackDrop!: any;
  slidesPerView!: number;

  constructor(
    private moviesService: MoviesService
  ) { }
  
  ngOnInit(): void {
    this.moviesService.read('/discover/movie?').subscribe(({results}) => {
      this.allMovies = results
      console.log(this.allMovies)
      console.log(this.moviesService.allMovies)
      this.randomBackDrop = this.allMovies[Math.floor(Math.random() * this.allMovies.length)]
      this.resizeWidthImage()
    })
    this.moviesService.read('/trending/all/day?').subscribe(({results}) => {
      this.trendingNow = results
    })
  }

  swipePrev() {
    this.swiper.swiperRef.slidePrev();
  }
  swipeNext() {
    this.swiper.swiperRef.slideNext();
  }

  resizeWidthImage(){
    if(window.innerWidth < 650){
      this.slidesPerView = 5
    }

    else if(window.innerWidth < 1100){
      this.slidesPerView = 6
    }

    else if(window.innerWidth < 1515){
      this.slidesPerView = 7
    }

    else if(window.innerWidth < 1715){
      this.slidesPerView = 8
    }

    else if(window.innerWidth < 1930){
      this.slidesPerView = 9
    }

    else if(window.innerWidth < 2150){
      this.slidesPerView = 10
    }

    else if(window.innerWidth < 2210){
      this.slidesPerView = 11
    }
    else{
      this.slidesPerView = 11
    }
  }
}