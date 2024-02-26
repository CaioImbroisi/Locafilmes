<script setup lang="ts">
import PageHeader from "../src/components/Header.vue"
import Footer from "../src/components/Footer.vue"
import {mockAdm} from "./utils/mocks/mockAdm.jsx"

mockAdm()
</script>

<template class="bg-slate-700">
    <div class="bg-gray-900 max-w-screen-xl m-auto">
        <PageHeader />
        <router-view></router-view>
        <Footer />
    </div>
</template>