<template>
    <header
        :class="['fixed w-full z-50 transition-all duration-500', scrolled ? 'bg-app-secondary/90 shadow-lg' : 'bg-transparent']">
        <div class="container mx-auto flex justify-between items-center px-4 py-3">
            <div class="text-2xl font-bold text-white">
                <AppLogo :class="['transition-all fill-app-secondary- duration-500 ', scrolled ? 'w-[30%]' : 'w-[70%]']"
                    :logo_css_class="scrolled ? 'fill-app-primary-900' : 'fill-app-secondary '" />
            </div>
            <nav class="space-x-6 rtl:space-x-reverse text-white">
                <a :href="item.url" :class="[scrolled ? 'hover:text-black' : 'hover:text-app-secondary-100']"
                    v-for="item in nav_items">{{ item.text }}</a>

            </nav>
        </div>
    </header>
</template>

<script lang="ts" setup>
import AppLogo from '@/Assets/AppLogo.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const scrolled = ref(false)


const nav_items = [
    {
        text: "الرئيسية",
        url: ""
    },
    {
        text: "عن المشروع",
        url: ""
    },
    {
        text: "المعرض",
        url: ""
    },
    {
        text: "تواصل معنا",
        url: ""
    },
]


const handleScroll = () => {
    scrolled.value = window.scrollY > 50
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
<style scoped></style>