<script lang="ts" setup>
import CTA from "@/Assets/CTA.vue";
import landingImage from "@/Assets/Images/01.png"
</script>


<template>
    <div class="relative ">

        <div class="main-image">

            <picture class="no-preload w-100">
                <source :srcset="landingImage" media="(min-width:768px)" width="1920" height="1080">

                <img :srcset="landingImage" alt="" width="375" height="800" class="w-100" loading="lazy">
            </picture>
        </div>

        <div class="text1 absolute right-4 bottom-[20%] container text-white">
            <h2 class="text-4xl text-app-secondary-100 font-bold mb-3">
                مشروع تجديد المنطقة الحرة
            </h2>
            <h2 class="text-1x text-lg/7 text-white w-1/3 linhe">
                مبادرة عمرانية تهدف إلى إعادة تصميم وتطوير المنطقة الحرة بما يتماشى مع متطلبات المستقبل، مع الحفاظ على
                الهوية المعمارية والمكانة الاستراتيجية للمنطقة كمركز اقتصادي وحيوي.
            </h2>
        </div>


        <div class="cta-button absolute bottom-0 right-1/2  w-[200px] cursor-pointer  ">
            <CTA stroke_color="#ddbf64" />
        </div>

    </div>
</template>


<style scoped></style>