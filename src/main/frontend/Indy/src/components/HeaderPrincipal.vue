<script setup>


</script>

<template>

<div class="headerComponents">
    <img id="imgIsmael" src="../assets/images/titlePageIsmael.png" alt="Page title: Ismael as Indiana Jones">
        <router-link to="/home"><h1 class="bookingsItem">Home</h1></router-link>
        </div>


</template>

<style>

*{
    margin: 0;
    padding: 0;
}

.headerComponents{
    background-color: #715846;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
   
}

#imgIsmael{
    width: 20%;
    height: 20%;
    margin-top: 1.2%;
    margin-left: 3%;
    margin-bottom: 1%;
}

.bookingsItem{
    width: 20%;
    height: 50%;
    margin-top: 7%;
    margin-bottom: 5%;
    padding-right: 100px;
    color:goldenrod;


}



</style>