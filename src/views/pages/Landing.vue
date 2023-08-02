<script setup>
import { useLayout } from '@/layout/composables/layout';
import { computed } from 'vue';
import AppConfig from '@/layout/AppConfig.vue';
import { ref } from 'vue';
import novedadesPasadas  from  '@/components/novedadesPasadas.vue'

const { layoutConfig } = useLayout();

const smoothScroll = (id) => {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
};


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



const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});
</script>

<template>
    <div class="surface-0 flex justify-content-center">
        <div id="home" class="landing-wrapper overflow-hidden">

            <!-- navegacion -->


            <div
                class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static mb-3 position-static">

                <!-- logo -->
                <a class="flex align-items-center" href="#">
                    <span class="text-900 font-bold font-medium text-4xl line-height-3 mr-8">HotPricing</span>
                </a>

                <!-- menu responsive -->
                <a class="cursor-pointer block lg:hidden text-700 p-ripple" v-ripple
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>

                <!-- barra de navegacion  -->
                <div class="align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2"
                    style="top: 120px">
                    <ul
                        class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                        <li>
                            <a @click="smoothScroll('#hero')"
                                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Home</span>
                            </a>
                        </li>

                        <li>
                            <a @click="smoothScroll('#Labor')"
                                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Lo que hacemos</span>
                            </a>
                        </li>
                        <li>
                            <a @click="smoothScroll('#Novedades')"
                                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Novedades</span>
                            </a>
                        </li>

                        <li>
                            <a @click="smoothScroll('#pricing')"
                                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Pricing</span>
                            </a>
                        </li>
                    </ul>
                    <div
                        class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                        <a href="#/auth/login"><Button label="Login "
                                class="p-button-text p-button-rounded border-none font-light line-height-2 text-red-500"></Button></a>
                        <Button label="Register"
                            class="p-button-rounded border-none ml-5 font-light text-white line-height-2 bg-red-500"></Button>
                    </div>
                </div>
            </div>


            <!-- fin navegacion/ -->

            <div id="hero" class="
                flex 
                flex-column 
                pt-4 px-4 
                lg:px-8 
                overflow-hidden 
                justify-content-center 
                align-items-center 
                color-white 
                text-white"
                style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1) 100%), url(https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg);background-size: cover;background-position: center;height:90vh;">


                <div class="mx-4 md:mx-8 mt-0  flex flex-column align-items-center justify-content-center">
                    <h1 class="text-6xl font-bold text-white line-height-2 ">
                        Conecta con tu hotel ideal

                    </h1>
                    <p class="font-normal text-2xl line-height-3 md:mt-3 text-white-200">
                        ¡Reserva ahora y vive una
                        experiencia inolvidable, la aventura te espera!
                    </p>
                    <Button label="Quiero saber mas!"
                        class="p-button-rounded text-xl border-none mt-5 bg-red-500 font-normal text-white line-height-3 px-6 py-4 justify-content-center"></Button>
                </div>


            </div>



            <div id="Labor" class="text-center bg-gray-100  p-5 flex align-items-center justify-content-center flex-column"
                style="height: 40vh;">
                <h2 class="text-6xl font-bold text-black line-height-2 ">
                    Lo que hacemos

                </h2>
                <span class="text-600 text-2xl">Te conectamos con los mejores hoteles al mejor precio disponible. Sabemos lo
                    importante que es para ti encontrar alojamientos de calidad que se ajusten a tu presupuesto, y estamos
                    aquí para hacerlo posible.</span>
            </div>


            <div class="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">

                <div class="grid mt-8 pb-2 md:pb-8">
                    <div class="flex justify-content-start col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0"
                        style="border-radius: 8px">
                        <img src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg" class="w-11"
                            alt="mockup mobile" />
                    </div>

                    <div class="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
                        <div class="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end"
                            style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                            <i class="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
                        </div>
                        <h2 class="line-height-1 text-900 text-4xl font-normal">El confort que que esstas buscando</h2>
                        <span class="text-700 text-2xl line-height-3 ml-0 md:ml-2" style="max-width: 650px">patios con terrazas, áreas de descanso con cómodos asientos y hermosos paisajes naturales para que los huéspedes disfruten de espacios al aire libre. Además, algunos hoteles también están incorporando piscinas con características especiales</span>
                    </div>
                </div>

                <div class="grid my-8 pt-2 md:pt-8">
                    <div class="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
                        <div class="flex align-items-center justify-content-center bg-yellow-200 align-self-center lg:align-self-start"
                            style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                            <i class="pi pi-fw pi-desktop text-5xl text-yellow-700"></i>
                        </div>
                        <h2 class="line-height-1 text-900 text-4xl font-normal">Experiencias inolvidables</h2>
                        <span class="text-700 text-2xl line-height-3 mr-0 md:mr-2" style="max-width: 650px">Algunos hoteles se encuentran en calles famosas y reconocidas, lo que les brinda a los huéspedes la oportunidad de sumergirse en la cultura y el ambiente de la ciudad. Estar ubicado en una calle emblemática puede ofrecer vistas impresionantes, acceso conveniente a atracciones turísticas, tiendas exclusivas, restaurantes de renombre y una experiencia auténtica del lugar.</span>
                    </div>

                    <div class="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0"
                        style="border-radius: 10px; padding: 0;">
                        <img src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg" class="w-11"
                            alt="mockup" style=" border-radius:10px; width:100%; height: 100%; object-fit: cover;" />
                    </div>
                </div>
            </div>

