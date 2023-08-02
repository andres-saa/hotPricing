<script setup>
import { FilterMatchMode } from 'primevue/api';
import { ref, onMounted, onBeforeMount } from 'vue';
import ProductService from '@/service/ProductService';
import { useToast } from 'primevue/usetoast';
import { convertir } from '@/service/convertir.js'
import { formatearPesos } from '@/service/formatearPesos.js'

const toast = useToast();

const products = ref(null);
const productDialog = ref(false);
const agregandoProducto = ref(false)
const deleteProductDialog = ref(false);
const deleteProductsDialog = ref(false);
const product = ref({});
const selectedProducts = ref(null);
const dt = ref(null);
const filters = ref({});
const submitted = ref(false);
const statuses = ref([
    { label: 'INSTOCK', value: 'instock' },
    { label: 'LOWSTOCK', value: 'lowstock' },
    { label: 'OUTOFSTOCK', value: 'outofstock' }
]);

const productService = new ProductService();

onBeforeMount(() => {
    initFilters();
});



onMounted(() => {
    productService.getNews().then((data) => (products.value = data));
});






const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const openNew = () => {

    product.value = {};
    submitted.value = false;
    productDialog.value = true;
    agregandoProducto.value=(true)
    console.log(agregandoProducto.value)

};

const hideDialog = () => {
    productDialog.value = false;
    submitted.value = false;
    agregandoProducto.value=(false)
    console.log(agregandoProducto.value)
};



const saveProduct = () => {
    const { id, newname, title, contenido, image } = product.value; // ID de la noticia que deseas editar
    const datosActualizados = {
        // Objeto con los datos actualizados de la noticia
        // Incluye las propiedades que deseas modificar
        id: id,
        newname,
        title,
        contenido,
        image
    };

   
    
    const method = agregandoProducto.value?  "POST":"PUT" ;
    const url = agregandoProducto.value?    'http://127.0.0.1:8000/api/new/':`http://127.0.0.1:8000/api/new/${id}/` ; // Utiliza "PUT" si el ID existe, de lo contrario utiliza "POST"

    fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datosActualizados)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Noticia actualizada/agregada:", data);
            // Realizar cualquier acción adicional después de editar/agregar la noticia
        })
        .catch(error => {
            console.error("Error al actualizar/agregar la noticia:", error);
            // Manejar cualquier error que pueda ocurrir
        });

        productDialog.value = false
    }


const editProduct = (editProduct) => {
    product.value = { ...editProduct };
    const rawValue = { ...product._rawValue };
    productDialog.value = true
    agregandoProducto.value=false
    console.log(agregandoProducto.value=false)
};


const confirmDeleteProduct = (editProduct) => {
    product.value = editProduct;
    deleteProductDialog.value = true;
};

const deleteProduct = () => {
    products.value = products.value.filter((val) => val.id !== product.value.id);
    deleteProductDialog.value = false;
    product.value = {};
    toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
};

const findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < products.value.length; i++) {
        if (products.value[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
};


const createId = () => {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
};


const exportCSV = () => {
    dt.value.exportCSV();
};

const confirmDeleteSelected = () => {
    deleteProductsDialog.value = true;
};
const deleteSelectedProducts = () => {
    products.value = products.value.filter((val) => !selectedProducts.value.includes(val));
    deleteProductsDialog.value = false;
    selectedProducts.value = null;
    toast.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
};

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};



</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <Toast />
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
                            <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected"
                                :disabled="!selectedProducts || !selectedProducts.length" />
                        </div>
                    </template>

                    <template v-slot:end>
                        <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import"
                            class="mr-2 inline-block" />
                        <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)" />
                    </template>
                </Toolbar>

                <!-- fin de la barra de arriba -->
                <DataTable ref="dt" :value="products" v-model:selection="selectedProducts" dataKey="id" :paginator="true"
                    :rows="10" :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    responsiveLayout="scroll">
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">Manage Products</h5>
                            <span class="block mt-2 md:mt-0 p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global'].value" placeholder="Search..." />
                            </span>
                        </div>
                    </template>

                    <!-- <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                    <Column field="code" header="Code" :sortable="true" headerStyle="width:14%; min-width:10rem;">
                        <template #body="slotProps">
                            <span class="p-column-title">Code</span>
                            {{ slotProps.data.code }}
                        </template>
                    </Column> -->
                    <Column field="id" header="id" :sortable="true" headerStyle="width:10%; min-width:8rem;">
                        <template #body="slotProps">
                            <span class="p-column-title">precio</span>
                            {{ slotProps.data.id }}
                        </template>
                    </Column>

                    <Column field="hotelname" header="Name" :sortable="true" headerStyle="width:14%; min-width:10rem;">
                        <template #body="slotProps">
                            <span class="p-column-title">Name</span>
                            {{ slotProps.data.title }}
                        </template>
                    </Column>
                    <Column header="Image" headerStyle="width:14%; min-width:10rem;">
                        <template #body="slotProps">
                            <span class="p-column-title">Image</span>
                            <img :src="slotProps.data.image" :alt="slotProps.data.image" class="shadow-2" width="100" />
                        </template>
                    </Column>
                    <Column field="precio_ahora" header="contenido" :sortable="true"
                        headerStyle="width:40%; min-width:8rem;">
                        <template #body="slotProps">
                            <span class="p-column-title ">precio</span>
                            <p style="text-align: justify; ">
                                {{ slotProps.data.contenido }}
                            </p>

                        </template>
                    </Column>


                    <!-- <Column field="inventoryStatus" header="Status" :sortable="true" headerStyle="width:14%; min-width:10rem;">
                        <template #body="slotProps">
                            <span class="p-column-title">Status</span>
                            <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{ slotProps.data.inventoryStatus }}</span>
                        </template>
                    </Column> -->
                    <Column headerStyle="min-width:10rem;">
                        <template #body="slotProps" class="">
                            <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2"
                                @click="editProduct(slotProps.data)" />
                            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning mt-2"
                                @click="confirmDeleteProduct(slotProps.data)" />
                        </template>
                    </Column>

                </DataTable>


                <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="Product Details" :modal="true"
                    class="p-fluid">
                    <img :src="product.image" :alt="product.image" v-if="product.image" width="150"
                        class="mt-0 mx-auto mb-5 block shadow-2" />
                    
                        <div class="field">
                        <label for="Id">Id</label>
                        <InputText id="name" v-model.trim="product.id" required="true" autofocus
                            :class="{ 'p-invalid': submitted && !product.name }" />
                        <small class="p-invalid" v-if="submitted && !product.name">Name is required.</small>
                    </div>
                    
                        <div class="field">
                        <label for="name">Nombre</label>
                        <InputText id="name" v-model.trim="product.newname" required="true" autofocus
                            :class="{ 'p-invalid': submitted && !product.name }" />
                        <small class="p-invalid" v-if="submitted && !product.name">Name is required.</small>
                    </div>

                    
                    <div class="field">
                        <label for="name">Imagen</label>
                        <InputText id="name" v-model.trim="product.image" required="true" autofocus
                            :class="{ 'p-invalid': submitted && !product.name }" />
                        <small class="p-invalid" v-if="submitted && !product.name">Name is required.</small>
                    </div>

                    <div class="field">
                        <label for="name">titulo</label>
                        <InputText id="name" v-model.trim="product.title" required="true" autofocus
                            :class="{ 'p-invalid': submitted && !product.name }" />
                        <small class="p-invalid" v-if="submitted && !product.name">Name is required.</small>
                    </div>

                    <div class="field">
                        <label for="description">Contenido</label>
                        <Textarea id="description" v-model="product.contenido" required="true" rows="3" cols="20" />
                    </div>

                    <div class="field">
                        <label for="inventoryStatus" class="mb-3">Estado</label>
                        <Dropdown id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses"
                            optionLabel="label" placeholder="Select a Status">
                            <template #value="slotProps">
                                <div v-if="slotProps.value && slotProps.value.value">
                                    <span :class="'product-badge status-' + slotProps.value.value">{{ slotProps.value.label
                                    }}</span>
                                </div>
                                <div v-else-if="slotProps.value && !slotProps.value.value">
                                    <span :class="'product-badge status-' + slotProps.value.toLowerCase()">{{
                                        slotProps.value }}</span>
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                        </Dropdown>
                    </div>


                    <template #footer>
                        <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
                        <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
                    </template>
                </Dialog>



                <Dialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
                    <div class="flex align-items-center justify-content-center">
                        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                        <span v-if="product">Are you sure you want to delete <b>{{ product.name }}</b>?</span>
                    </div>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false" />
                        <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
                    </template>
                </Dialog>

                <Dialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
                    <div class="flex align-items-center justify-content-center">
                        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                        <span v-if="product">Are you sure you want to delete the selected products?</span>
                    </div>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false" />
                        <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />
                    </template>
                </Dialog>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/demo/styles/badges.scss';
</style>
