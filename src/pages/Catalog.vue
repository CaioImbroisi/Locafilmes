<script lang="ts">
import { searchMovies } from '../utils/movies.tsx'
import Loading from '../components/Loading.vue'
//Mock pra gerar automaticamente conteudo (API limita a 10)
const defaultArray = ["spider", "batman", "titanic", "Fast", "Pokemon"]

interface Catalog {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  movies: any;
  inputValue: string;
  }

export default {
  components: {
    Loading,
  },
  data(): Catalog {
    return {
        Title: "",
        Year: "",
        imdbID: "",
        Type: "",
        Poster: "",
        movies: null,
        inputValue: ""
        
    }
  },
  methods: {
    search() {
      const searchTerm = this.inputValue;
      searchMovies(searchTerm).then(movies => {
        this.movies = movies;
      }).catch(error => {
        console.error('Erro ao buscar filmes:', error);
      });
    }
  },
  async mounted() {
    this.movies = await searchMovies(defaultArray[Math.floor(Math.random() * defaultArray.length)])
  },
}
</script>
<template>
  <div>
    <div class="flex max-w-screen-sm m-auto mt-12 mb-12">
      <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-gray-200 p-5">
        <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-5 fill-gray-500 transition">
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
      <input type="text" v-model="inputValue" class="w-full bg-gray-100 pl-2 text-base font-semibold outline-0" placeholder="Busque seu filme..." id="" />
      <input type="button" value="Buscar" @click="search" class="bg-red-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-red-700 transition-colors"/>
    </div>
  </div>
  <div class="flex flex-row gap-10 flex-wrap justify-center gap-y-14 pt-5 pb-5">
  <div v-for="movie in movies" :key="movie.imdbID" class="hover:scale-105 duration-200">
    <div class='mx-auto bg-white rounded-3xl shadow-xl'>
      <router-link :to="`movie/${movie.imdbID}`">
      <div class="grid rounded-3xl max-w-[200px] max-h-[400px] shadow-sm bg-slate-100 flex-col">
        <img
          :src="movie.Poster"
          width="375" height="200" class="rounded-t-3xl justify-center grid h-80 object-cover" :alt="movie.Title" />

        <div class="group text-center grid z-10">
          <p class="group-hover:text-cyan-700 font-bold sm:text-xl line-clamp-2 whitespace-nowrap">
            {{movie.Title}}
          </p>
          <span class="text-slate-400 font-semibold text-sm">
            {{ movie.Year }}
          </span>
        </div>
      </div>
    </router-link>
    </div>
  </div>
  <div v-if="!movies">
  <Loading />
</div>
</div>
</template>