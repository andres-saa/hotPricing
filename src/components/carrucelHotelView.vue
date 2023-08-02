<script setup>
import ProductService from '@/service/ProductService';
import { ref, onMounted } from 'vue';
import {convertir} from '@/service/convertir.js'
import VistaHotel from './vistaHotel.vue';
import presentacionHotel from './presentacionHotel.vue'
import PresentacionHotelCarrucel from './presentacionHotelCarrucel.vue';

const products = ref([]);
const carouselResponsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '820px',
        numVisible: 1,
        numScroll: 1
    }
]);

const productService = new ProductService();

onMounted(() => {
    productService.getProductsSmall().then((data) => (products.value = data));

});

</script>

<template>

<div class="    " >
                <div class=" text-left mt-8 mb-4 ml-4">
                <h2 class="text-900 font-normal mb-2 text-6xl">Mas opciones</h2>
                <span class="text-600 text-2xl">Una experiencia inolvidables</span>
</div>

</div>
        <div class=" col-12">
            <div class="  col-12  ml-0">
                <Carousel :value="products.slice(0, 10)" :numVisible="1" :numScroll="1" :circular="true" :data-interval="5000"
                    :responsiveOptions="carouselResponsiveOptions">
                    <template #item="product">

                        <PresentacionHotelCarrucel :id="product.data.id"></PresentacionHotelCarrucel>
                    </template>
                </Carousel>

            </div>
        </div>
</template>


<style lang="scss" scoped>
@import '@/assets/demo/styles/badges.scss';
@import '@/assets/demo/styles/items.scss';


.cont{

border-radius: 10px;
margin-bottom: 1rem;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); /* Ajusta los valores según tus preferencias */
background-color: rgb(255, 255, 255);
}




</style>
    