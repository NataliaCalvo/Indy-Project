<template>
    <body>
<img class= "galleryTitle" src="../assets/images/galleryTitle.png">
<span class="line"></span>
<section class="gallery">
<a href="#image1"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image2"><img src="../assets/images/14.JPG" alt=""></a>
<a href="#image3"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image4"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image5"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image6"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image7"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image8"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image9"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image10"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image11"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image12"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image13"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image14"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image15"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image16"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image17"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image18"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image19"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image20"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image21"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image22"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image20"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image21"><img src="../assets/images/11.JPG" alt=""></a>
<a href="#image22"><img src="../assets/images/11.JPG" alt=""></a>
</section>
<article class="lightBox" id="image1">
    <img src="../assets/images/11.JPG" alt="">
    <a href="#img2" class="close">X</a>

</article>

    <article class="lightBox" id="image2">
    <a href="#img1" class="next"><i class="fa-solid fa-arrow-left"></i></a>
    <img src="../assets/images/14.JPG" alt="">
    <a href="#" class="close">X</a>
    <a href="#img3" class="next"><i class="fa-solid fa-arrow-right"></i></a>
</article>



<a href="#start">Click Me!</a>
<div class="start"></div>

</body>




</template>
<style scoped>
*{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
}

body{
    background: linear-gradient(to right, rgb(252, 74, 26), rgb(247, 183, 51));
}

.galleryTitle{
margin-left: 35%;
size: 10%;
padding: 40px 0 30px 0;

}

.line{
    background: #715846;
    height: 5px;
    width: 100%;
    display: block;
}

.gallery{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    width: 95%;
    margin: auto;
    grid-gap: 10px;
    padding: 40px 0;
    overflow: hidden;
}
.gallery > a{
    display: block;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 6px rgba(0, 0, blue, alpha);

}

.gallery a:hover{
    filter:blur(2px);



}

.gallery img{
    width: 100%;
    vertical-align: top;
    height: 300px;
    object-fit: cover;

}

.lightBox{
    position: fixed;
    top:0;
    left: 0;
    background: rgba(0,0,0,0.5);
    width:100%;
    height:100vh;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0);

}
.lightBox img{
    width: 30vw;
}

.lightBox:target{
    transform: scale(1);
}
.close{
    display: flex;
    flex-direction: column;
    font-size: xx-large;
    background-color: #851919;
    color: white;
    text-decoration: none;
    width:60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 50%;
}





</style>