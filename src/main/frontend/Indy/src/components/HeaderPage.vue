<script setup>


</script>

<template>

<div class="headerComponents">

    <img id="imgIsmael" src="../assets/images/titlePageIsmael.png" alt="Page title: Ismael as Indiana Jones">
    <div class="menuItemsHeader">
        <h1 class="bioItem">Biography</h1><h1 class="galleryItem">Gallery</h1>
    <img class="btnHome" src="../assets/icons/png-clipart-metrostation-black-home-icon-thumbnail-removebg-preview.png" alt="Home button image">
        </div>
</div>

</template>

<style>

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
    width: 30%;
    height: 30%;
    margin-top: 0.4%;
    margin-left: 35%;
    margin-bottom: 0.5%;


}

.bioItem{
    width: 5%;
    height: 5%;
    font-family: 'SF Fedora', sans-serif;
    font-size: xx-large;
    color:goldenrod;
}

.galleryItem{
    width: 5%;
    height: 5%;
    font-family: 'SF Fedora', sans-serif;
    font-size: xx-large;
    color:goldenrod;
}


.btnHome{
    width: 5%;
    height: 5%;
    margin-top: 0.1%;
    margin-bottom: 0.1%;
    color:goldenrod;


}



</style>