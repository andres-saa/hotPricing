<script setup>
import { ref, onMounted } from 'vue';
import '@/style.css'

onMounted(() => {
});

const dropdownValue = ref(null);
const dropdownValues = ref([
    { name: 'Medellin', code: 'NY',ruta:'#/ciudad?ciudad=Medellín' },
    { name: 'Pereira', code:  'RM' ,ruta:'#/ciudad?ciudad=Pereira' },
    { name: 'Popayan', code: 'LDN',ruta:'#/ciudad?ciudad=Popayán'  },

]);

</script>

<template>

    <div class="cont-nabvar py-4 px-4 mx-0 lg:ml-8 lg:mr-8 flex align-items-center justify-content-between relative lg:static mb-3 position-static">

        <!-- logo -->
        

        <!-- menu responsive -->
        <a class="cursor-pointer block lg:hidden text-700 p-ripple" v-ripple
            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
            <i class="pi pi-bars text-4xl"></i>
        </a>


        
        <!-- barra de navegacion  -->
        <div class=" mr-8 ml-8 align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2" style="top: 120px">
            
           
        <a class="" href="#">
            <p class="text-900 font-medium text-4xl  line-height-3 "> <b> HotPricing</b> </p>
        </a>
              
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                
                
               
                <li>
                    <a href="/#home"
                        class="flex m-0  px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                        <span>Home</span>
                    </a>
                </li>


                <li>
                    <a @click="smoothScroll('#Novedades')"
                        class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                        <span>Novedades</span>
                    </a>
                </li>
                
                <li>
                    <div class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" style="width: ; display: flex; gap: 30px; align-items: center; justify-content: center; width: auto;  ">
                    <Dropdown style="width: 25vw;" v-model="dropdownValue" :options="dropdownValues" optionLabel="name"
                        placeholder="Destino" href="ruta" />
                        
                    </div>
                    

                </li>
                <a :href="dropdownValue? dropdownValue.ruta : '/#home'" @click="location.href=location.href">
                    <button type="button" class="btn btn-outline-secondary m-3"><i class="bi bi-search"></i></button>
                </a>


            </ul>
            <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                <a href="#/"><Button label="Logout "
                        class="p-button-text p-button-rounded border-none font-light line-height-2 text-red-500"></Button>
                </a>
            </div>
        </div>

    </div>

</template>
<style lang="scss" scoped>
@import '@/assets/demo/styles/badges.scss';
@import '@/assets/demo/styles/items.scss';



.cont-nabvar {

border-radius: 10px;
margin-bottom: 1rem;
background-color: rgba(255, 255, 255, 0.5);
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
/* Ajusta los valores según tus preferencias */
margin: 30px 0;
min-width: 1024px;

}

</style>
    