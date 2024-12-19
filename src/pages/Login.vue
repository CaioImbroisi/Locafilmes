<script lang="ts">
import { useRouter } from 'vue-router';


interface Login {
    username: string;
    password: string;
    error: boolean;
    errorMsg: string;
}

export default {
    data(): Login {
        return {
        username: "",
        password: "",
        error: false,
        errorMsg: "",
        }
    },
    methods: {
        login() {
        const router = useRouter()
        console.log(router)
          let acess = false
          const getData: any =  localStorage.getItem(this.username)
          const userInfo = JSON.parse(getData)
          console.log(userInfo)
          if (!this.username || !this.password ) {
            this.error = true
            this.errorMsg = "Preencha os campos de usuário e senha."
            return false
          }
          if (!userInfo || userInfo.password !== this.password) {
            this.error = true
            this.errorMsg = "Usuário ou senha incorretos."
            return false
          } else {
            const id = userInfo.phone
            acess = true
            sessionStorage.setItem(userInfo.phone, JSON.stringify(acess))
            router.push(`userProfile/${id}`)
            return true
          }
        }
    },
}
</script>

<template>
    <div class=" text-gray-100 flex min-h-52 flex-col items-center sm:justify-center p-20">
            <div class="pr-5 text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
                <div>
                    <svg class="h-8 w-8 mr-2 fill-red-600" width="54" height="54" viewBox="0 0 54 54"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                    </svg>
                </div>
                Meu Locafilmes
            </div>
        <div class="relative mt-12 w-full max-w-lg sm:mt-10">
            <div class="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
                bis_skin_checked="1">
            </div>
            <div>
                <div class="flex flex-col p-6">
                    <h3 class="text-xl font-semibold leading-6 tracking-tighter">Login</h3>
                    <p class="mt-1.5 text-sm font-medium text-gray-200">Bem vindo a área de membro Locafilmes.
                    </p>
                </div>
                <div class="p-6 pt-0">
                    <form>
                        <div>
                            <div>
                                <div
                                    class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                    <div class="flex justify-between">
                                        <label
                                            class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Telefone</label>
                                    </div>
                                    <input v-model="username" type="text" name="username" placeholder="Número de telefone do usuário" autocomplete="off"
                                        class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground">
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div>
                                <div
                                    class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                    <div class="flex justify-between">
                                        <label
                                            class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Senha</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input v-model="password" type="password" name="password" placeholder="Senha do usuário"
                                            class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 flex items-center justify-between">
                            <label class="flex items-center gap-2">
                                <input type="checkbox" name="remember"
                                    class="outline-none focus:outline focus:outline-sky-300">
                                <span class="text-xs">Lembrar acesso</span>
                            </label>
                            <a class="text-sm font-medium text-foreground underline" href="/forgot-password">Esqueceu a
                                senha?
                            </a>
                        </div>
                        <div class="flex justify-center mt-5 mb-5">
                            <span v-if="error === true" class="bg-red-700 text-lg p-2 rounded-lg">{{ errorMsg }}</span>
                        </div>
                        <div class="mt-4 flex items-center justify-end gap-x-2">
                            <router-link to="/register" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled: bg-white text-black h-10 px-4 py-2 hover:bg-red-500 hover:ring hover:text-white ring-white h-10 px-4 py-2 duration-200"
                            >Registrar</router-link>
                            <button
                                class="font-semibold hover:bg-red-500 hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                                type="button" @click="login()">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>