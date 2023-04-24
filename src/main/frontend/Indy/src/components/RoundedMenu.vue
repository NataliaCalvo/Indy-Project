<script>
</script>

<template>
<div class="imagesRounded">   
    <div class="imagesRounded1"> 
    <router-link to="/bio"><img class="roundedMenu1" width="480" height="380" src="../assets/images/img1Menu.JPG" alt= "Ismael as Indiana Jones with the Golden Idol"></router-link></div>
    <div class="imagesRounded2"> 
    <router-link to="/gallery"><img class="roundedMenu2" width="480" height="380" src="../assets/images/img2Alternative.JPG" alt="Ismael as Indiana Jones with the Staff of Ra"></router-link></div>
    <div class="imagesRounded3"> 
    <router-link to="/bookings"><img class="roundedMenu3" width="480" height="380" src="../assets/images/imgAlternative33.JPG" alt="Ismael as Indiana Jones with the Golden Idol"></router-link></div>
</div>  
<div class="titlesMenu">
    <router-link to="/bio"><h1 class="bioTitle">Biography</h1></router-link>
    <router-link to="/gallery"><h1 class="galleryTitle">Gallery</h1></router-link>
    <router-link to="/bookings"><h1 class="bookingTitle">Bookings</h1></router-link>
</div>
</template>


<style>
a:link, a:visited, a:active {
    text-decoration:none;
}
.imagesRounded{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2%;
    background: none;
}
.imagesRounded1{
    width: 33%;
    height: 5%;
}
.imagesRounded2{
    width: 33%;
    height: 5%;
    
}
.imagesRounded3{
    width: 33%;
    height: 5%;
    
}
.titlesMenu{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: 'SF Fedora', sans-serif;
    font-size: medium;
}
.bioTitle {
    margin-left: 40%;
    color: goldenrod;
    
}
.galleryTitle{
    margin-right: 50px;
    margin-left: 100px;
    color: orangered;
}
.bookingTitle{
    margin-right: 200px;
    color: orangered;
}
.roundedMenu1{
    width: 50%;
    height: 70%;
    border-radius: 100%;
    margin-left: 200px;
}
.roundedMenu2{
    width: 50%;
    height: 70%;
    border-radius: 100%;
    margin-left: 100px;
}
.roundedMenu3{
    width: 50%;
    height: 70%;
    border-radius: 100%;
    margin-left: 0px;
}
</style>