<!-- aqui empiezan las noticias de Jenn y Mariana, noticias recientes -->

            <div id="Novedades" class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
                <div class="col-12 text-center mt-8 mb-4">
                    <h2 class="text-900 font-normal mb-2">Novedades</h2>
                    <span class="text-600 text-2xl">Noticias recientes</span>
                </div>

                <div class="grid justify-content-center ">

                    <div class="col-12 md:col-12 lg:col-6  lg:pr-5 lg:pb-5 mt-4 lg:mt-0" v-for="n in news">
                        <div
                            style="height: 40vh;  border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))">
                            <div class=" cont surface-card h-full " s style=" border-radius: 8px; position: relative;">
                                <div class=" " style="
                                                position: absolute; 
                                                height: 100% ; 
                                                background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.7) 100%); 
                                                overflow: hidden;">

                                    <p class="text-600 text-2xl pl-4 pr-4 text-justify text-white" style="padding-top: 22vh;  overflow: hidden;"><b><span class="text-4xl" style="width: 100$;">  {{ n.title }} </span>  </b><br>  {{  n.contenido }}</p>
                                </div>
                                
                                <img :src=n.image alt="" style="width: 100%; object-fit: cover; height: 100%; border-radius: 10px;">

                            </div>
                        </div>
                    </div>

                </div>
            </div>


<!-- aqui terminan las noticias de mariana y jenn -->

            <div class="py-4 px-4 mx-0 mt-8 lg:mx-8">
                <div class="grid justify-content-between">
                    <div class="col-12 md:col-2" style="margin-top: -1.5rem">
                        <a @click="smoothScroll('#home')"
                            class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                            <img :src="logoUrl" alt="footer sections" width="50" height="50" class="mr-2" />
                            <h4 class="font-medium text-3xl text-900">SAKAI</h4>
                        </a>
                    </div>

                    <div class="col-12 md:col-10 lg:col-7">
                        <div class="grid text-center md:text-left">
                            <div class="col-12 md:col-3">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Company</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">About Us</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">News</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Investor Relations</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Careers</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Media Kit</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Resources</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Get Started</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Learn</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Case Studies</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Community</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Discord</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Events<img
                                        src="/demo/images/landing/new-badge.svg" class="ml-2" /></a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">FAQ</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Blog</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Legal</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Brand Policy</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Privacy Policy</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AppConfig simple />
</template>





<!-- <style scoped>
#hero {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #eeefaf 0%, #c3e3fa 100%);
    height: 700px;
    overflow: hidden;
}

@media screen and (min-width: 768px) {
    #hero {
        -webkit-clip-path: ellipse(150% 87% at 93% 13%);
        clip-path: ellipse(150% 87% at 93% 13%);
        height: 530px;
    }
}

@media screen and (min-width: 1300px) {
    #hero > img {
        position: absolute;
    }

    #hero > div > p {
        max-width: 450px;
    }
}

@media screen and (max-width: 1300px) {
    #hero {
        height: 600px;
    }

    #hero > img {
        position: static;
        transform: scale(1);
        margin-left: auto;
    }

    #hero > div {
        width: 100%;
    }

    #hero > div > p {
        width: 100%;
        max-width: 100%;
    }
}
</style> -->
