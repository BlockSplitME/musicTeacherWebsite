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
                <img src="./image/image1.png" alt="2_3">
            </ImageBlock> 
        </v-carousel-item>
        <v-carousel-item>
            <ImageBlock>
                <img src="./image/image2.png" alt="3_4">
            </ImageBlock> 
        </v-carousel-item>
        <v-carousel-item>
            <ImageBlock>
                <img src="./image/image3.png" alt="4_5">
            </ImageBlock> 
        </v-carousel-item>
        <v-carousel-item>
            <ImageBlock>
                <img src="./image/image4.png" alt="5_6">
            </ImageBlock> 
        </v-carousel-item>
        <v-carousel-item>
            <ImageBlock>
                <img src="./image/image5.png" alt="6_7">
            </ImageBlock> 
        </v-carousel-item>
    </v-carousel>
</template>