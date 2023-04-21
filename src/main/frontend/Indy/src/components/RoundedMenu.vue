<script>

</script>

<template>
<div class="imagesRounded">   
    <img class="roundedMenu1" src="../assets/images/img1Menu.JPG" alt="Ismael as Indiana Jones with the Golden Idol">
    <img class="roundedMenu2" src="../assets/images/img2Alternative.JPG" alt="Ismael as Indiana Jones with the Staff of Ra">
    <img class="roundedMenu3" src="../assets/images/imgAlternative33.JPG" alt="Ismael as Indiana Jones with the Golden Idol">
</div>  
<div class="titlesMenu">
    <h1 class="bioTitle">Biography</h1>
    <h1 class="galleryTitle">Gallery</h1>
    <h1 class="bookingTitle">Bookings</h1>
</div>
</template>


<style>

.imagesRounded{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 0.7%;
    background: none;

}

.titlesMenu{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: 'SF Fedora', sans-serif;
    font-size: medium;
    background: none;

}

.bioTitle {
    margin-left: 6%;
}

.galleryTitle{
    margin-right: 1.5%;
}

.bookingTitle{
    margin-right: 8%;
}


.roundedMenu1{

    width: 15%;
    height: 20%;
    border-radius: 100%;
}

.roundedMenu2{

width: 15%;
height: 283px;
border-radius: 100%;
}

.roundedMenu3{

width: 15%;
height: 283px;
border-radius: 100%;
}

</style>