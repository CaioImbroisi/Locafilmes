<script lang="ts">
import { findMovieById } from '../utils/movies.tsx';
import { useRouter } from "vue-router";
import Loading from "../components/Loading.vue"

interface MovieDetails {
    Title: string;
    Year: string;
    Poster: string;
    movies: any;
    movieId: string
    Plot: string;
    Metascore: string;
    Actors: string;
    Runtime: string;
    Genre: string;
    loading: string;
}

export default {
    components: {
        Loading
    },
    data(): MovieDetails {
        return {
            Title: "",
            Year: "",
            Poster: "",
            Plot: "",
            Metascore: "",
            Actors: "",
            Runtime: "",
            Genre: "",
            movies: null,
            movieId: "",
            loading: "",
        }
    },
    async mounted() {
        const router = useRouter()
        this.movieId = String(router.currentRoute.value.params.id)
        console.log(this.movieId)
        findMovieById(this.movieId).then(movies => {
            this.Title = movies.data.Title
            this.Year = movies.data.Year
            this.Poster = movies.data.Poster
            this.Plot = movies.data.Plot
            this.Metascore = movies.data.Metascore
            this.Actors = movies.data.Actors
            this.Runtime = movies.data.Runtime
            this.Genre = movies.data.Genre
            this.movies = movies
        }).catch(error => {
            console.error('Erro ao buscar filmes:', error);
        });
    },
    methods: {
        rental() {
            console.log(this.movieId , this.movies)
            sessionStorage.setItem(String(this.movieId), JSON.stringify(this.movies))
        }
    },
}

</script>
<template>
    <div v-if="Poster">
    <div class="flex mt-10 bg-gray-100 justify-start m-10 bg-gray-900 text-white ">
        <div class="text-white m-5 bg-gray-800 p-3">
            <img :src="Poster" class="scale-100 min-w-80 min-h-full" />
        </div>
        <div class="p-10">
            <div class="flex justify-end">
            </div>
            <div class="bg-gradient-to-tr from-red-700 to-orange-400 p-2">
                <div class="max-w-[80%]">
                    <h1 class="text-4xl"> {{ Title }}</h1>
                </div>
                <div class="flex ml-1">
                    {{ Genre }} ({{ Year }})
                </div>
                <div class="flex justify-end text-5xl">
                    <span class="-mt-14 mr-5 bg-red-900 rounded-xl p-2">{{ Metascore ?? "N/A" }}</span>
                </div>
            </div>
            <div class=" bg-gray-800 p-5">
                <div class="flex justify-center mt-5 mb-5">
                    <p>{{ Plot }}</p>
                </div>
                <div>
                    <p>Elenco: {{ Actors }}</p>
                    <p>Duração: {{ Runtime }}</p>
                </div>
            </div>
            <div class="flex justify-start space-x-16 pt-10">
                <button
                    class="bg-gradient-to-tr from-yellow-200 to-orange-500 rounded-sm px-5 text-black hover:scale-105 transition duration-500">
                    Assistir com <br /><span class="text-blue-700 text-xl">Locapass</span>
                </button>
                <button @click="rental()" class="bg-red-500 p-4 hover:scale-105 transition duration-500">
                    Alugar Agora
                </button>
            </div>
        </div>
    </div>
</div>
<div v-else="">
    <Loading />
</div>
<Signatures />
</template>