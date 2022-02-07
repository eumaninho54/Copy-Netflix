import { Component, OnInit, ViewChild, HostListener, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core';
import { MoviesService } from '../movies.service';
import { SwiperComponent } from 'swiper/angular';
import { moviesInfo } from '../browse.model';
import { AnimationOptions } from 'ngx-lottie';

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

  @Output() isLoad = new EventEmitter()

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.resizeWidthImage()
  }

  allMovies!: moviesInfo[];
  trendingNow!: moviesInfo[];
  topRated!: moviesInfo[];
  recommended!: moviesInfo[];
  action!: moviesInfo[];
  drama!: moviesInfo[];

  randomBackDrop!: any;
  slidesPerView!: number;
  isLoading: boolean = false;

  lottieOptions: AnimationOptions = {
    path: 'assets/Lottie/29313-netflix-logo-swoop.json'
  }

  constructor(
    private moviesService: MoviesService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }
  
  ngOnInit(): void {
    this.moviesService.read('/discover/movie?').subscribe(({results}) => {
      this.allMovies = results
      this.randomBackDrop = this.allMovies[Math.floor(Math.random() * this.allMovies.length)]
      window.setTimeout( () => {
        const $loading = this.elementRef.nativeElement.querySelector('.loading')
        const $content = this.elementRef.nativeElement.querySelector('.background')
        this.renderer.setStyle($loading, 'transition', '0.4s')
        this.renderer.setStyle($loading, 'opacity', '0')
        this.renderer.setStyle($content, 'display', 'initial')
        this.isLoad.emit(true)
        window.setTimeout( () => {
          this.renderer.setStyle($loading, 'display', 'none')
        }, 800)
      }, 3200)
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
      this.resizeWidthImage()
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