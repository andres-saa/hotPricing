<script setup>
import AppMenu from './AppMenu.vue';
</script>

<template>

    <div class="col-12 ">
        <a href="/#crudHoteles">

            <div class="card p-2 mb-0 ">
                <div class="card m-o p-0 position-relative ">
                    <div class="titulo-cont  position-absolute   ">
                        <p class="titulo col-12 text-bold p-0 text-4xl   ">Hoteles</p>
                    </div>
                    <img src="https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
                
                
            </div>
        </a>
        
    </div>

    <div class="col-12 ">
        <a href="/#crudNoticias/">

            <div class="card p-2 mb-0 ">
                <div class="card m-o p-0 position-relative ">
                    <div class="titulo-cont  position-absolute   ">
                        <p class="titulo col-12 text-bold p-0 text-4xl   ">Noticias</p>
                    </div>
                    <img src="https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
                
                
            </div>
        </a>
        
    </div>

    <div class="col-12 ">
        <a href="#/pages/crudNoticias/">

            <div class="card p-2 mb-0 ">
                <div class="card m-o p-0 position-relative ">
                    <div class="titulo-cont  position-absolute   ">
                        <p class="titulo col-12 text-bold p-0 text-4xl   ">Usuarios</p>
                    </div>
                    <img src="https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
                
                
            </div>
        </a>
        
    </div>

    <div class="col-12 ">
        <a href="#/pages/crudNoticias/">

            <div class="card p-2 mb-0 ">
                <div class="card m-o p-0 position-relative ">
                    <div class="titulo-cont  position-absolute   ">
                        <p class="titulo col-12 text-bold p-0 text-4xl   ">Reportes</p>
                    </div>
                    <img src="https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
                
                
            </div>
        </a>
        
    </div>

</template>




<style lang="scss" scoped>

.titulo{
    color: #fff;
    width: 100%;
    text-align: center;
    padding: 0;
    margin: 0;
    height: min-content;
    transition:all 0.3s ease;
 
}

.titulo-cont:hover  .titulo{
    scale: 1.3;

}
.titulo-cont{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0,0.4);
    
}
</style>
