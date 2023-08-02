<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ref, computed } from 'vue';
import AppConfig from '@/layout/AppConfig.vue';

const { layoutConfig } = useLayout();
const email = ref('');
const password = ref('');
const checked = ref(false);

const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});
</script>

<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            
            <div style=" border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--red-500) 10%, rgba(0, 0, 0, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <img src="/demo/images/login/avatar.png" alt="Image" height="50" class="mb-3" />
                        <div class="text-900 text-3xl font-medium mb-3">Bienvenido</div>
                        <span class="text-600 font-medium">inicia sesion para continuar</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Correo electronico</label>
                        <InputText id="email1" type="text" placeholder="Correo electronico" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="email" />

                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Contrasena</label>
                        <Password id="password1" v-model="password" placeholder="Contrasena" :toggleMask="true" class="w-full mb-3" inputClass="w-full" inputStyle="padding:1rem"></Password>

                        <div class="flex align-items-center justify-content-between mb-5 gap-5">
                            <div class="flex align-items-center">
                                <Checkbox v-model="checked" id="rememberme1" binary class="mr-2"></Checkbox>
                                <label for="rememberme1">Recordar</label>
                            </div>
                            <a class="font-medium no-underline ml-2 text-right cursor-pointer text-red-500" style="color: var(--red--500)">Olvido su contrasena ?</a>
                        </div>
                        <a :href="email=='andres.admin@gmail.com'? '/#admin': '/#home' "> <Button label="Iniciar sesion" class="w-full p-3 text-xl bg-red-500"></Button> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AppConfig simple />
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
