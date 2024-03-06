<template>
    <!-- <div id="gallery" >
        <div class="row m-0 mb-4">
            <div class="col align-self-center position-relative" style="width: 40px;"> 
                <img style="cursor: pointer; width: 60%;" src="../../source/left-arrow.png" onclick="setPictGallery(0, 'galleryPict')" alt="arrowLeft"> 
            </div>
            <div class="col col-9 p-0" > 
                <img id="galleryPict" style="width: 50%;"class=" justify-self-center" src="" alt="gallaryImage"> 
            </div>
            <div class="col align-self-center position-relative" style="width: 60px;"> 
                <img style="cursor: pointer; width: 60%;" src="../../source/right-arrow.png" onclick="setPictGallery(1, 'galleryPict')" alt="arrowLeft"> 
            </div>
        </div>
    </div> -->
</template>

<script>
    // setPictGallery(2, 'galleryPict');
//     class Gallery {
//     constructor() {
//         this.picts = []
//         this.galleryNumb = 0;
//         this.init()
//     }
//     init(){
//         for(let i = 1; i <= 5; i++) {
//             this.picts.push("./source/musicActiv" + i + ".png")
//         }
//     }
//     getPictGallery(direction) {
//         if(direction == 1) {
//             this.galleryNumb++;
//             if(this.galleryNumb > this.picts.length-1) {
//                 this.galleryNumb = 0;
//             } 
//         } else if(direction == 0) {
//             this.galleryNumb--;
//             if(this.galleryNumb < 0) {
//                 this.galleryNumb = this.picts.length-1;
//             } 
//         }
//         return this.picts[this.galleryNumb];
//     }
// }

// const base = new Gallery();
// function setPictGallery(flag, imgSrc) {
//     try{
//         document.getElementById(imgSrc).src = base.getPictGallery(flag);
//     } catch(e) {
//         alert(e.name + ": SetPictGallery " + ". " + e.message);
//     }
// }
</script>