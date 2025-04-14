<script setup lang="ts">
const props = defineProps({
    stroke_color: {
        type: [String],
        default: "stroke-app-primary-900",
    },
    text_color: {
        type: [String],
        default: "text-white",
    },

});
</script>
<template>



    <div class="relative svg-container">

        <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="z-30">

            <!-- uncolored paths -->
            <g clip-path="url(#clip0_46_46)">
                <path
                    d="M398.5 200C398.5 309.629 309.629 398.5 200 398.5C90.3715 398.5 1.5 309.629 1.5 200C1.5 90.3715 90.3715 1.5 200 1.5C309.629 1.5 398.5 90.3715 398.5 200Z"
                    stroke="#999" stroke-width="3" />

                <!-- d="M498.5 250C498.5 387.243 387.243 498.5 250 498.5C112.757 498.5 1.5 387.243 1.5 250C1.5 112.757 112.757 1.5 250 1.5C387.243 1.5 498.5 112.757 498.5 250Z" -->



            </g>

            <!-- colored paths -->
            <g clip-path="url(#clip0_46_46)">
                <!-- d="M498.5 250C498.5 387.243 387.243 498.5 250 498.5C112.757 498.5 1.5 387.243 1.5 250C1.5 112.757 112.757 1.5 250 1.5C387.243 1.5 498.5 112.757 498.5 250Z" -->
                <path
                    d="M398.5 200C398.5 309.629 309.629 398.5 200 398.5C90.3715 398.5 1.5 309.629 1.5 200C1.5 90.3715 90.3715 1.5 200 1.5C309.629 1.5 398.5 90.3715 398.5 200Z"
                    :stroke="props.stroke_color" stroke-width="3" class="draw-outer-circle-path"
                    stroke-dasharray="0 2000" />

                <line x1="370" y1="151.225" x2="198.987" y2="151.248" :stroke="props.stroke_color"
                    stroke-width="2.44949" class="line-path" />
                <path class="arrow-path"
                    d="M196.972 150.008C196.412 150.569 196.412 151.477 196.972 152.038L206.104 161.167C206.665 161.727 207.573 161.727 208.133 161.167C208.693 160.607 208.693 159.698 208.133 159.138L200.016 151.023L208.131 142.905C208.691 142.345 208.691 141.436 208.131 140.876C207.57 140.316 206.662 140.316 206.101 140.876L196.972 150.008ZM198.986 149.588L197.986 149.588L197.987 152.458L198.987 152.457L198.986 149.588Z"
                    :fill="props.stroke_color" />
            </g>
            <defs>
                <clipPath id="clip0_46_46">
                    <rect width="500" height="500" fill="white" />
                </clipPath>
            </defs>
        </svg>


        <span :class="['z-20 absolute bottom-[35%] right-[30%] text-md', props.text_color]">تعرف علينا اكثر</span>
    </div>



</template>


<style scoped>
.draw-outer-circle-path {
    stroke-dasharray: 0, 2000;
    transition: stroke-dasharray 0.75s;

}

.svg-container:hover .draw-outer-circle-path {
    stroke-dasharray: 1600, 2000;
}


svg .line-path,
svg .arrow-path {
    transform-origin: 100% 100%;
    transition: transform 1s;
}


.svg-container:hover .line-path {
    transform: scaleX(1.15);
}

.svg-container:hover .arrow-path {
    transform: translateX(-45px)
}

@keyframes draw {
    to {
        stroke-dashoffset: 5000;
    }
}
</style>