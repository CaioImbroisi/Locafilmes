<script lang="ts">
import { searchMovies } from '../utils/movies.tsx'
import { Swiper, SwiperSlide } from 'swiper/vue';
import Loading from '../components/Loading.vue'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


export default {
  data(): any {
    return { movies: [] }
  },
  async mounted() {
    this.movies = await searchMovies("Batman")
  },
  components: {
      Swiper,
      SwiperSlide,
      Loading,
    },
    setup() {
      const onSwiper = (swiper: any) => {
        console.log( 'onSwiper')
      };
      const onSlideChange = () => {
        console.log('slide change')
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>

<template>
  <div class="bg-red-700 text-center">
    <span class="text-4xl flex-auto bebas-neue-regular md:text-6xl  "> TODOS OS FILMES DO BATMAN COM <span class="text-white text-stroke">20%</span> DE DESCONTO!</span>
  </div>
  <swiper class="bg-black"
  @swiper="onSwiper"
  @slideChange="onSlideChange"
  :slidesPerView="1"
  :breakpoints="{
    540: {
      slidesPerView: 2,
    },
    720: {
      slidesPerView: 3,
    },
    980: {
      slidesPerView: 4,
    }
  }"
  :spaceBetween="15"
  :grabCursor="true"
  :loop="true"
  :autoplay="{ delay: 200, disableOnInteraction: true }"
>
    <swiper-slide v-for="movie in movies">
      <router-link :to="`movie/${movie.imdbID}`"><img :src="movie.Poster" class="scale-110"/></router-link>
    <span class="swipper-pagination-bullet"></span>
    </swiper-slide>
    ...
  </swiper>
</template>


