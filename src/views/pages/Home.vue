<script setup>
import ProductService from '@/service/ProductService';
import PhotoService from '@/service/PhotoService';
import { ref, onMounted } from 'vue';
import '@/style.css'
import Navegacion from '../../components/navegacion.vue';
import carrucelHoteles from '../../components/carrucelHoteles.vue';
import NovedadesPasadas from '../../components/novedadesPasadas.vue';

const products = ref([]);
const images = ref([]);
const galleriaResponsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '960px',
        numVisible: 4
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);
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

const productService = new ProductService();
const photoService = new PhotoService();

onMounted(() => {
    productService.getProductsSmall().then((data) => (products.value = data));
    photoService.getImages().then((data) => (images.value = data));
});

const dropdownValue = ref(null);
const dropdownValues = ref([
    { name: 'Medellin', code: 'NY' },
    { name: 'Pereira', code: 'RM' },
    { name: 'Popayan', code: 'LDN' },

]);

const news = ref([])
const getNews = async () => {
    const dats = await fetch('http://127.0.0.1:8000/api/new/')
    .then(response => response.json())
    .then(data => {
        news.value = data
    })
    .catch(error => {
            console.error('Error:', error);
    });
}

getNews()


</script>

<template>

    <Navegacion/>


    
        <div class="grid p-fluid lg:ml-8 lg:mr-8   cont-papel">

            <carrucelHoteles/>

            <div class="col-12 noticias">
                <div class=" text-left mt-8 mb-4 ml-4">
                <h2 class="text-900 font-normal mb-2 text-6xl">Novedades</h2>
                <span class="text-600 text-2xl">Noticias de esta semana</span>
            </div>
                <div class=" grid justify-content-center col-12 noticias " v-for="n in [news[1], news[2]]">
                    
                    <div v-if="n == news[1]" class="grid justify-content-center col-12 noticia">

                        <div class="lg:col-4 md:col-4 xl:col-7 magen-noticia-grande-cont">
                            <img class="imagen-noticia-grande" :src="n.image" alt="">
                        </div>


                        <div class="lg:col-8 md:col-8 xl:col-5 cont-contenido-noticia">
                            <p class="text-1000 text-2xl  text-justify  contenido-noticia">
                                <b> <span class="text-4xl"> {{ n.title }} </span> </b><br> lore Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit. Itaque eum fuga ipsum facere. Doloremque inventore perspiciatis
                                expedita mollitia consequatur quasi ad nihil velit autem, officiis unde sed
                                reprehenderit nemo tenetur.
                            </p>
                        </div>

                    </div>
 

                    <div v-else class=" grid justify-content-center col-12 noticia">


                        <div class="lg:col-8 md:col-8 xl:col-5 cont-contenido-noticia">
                            <p class="text-1000 text-2xl  text-justify  contenido-noticia">
                                <b> <span class="text-4xl"> {{ n.title }} </span> </b><br> lore Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit. Itaque eum fuga ipsum facere. Doloremque inventore perspiciatis
                                expedita mollitia consequatur quasi ad nihil velit autem, officiis unde sed
                                reprehenderit nemo tenetur.


                            </p>


                        </div>

                        <div class="lg:col-4 md:col-4 xl:col-7 magen-noticia-grande-cont">
                            <img class="imagen-noticia-grande" :src=n.image alt="">
                        </div>


                    </div>




                </div>


            </div>

            <NovedadesPasadas/>

        </div>


</template>

<style lang="scss" scoped>
@import '@/assets/demo/styles/badges.scss';
@import '@/assets/demo/styles/items.scss';




.imagen-noticia-grande {

width: 100%;
object-fit: cover;
height: 40vh;
transition: width 2s ease;
position: relative;
transition: all 1s ease;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); 
overflow: hidden;
object-position: center center;


}

.magen-noticia-grande-cont{

border-radius: 10px;
object-fit: cover;
height: 40vh;
transition: width 0.5s ease;
position: relative;
transition: all 1s ease;

overflow: hidden;
position: relative;

}


.imagen-noticia-grande:hover {


z-index: 2;
object-position: center -2vh;
}

.contenido-noticia{

                            width: 100%; 
                            overflow: hidden; 
                            height: 40vh;
                            transition: width 1s ease;
}

.noticia{

border-radius: 10px;
margin-bottom: 1rem;
background-color: white;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); /* Ajusta los valores según tus preferencias */
margin: 0 auto;
margin-left: 0;
margin-right: 0;
}

.cont-papel{

border-radius: 10px;
margin-bottom: 1rem;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); /* Ajusta los valores según tus preferencias */
margin: 30px 0;
background-image: url('https://previews.123rf.com/images/yamabikay/yamabikay1711/yamabikay171100188/90036863-textura-de-papel-fondo-blanco-de-la-textura-del-papel-de-acuarela-foto-de-alta-resoluci%C3%B3n.jpg');


}

.noticias{
margin-right: 0;
padding-right: 0;




}


</style>
    