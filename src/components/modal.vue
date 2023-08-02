<script setup>

import { ref} from 'vue';

const display = ref(false);


const open = () => {
    display.value = true;
};


</script>

<template>
    <div class="grid">
        <div class="col-12 lg:col-6">
            <div class="card p-fluid">
                <h5>Dialog</h5>
                <Dialog header="mapa" v-model:visible="display" :breakpoints="{ '960px': '75vw' }" :style="{ width: '80vw' }" :modal="true">
                    <img class="mapa" src="https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22.jpg" alt="">
                </Dialog>
                <Button label="Show" icon="pi pi-external-link" style="width: auto" @click="open" />
            </div>
        </div>
    </div>
</template>

