<script lang="ts">
import { findMovieById } from '../utils/movies'


export default {
    data(): any {
        return {
            movies: null,
        }

    },
    methods: {

    },
    mounted() {
        let rentedMovieIds = Object.keys(sessionStorage)
        rentedMovieIds.forEach((id) => {
            if (id.includes("tt")) {
                findMovieById(id).then((movies) => {
                    this.movies = movies
                })
            }
        })
    }
}
</script>

<template>

    <div class="text-white">
        <p class="text-4xl p-10"> Cadastro ainda não finalizado :( </p>
    </div>
</template>