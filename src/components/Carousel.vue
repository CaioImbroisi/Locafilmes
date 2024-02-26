<script lang="ts">
import { searchMovies } from '../utils/movies.tsx'
import { Swiper, SwiperSlide } from 'swiper/vue';
import Loading from '../components/Loading.vue'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
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
    <span class="text-6xl flex-auto bebas-neue-regular "> TODOS OS FILMES DO BATMAN COM <span class="text-white text-stroke">20%</span> DE DESCONTO!</span>
  </div>
  <swiper class="bg-black"
  :slidesPerView="3"
  :grabCursor="true"
  :loop="true"
  >
    <swiper-slide v-for="movie in movies">
    <img :src="movie.Poster" class="scale-110"/>
    <span class="swipper-pagination-bullet"></span>
    </swiper-slide>
    ...
  </swiper>
</template>


