<script setup>

import ProductService from '../service/ProductService';
import { ref, onMounted } from 'vue';
import { convertir } from '@/service/convertir.js'
import { formatearPesos } from '@/service/formatearPesos.js'
import router from '../router';
import { useRoute } from 'vue-router';



const display = ref(false);
const open = () => {
    display.value = true;
};

const props = defineProps(['hotel'])
const ruta = useRoute()

console.log(ruta.params)

const id = ref(72)
const product = ref([])


// onMounted(() => {
    
//     console.log(id.value)
//     productService.getProduct(39).then((r) => product.value = r)
// });


const productService = new ProductService();

onMounted(() => {
    id.value = ruta.params.hotel
    productService.getProduct(id.value).then((r) => product.value = r)
});


</script>



<template >
    <div class="col-12  ">
        <div class="  grid ">
            <div class="col-8 m-auto contenedor ">
                <div class=" cont  ">
                    <div class="grid md:col-12   contenedor-hotel-info ">
                        <div class="col-7 product-image-hotel-cont p-3 pl-6">
                            <img class="product-image-hotel" :src="convertir(product.imagen_uno).src" alt="">
                        </div>

                        <div class="col-5 info-compra p-0">
                            <div class="col-12 product-image-hotel-cont-2 ">
                                <img class="product-image-hotel-small" :src="convertir(product.imagen_dos).src" alt="">
                            </div>

                            <div class="col-12  compra-cont ">
                                
                                    <div class="shadow-2 p-3 h-full compra flex flex-column surface-card"
                                        style="border-radius: 10px">

                                        <div class="text-900 font-medium font-bold text-2xl mb-2">{{ product.hotelname }}</div>
                                        
                                        <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                                        <div class="flex align-items-center">
                                            <span class="font-bold text-4xl mr-4 text-red-200 tachado">$ {{ formatearPesos(product.precio_antes) }}</span>
                                            <span class="font-bold text-2xl text-500">|</span>
                                            <span class="font-bold ml-4 text-4xl text-green-500">$ {{ formatearPesos(product.precio_ahora) }}</span>
                                        </div>


                                       
                                        <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                                        
                                        <div class="d-flex">

                                            <ul class="list-none p-0 m-0 flex-grow-1">
                                            <li class="flex align-items-center mb-3">
                                                <i class="bi bi-airplane-fill text-4xl mr-2 text-balck-500"></i>
                                              
                                                <span>{{ product.ciudad }}</span>
                                            </li>
                                            <li class="flex align-items-center mb-3">
                                                <i class="bi bi-geo-alt-fill text-4xl mr-2 text-red-500"></i>
                                                <span>{{ product.direccion }}</span>
                                            </li>
                                            
                                        </ul>


                                        
                                        
                                        <img class="mini-mapa" @click="open" src="https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22.jpg" alt="">
                                        
                                        <div class=" p-fluid " v-show="false">
                                        <Dialog :header="product.direccion" v-model:visible="display" :breakpoints="{ '960px': '75vw' }" :style="{ width: '80vw' }" :modal="true">
                                            <img class="mapa" src="https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22.jpg" alt="">
                                        </Dialog>
                                        <Button label="Show" icon="pi pi-external-link" style="width: auto" @click="open" />
                                        
                                    </div>





                                        </div>
                                        <hr class="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
                                       <a :href="product.urls">
                                        <Button label="Reservar " class="p-3 w-full mt-auto"></Button>
                                       </a>


                                        

                                    </div>
                             
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="grid">
        
            
        
    </div>


</template>

<style lang="scss" scoped>
@import '@/assets/demo/styles/badges.scss';
@import '@/assets/demo/styles/items.scss';


.tachado {
    text-decoration: line-through;


}

.cont {

    border-radius: 10px;
    margin-bottom: 1rem;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    /* Ajusta los valores según tus preferencias */
    margin: 30px 0;
    min-width: 400px;

   


}

.contenedor{
    min-width: 900px;
}
.mini-mapa {
    width: 50%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.mapa {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.compra-cont{
    height:64%;

    
}
.compra{
    
}
.info-compra{
    height: 100%;
}

.product-image-hotel {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    overflow: hidden;
}

.product-image-hotel-small {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    overflow: hidden;
}

.product-image-hotel-cont {

    height: 100%;
    width: 100%;
}

.product-image-hotel-cont-2 {
    
    width: 100%;
    height: 35%;
}


.info-cont {

    display: flex;

    justify-content: space-between;
    gap: auto;
}

.contenedor-hotel-info {
    height: 70vh;
    min-height: 640px;


}
</style>
    