<template>
    <v-carousel hide-delimiter-background show-arrows height="100%">
        <template v-slot:prev="{ props }">
            <ArrowButton @click="props.onClick"></ArrowButton>
        </template>
        <template v-slot:next="{ props }">
            <ArrowButton :isForward="true" @click="props.onClick"></ArrowButton>
        </template>
        <v-carousel-item cover>
            <ImageBlock>
                <img src="./image/Муз.игра-Капризные бусы.jpg" alt="Муз.игра-Капризные бусы">
            </ImageBlock> 
        </v-carousel-item>
        <v-carousel-item>
            <ImageBlock>
                <img src="./image/Бусы1.jpg" alt="Бусы1">
            </ImageBlock> 
        </v-carousel-item>
        <v-carousel-item>
            <ImageBlock>
                <img src="./image/Бусы2.jpg" alt="Бусы2">
            </ImageBlock> 
        </v-carousel-item>
        <v-carousel-item>
            <ImageBlock>
                <img src="./image/Бусы3.jpg" alt="Бусы3">
            </ImageBlock> 
        </v-carousel-item>
        <v-carousel-item>
            <ImageBlock>
                <img src="./image/Бусы4.jpg" alt="Бусы4">
            </ImageBlock> 
        </v-carousel-item>
    </v-carousel>
</template>
