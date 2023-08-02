<script setup>
import { ref, onMounted } from 'vue';
import ProductService from '@/service/ProductService';
import { convertir } from '@/service/convertir'
import { formatearPesos } from '@/service/formatearPesos'
import { useRoute } from 'vue-router';
const picklistValue = ref([
    [
        { hotelname: 'San Francisco', code: 'SF' },
        { hotelname: 'London', code: 'LDN' },
        { hotelname: 'Paris', code: 'PRS' },
        { hotelname: 'Istanbul', code: 'IST' },
        { hotelname: 'Berlin', code: 'BRL' },
        { hotelname: 'Barcelona', code: 'BRC' },
        { hotelname: 'Rome', code: 'RM' }
    ],
    []
]);

const orderlistValue = ref([
    { hotelname: 'San Francisco', code: 'SF' },
    { hotelname: 'London', code: 'LDN' },
    { hotelname: 'Paris', code: 'PRS' },
    { hotelname: 'Istanbul', code: 'IST' },
    { hotelname: 'Berlin', code: 'BRL' },
    { hotelname: 'Barcelona', code: 'BRC' },
    { hotelname: 'Rome', code: 'RM' }
]);


const ruta = useRoute()


const ciudad = ref()
const dataviewValue = ref(null);
const layout = ref('grid');
const sortKey = ref(null);
const sortOrder = ref(null);
const sortField = ref(null);
const sortOptions = ref([

    { label: 'Price High to Low', value: '!price' },
    { label: 'Price Low to High', value: 'price' }
]);

const productService = new ProductService();



onMounted(() => {
    ciudad.value = ruta.query.ciudad
    productService.getProductsCity(ciudad.value).then((data) => (dataviewValue.value = data));
    
});

const onSortChange = (event) => {
    const value = event.value.value;
    const sortValue = event.value;

    if (value.indexOf('!') === 0) {
        sortOrder.value = -1;
        sortField.value = value.substring(1, value.length);
        sortKey.value = sortValue;
    } else {
        sortOrder.value = 1;
        sortField.value = value;
        sortKey.value = sortValue;
    }
};

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5 class="text-4xl">Hoteles en {{ ciudad }}</h5>
                <DataView :value="dataviewValue" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder"
                    :sortField="sortField">
                    <template #grid="slotProps">
                        <div class="col-12 md:col-4">
                            <div class="card m-3 border-1 surface-border">
                                <div class="flex align-items-center justify-content-between">
                                    <div class="flex align-items-center">
                                        <i class="pi pi-tag mr-2"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </div>
                                    <span :class="'product-badge status-' + slotProps.data.hotelname.toLowerCase()">{{
                                        slotProps.data.inventoryStatus }}</span>
                                </div>

                                <a :href="`#${slotProps.data.id}`" style="text-decoration: none;">
                                    <div class="text-center cont-img">
                                        <img :src="convertir(slotProps.data.imagen_uno).src" class="imagen" />
                                        <div class="text-2xl font-bold">{{ slotProps.data.hotelname }}</div>
                                        <div class="mb-3">{{ slotProps.data.description }}</div>
                                        <Rating :modelValue="4" :readonly="true" :cancel="false"></Rating>
                                    </div>

                                </a>

                                <div class="flex align-items-center justify-content-between">
                                    <span class="text-2xl font-semibold">${{ formatearPesos(slotProps.data.precio_ahora)
                                    }}</span>

                                    <a :href="slotProps.data.urls">
                                        <Button label="Reservar " class="p-3 w-full mt-auto"></Button>
                                    </a>
                                    </div>
                            </div>
                        </div>
                    </template>

                </DataView>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
@import '@/assets/demo/styles/badges.scss';

.imagen:hover {
    scale: 1.05;
}

.imagen {
    transition: 0.2s ease;
    width: 100%;
    border-radius: 10px;
}

.cont-img {
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
}
</style>
