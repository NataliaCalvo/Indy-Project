<script>

</script>

<template>
<div class="imagesRounded">   
    <RouterLink to="/bio"><img class=roundedMenu1 src="../assets/images/img1Menu.JPG" alt= "Ismael as Indiana Jones with the Golden Idol"></RouterLink>
    <router-link to="/gallery"><img class="roundedMenu2" src="../assets/images/img2Alternative.JPG" alt="Ismael as Indiana Jones with the Staff of Ra"></router-link>
    <router-link to="/bookings"><img class="roundedMenu3" src="../assets/images/imgAlternative33.JPG" alt="Ismael as Indiana Jones with the Golden Idol"></router-link>
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

.titlesMenu{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: 'SF Fedora', sans-serif;
    font-size: medium;


}

.bioTitle {
    margin-left: 26%;
    color: goldenrod;
    
}

.galleryTitle{
    margin-right: 50px;
    margin-left: 50px;
    color: orangered;
}

.bookingTitle{
    margin-right: 200px;
    color: orangered;
}


.roundedMenu1{

    width: 120%;
    height: 80%;
    border-radius: 100%;
    margin-left: 200px;
}

.roundedMenu2{

    width: 25%;
    height: 80%;
    border-radius: 100%;
    margin-left: 550px;
}

.roundedMenu3{

    width: 30%;
    height: 80%;
    border-radius: 100%;
    margin-left: 200px;
}

</style>