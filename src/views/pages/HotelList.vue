<script setup>
import ProductService from '@/service/ProductService';
import PhotoService from '@/service/PhotoService';
import { ref, onMounted } from 'vue';
import '@/style.css'
import NovedadesPasadas from '../../components/novedadesPasadas.vue';
import Navegacion from '../../components/navegacion.vue';
import vistaHotel from '../../components/vistaHotel.vue';
import CarrucelHotelView from '../../components/carrucelHotelView.vue';
import PresentacionHotel from '../../components/presentacionHotel.vue';
import HotelListAux from './HotelListAux.vue';

const props = defineProps(['hotel'])


</script>
 
<template> 

    <Navegacion />

    <div class="cont-papel   lg:ml-8 lg:mr-8   ">

        <HotelListAux/>

    </div>
    

</template>

<style lang="scss" scoped>
@import '@/assets/demo/styles/badges.scss';
@import '@/assets/demo/styles/items.scss';


.cont-papel{

border-radius: 10px;
margin-bottom: 1rem;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); /* Ajusta los valores según tus preferencias */
margin: 30px 0;
background-image: url('https://previews.123rf.com/images/yamabikay/yamabikay1711/yamabikay171100188/90036863-textura-de-papel-fondo-blanco-de-la-textura-del-papel-de-acuarela-foto-de-alta-resoluci%C3%B3n.jpg');
min-width: 1024px;

}
</style>
    