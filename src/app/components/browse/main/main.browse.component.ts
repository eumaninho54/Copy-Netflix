import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MoviesService } from '../movies.service';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-main-browse',
  templateUrl: './main.browse.component.html',
  styleUrls: ['./main.browse.component.scss']
})
export class MainBrowseComponent implements OnInit {

  @ViewChild('swiper1') swiper1!: SwiperComponent
  @ViewChild('swiper2') swiper2!: SwiperComponent
  @ViewChild('swiper3') swiper3!: SwiperComponent
  @ViewChild('swiper4') swiper4!: SwiperComponent
  @ViewChild('swiper5') swiper5!: SwiperComponent

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.resizeWidthImage()
  }

  allMovies!: any;
  trendingNow!: any;
  topRated!: any;
  recommended!: any;
  action!: any;
  drama!: any;

  randomBackDrop!: any;
  slidesPerView!: number;

  constructor(
    private moviesService: MoviesService
  ) { }
  
  ngOnInit(): void {
    this.moviesService.read('/discover/movie?').subscribe(({results}) => {
      this.allMovies = results
      console.log(this.allMovies)
      this.randomBackDrop = this.allMovies[Math.floor(Math.random() * this.allMovies.length)]
      this.resizeWidthImage()
    })
    this.moviesService.read('/trending/all/day?').subscribe(({results}) => {
      this.trendingNow = results
    })
    this.moviesService.read('/movie/top_rated?').subscribe(({results}) =>{
      this.topRated = results
    })
    this.moviesService.read('/movie/now_playing?').subscribe(({results}) =>{
      this.recommended = results
    })
    this.moviesService.read('/movie/44943/similar?').subscribe(({results}) =>{
      this.action = results
    })
    this.moviesService.read('/movie/25678/similar?').subscribe(({results}) =>{
      this.drama = results
      console.log(this.drama)
    })
  }

  swipePrev(swiper: number) {
    switch (swiper) {
      case 1:
        this.swiper1.swiperRef.slidePrev();
        break;
      case 2:
        this.swiper2.swiperRef.slidePrev();
        break;
      case 3:
        this.swiper3.swiperRef.slidePrev();
        break;
      case 4:
        this.swiper4.swiperRef.slidePrev();
        break;
      case 5:
        this.swiper5.swiperRef.slidePrev();
        break;
    }
  }
  swipeNext(swiper: number) {
    switch (swiper) {
      case 1:
        this.swiper1.swiperRef.slideNext();
        break;
      case 2:
        this.swiper2.swiperRef.slideNext();
        break;
      case 3:
        this.swiper3.swiperRef.slideNext();
        break;
      case 4:
        this.swiper4.swiperRef.slideNext();
        break;
      case 5:
        this.swiper5.swiperRef.slideNext();
        break;
    }
  }

  playMovie(){
    alert("Playing movie :)")
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