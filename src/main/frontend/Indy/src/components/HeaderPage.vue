<script setup>


</script>

<template>

<div class="headerComponents">
    <img id="imgIsmael" src="../assets/images/titlePageIsmael.png" alt="Page title: Ismael as Indiana Jones">
    <div class="menuItemsHeader">
        <router-link to="/bio"><h1 class="bioItem">Biography</h1></router-link>
        <router-link to="/gallery"><h1 class="galleryItem">Gallery</h1></router-link>
        <router-link to="/bookings"><h1 class="bookingsItem">Bookings</h1></router-link>
        <router-link to="/home"><h1 class="bookingsItem">Home</h1></router-link>
        </div>
</div>

</template>

<style>

*{
    margin: 0;
    padding: 0;
}

.headerComponents{
    background-color: #715846;
   
}

.menuItemsHeader{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;



}

#imgIsmael{
    width: 20%;
    height: 20%;
    margin-top: 2;
    margin-left: 2%;
    margin-bottom: 0.5%;


}

.bioItem{
    width: 3%;
    height: 3%;
    font-family: 'SF Fedora', sans-serif;
    font-size: xx-large;
    color:goldenrod;
    margin-top: 10%;
}

.galleryItem{
    width: 3%;
    height: 3%;
    font-family: 'SF Fedora', sans-serif;
    font-size: xx-large;
    color:goldenrod;
    margin-top: 15%;
}

.bookingsItem{
    width: 3%;
    height: 3%;
    font-family: 'SF Fedora', sans-serif;
    font-size: xx-large;
    color:goldenrod;

}


.btnHome{
    width: 20%;
    height: 50%;
    margin-top: 7%;
    margin-bottom: 5%;
    color:goldenrod;


}



</style>