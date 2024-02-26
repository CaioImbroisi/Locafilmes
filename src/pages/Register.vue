<script lang="ts">
import { getAdress } from "../utils/viaCep.tsx"
import { useRouter } from "vue-router";

interface register {
    adress: any;
    userData: {
        admin: boolean;
        name: string;
        cep: string;
        state: string;
        street: string;
        number: string;
        phone: string;
        email: string;
        password: string;
    }
    error: boolean,
    errorMsg: string
}


export default {
    data(): register {
        return {
            adress: [],
            userData: {
                admin: false,
                name: "",
                cep: "",
                state: "",
                street: "",
                number: "",
                phone: "",
                email: "",
                password: "",
            },
            error: false,
            errorMsg: ""
        }
    },
    methods: {
        search() {
            const searchTerm = this.userData.cep;
            console.log(searchTerm)
            getAdress(searchTerm).then(adress => {
                this.adress = adress;
                return adress
            }).catch(error => {
                error
            });
        },
        checkFields() {
            if (!!this.adress.erro) {
                this.error = true
                return this.errorMsg = "Por favor, insira um CEP válido."
            }
            if (this.userData.phone.match(/[a-zA-Z]/)) {
                this.error = true
                return this.errorMsg = "Por favor, insira apenas números no campo de Telefone."
            }
            if (this.userData.cep.match(/[a-zA-Z]/)) {
                this.error = true
                return this.errorMsg = "Por favor, insira apenas números no campo de CEP."
            }
            if (this.userData.password.length < 6) {
                this.error = true
                return this.errorMsg = "Por favor, insira uma senha com tamanho maior que 5."
            }
            if (this.adress.logradouro !== "") {
                this.userData.street = `${this.adress.logradouro} - ${this.adress.bairro}`
            }
            if (this.adress.localidade !== "") {
                this.userData.state = `${this.adress.localidade} - ${this.adress.uf}`
            }
            if (Object.values(this.userData).includes("")) {
                return this.error = true
            }
            return this.error = false
        },
        register() {
            const router = useRouter()
            const url = `userProfile/${this.userData.phone}`
            console.log("url", url)
            console.log(router)
            this.checkFields()
            if (this.error === false) {
                localStorage.setItem(String(this.userData.phone), JSON.stringify(this.userData))
                router.push(`userProfile/${this.userData.phone}`)
            }
        }
    }
}
</script>

<template>
    <div class="flex text-white justify-center">
        <div class="bg-cream text-charcoal font-sans leading-normal overflow-x-hidden lg:overflow-auto">
            <main class="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col">
                <div class="flex justify-center flex-no-shrink text-white mr-2">
                    <svg class="h-8 w-8 mr-2 fill-red-600" width="54" height="54" viewBox="0 0 54 54"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                    </svg>
                    <span
                        class="block lg:inline-block lg:mt-0 text-gray-200 font-semibold text-xl tracking-tight">Locafilmes</span>
                </div>
                <section class="bg-cream-lighter p-4 shadow round-50">
                    <div class="md:flex justify-center">
                        <h2 class="uppercase overline underline tracking-wide text-sm sm:text-lg mb-5">Crie
                            uma conta</h2>
                    </div>
                    <form class="bg-slate-600 p-10 rounded-md" @submit.prevent="register()">
                        <span class=" text-xs flex justify-end -mt-5 mb-10">*Todos os campos são obrigatórios.</span>
                        <div class="md:flex mb-8">
                            <div class="md:w-1/3">
                                <legend class="uppercase tracking-wide text-sm">Nome e Localização</legend>
                            </div>
                            <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <div class="mb-4">
                                    <label class="block uppercase tracking-wide text-xs font-bold">Nome</label>
                                    <input required v-model="userData.name"
                                        class="text-black w-full shadow-inner p-4 border-0" type="text" name="name"
                                        placeholder="Acme Mfg. Co.">
                                </div>
                                <div class="md:flex mb-4">
                                    <div class="w-2/6">
                                        <label
                                            class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">CEP
                                        </label>
                                        <input required v-model="userData.cep" @input="search()"
                                            class="text-black w-full shadow-inner p-4 border-0" type="text" maxlength="8"
                                            name="cep" placeholder="00000-000">
                                    </div>
                                    <div class="md:flex-0 md:pl-3 w-5/6">
                                        <label
                                            class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Estado</label>
                                        <input required v-if="adress.localidade"
                                            class="bg-gray-300 text-black w-full shadow-inner p-4 border-0" type="text"
                                            name="state" :value="adress.localidade + ' - ' + adress.uf"
                                            placeholder="Estado - UF" disabled>
                                        <input required v-else="!adress.localidade" v-model="userData.state"
                                            class="text-black w-full shadow-inner p-4 border-0" type="text" name="state"
                                            placeholder="Estado - UF">
                                    </div>
                                </div>
                                <div class="md:flex mb-4">
                                    <div class="w-5/6">
                                        <label
                                            class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Rua
                                            / Bairro</label>
                                        <input required v-if="adress.logradouro"
                                            class="bg-gray-300 text-black w-full shadow-inner p-4 border-0" type="text"
                                            name="street" :value="adress.logradouro + ' - ' + adress.bairro"
                                            placeholder="Rua das Peras" disabled>
                                        <input required v-else="!adress.logradouro" v-model="userData.street"
                                            class="text-black w-full shadow-inner p-4 border-0" type="text" name="street"
                                            placeholder="Rua das Peras">
                                    </div>
                                    <div class="md:flex-1 md:pl-3">
                                        <label
                                            class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Número</label>
                                        <input required v-model="userData.number"
                                            class="text-black w-full shadow-inner p-4 border-0" type="text" name="number"
                                            placeholder="00">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="md:flex mb-8">
                            <div class="md:w-1/3">
                                <legend class="uppercase tracking-wide text-sm">Informações de Contato</legend>
                            </div>
                            <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <div class="mb-4">
                                    <label class="block uppercase tracking-wide text-xs font-bold">Telefone</label>
                                    <input required v-model="userData.phone"
                                        class="text-black w-full shadow-inner p-4 border-0" type="text" maxlength="11"
                                        name="phone" placeholder="(XX)9000-0000">
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">E-mail</label>
                                    <input required v-model="userData.email"
                                        class="text-black w-full shadow-inner p-4 border-0" type="email" name="email"
                                        placeholder="meu.email@dominio.com">
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Senha</label>
                                    <input required v-model="userData.password"
                                        class="text-black w-full shadow-inner p-4 border-0" type="password" name="password"
                                        placeholder="***********">
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <span v-if="error === true" class="bg-red-700 text-lg p-2 rounded-lg">{{ errorMsg }}</span>
                        </div>
                        <div class="flex items-center px-3 my-8 justify-end">
                            <button @click="register()"
                                class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled: bg-white text-black h-10 px-4 py-2 hover:bg-red-500 hover:ring hover:text-white ring-white h-10 px-4 py-2 duration-200">
                                Finalizar Cadastro
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    </div>
</template>