<script setup>
import { ref, onMounted } from 'vue';
import ProductService from '../service/ProductService';


const images = ref([]);
const carouselResponsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '820px',
        numVisible: 1,
        numScroll: 1
    }
]);

const news = ref([])

const productService = new ProductService();

onMounted(() => {
    productService.getNews().then((data) => (news.value = data));
});

</script>

<template>




<div class=" noticias">
                <div class=" text-left mt-8 mb-4 ml-4">
                <h2 class="text-900 font-normal mb-2 text-6xl">Te enteraste?</h2>
                <span class="text-600 text-2xl">Noticias de la semana pasada</span>
</div>
</div>
        <div class=" col-12 " >
            
            
                <div class="card col-12 cont" >
                    <Carousel :value="news" :numVisible="3" :numScroll="2" :circular="true"
                        :responsiveOptions="carouselResponsiveOptions">
                        <template #item="product">
                            <div class="product-item" style="">
                                <div class=" d-flex flex-column align-items-center justify-content-center"
                                    style="widows: 100%; margin: 10px;">
                                    <div class="mb-3 d-flex flex-column " style=" overflow: hidden; width: 100%; border: none ;">
                                        <img :src="product.data.image" :alt="product.data.preciontes"
                                            class="product-image" style="width:100%; 
                                                    height: 30vh; 
                                                    object-fit: cover;
                                                    border-radius: 10px;
                                                    overflow: hidden;
                                        
                                                    transition: width 0.2s ease;

                                                    " onmouseover="
                                                    this.style.width='110%'; " onmouseout="
                                                    this.style.width='100%'; 

                                                    " />
                                    </div>
                                    <div>
                                        <h4 class="mb-1 d-flex align-items-center justify-content-center">
                                            <b>{{ product.data.title }}</b>
                                        </h4> <br>
                                        <p class="text-1000 text-2xl  text-justify">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia iusto optio, hic corporis sint sunt ullam voluptas aut fugiat corrupti numquam sapiente, dolor laborum, modi obcaecati. Inventore, ratione praesentium?
                                        </p>
                                        <div class="car-buttons mt-5">
                                        </div>
                                    </div>
                                </div>
                            </div>
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
background-color: rgb(255, 255, 255);
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); /* Ajusta los valores según tus preferencias */
margin: 30px 0;
}
</style>
    