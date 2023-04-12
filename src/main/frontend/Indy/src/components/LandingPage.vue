<script setup>

</script>

<template>
<main>
<!-- <h1 id="titleWeb">ISMAEL AS INDIANA JONES</h1> -->
<img id="imgIsmael" src="../assets/images/titlePageIsmael.png" alt="Page title: Ismael as Indiana Jones">
<div id="imgLanding">
        <img src="../assets/images/IndyColor.png" class="coloredImage" alt="Image of Ismael as Indiana Jones shooting with his weapon in grey shadows">
</div>
<!-- <h2 id="clickEnter">CLICK TO ENTER</h2> -->
<img id="imgClickToEnter" src="../assets/images/imgClickToEnter.png" alt="Click the image above to enter">
<div class="lastRow">
    <div class="iconSocialMedia">
        <img class="iconFacebook" src="../assets/icons/png-transparent-computer-icons-facebook-blog-facebook-logo-desktop-wallpaper-facebook-icon-removebg-preview.png" alt="Facebook Link">
        <img class="iconTwitter" src="../assets/icons/twitter-logo-vector-png-clipart-1-removebg-preview.png" alt="Twitter Link">
        <img class="iconInstagram" src="../assets/icons/instagram-logo-png-transparent-background-1024x1024-1-removebg-preview.png" alt="Instagram Link">
        <img class="iconYoutube" src="../assets/icons/png-transparent-youtube-logo-youtube-red-logo-computer-icons-youtube-television-angle-rectangle-thumbnail-removebg-preview.png" alt="Youtube Link">

    </div>
</div>
</main>
</template>

<style scoped>

@import url('https://fonts.cdnfonts.com/css/sf-fedora-titles');
@font-face {
    font-family: 'Fedora';
    src: url('../assets/fonts/SF\ Fedora\ Symbols.ttf');
}

body { min-height: 100%; padding: none;}
main {
    padding: none;
    font-family: 'SF Fedora Titles', sans-serif;
    display: flex;
    flex-direction: column;
    align-content: center;
    size-adjust: 100%;
    background-image: url("../assets/images/FondoLanding.png");
    border-image: 5px;
    opacity: 0,5;
    background-repeat: no-repeat;
    background-size: cover;

}

    #imgIsmael{
        width: 80%;
        margin-left: 200px;
        margin-top: 30px;
    }
    
    #imgClickToEnter {
        width: 50%;
        margin-left: 500px;
        margin-top: 30px;
    }

    #imgLanding {
        width: 80%;
        height: 80%;
        margin-left: 700px;
        margin-top: 100px;
        position: relative;
        display: inline-block;
    }
    .coloredImage{
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);

    }

    .coloredImage:hover{
        filter: grayscale(0%);
        -webkit-filter: grayscale(0%);
        -moz-filter: grayscale(0%);
        -ms-filter: grayscale(0%);
        -o-filter: grayscale(0%);
    }

    #imgLanding:hover .coloredImage{
        display: inline;
    }


#titleWeb{
    font-family: 'Fedora', sans-serif;
    font-weight: bolder;
    font-size: xx-large;
    margin-top: 30px;
    margin-left: 700px;
}

#clickEnter {
    font-family: 'SF Fedora Titles', sans-serif;
    font-size: xx-large;
    font-weight: bold;
    margin-left: 800px;
    margin-bottom: 1px;
}
#lastRow {
    display: flex;
    flex-direction: row;
    justify-content: space-around;






}
        .iconSocialMedia {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            margin-left: 100px;
            margin-top: 50px;


        }
        .iconFacebook{
            width: 5%;
            height: 5%;
        }
        .iconTwitter{
            width: 5%;
            height: 5%;
        }
        .iconInstagram {
            width: 5%;
            height: 5%;
        }
        .iconYoutube {
            width: 5%;
            height: 5%;
        }




</style>