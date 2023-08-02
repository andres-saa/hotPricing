<script setup>

import ProductService from '../service/ProductService';
import { ref, onMounted } from 'vue';
import { convertir } from '@/service/convertir.js'
import { formatearPesos } from '@/service/formatearPesos.js'
import PresentacionHotel from './presentacionHotel.vue';
import CarrucelHotelView from './carrucelHotelView.vue';
import CarrucelHoteles from './carrucelHoteles.vue';
import  modal from './modal.vue'
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm';


const id = ref(72)
const product = ref([])

const productService = new ProductService();

onMounted(() => {
    productService.getProduct(id.value).then((r) => product.value = r)
});



</script>

<template >
    <div class="col-12  ">
        <div class=" grid ">

            <div class="col-12  ">
                <PresentacionHotel></PresentacionHotel>
            </div>



<!-- Modal -->

        </div>


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

.contenedor {
    min-width: 900px;
}

.mapa {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    min-width: 400px;
}

.compra-cont {
    height: 64%;


}

.compra {}

.info-compra {
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
    