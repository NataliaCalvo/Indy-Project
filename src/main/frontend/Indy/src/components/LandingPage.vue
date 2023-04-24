<script setup>

</script>

<template>
<main>
<!-- <h1 id="titleWeb">ISMAEL AS INDIANA JONES</h1> -->
<img id="imgIsmael" src="../assets/images/titlePageIsmael.png" alt="Page title: Ismael as Indiana Jones">
<div id="imgLanding">
        <router-link to="/principal"><img src="../assets/images/IndyColor.png" class="coloredImage" alt="Image of Ismael as Indiana Jones shooting with his weapon in grey shadows"></router-link>
</div>
<router-link to="/principal"><img id="imgClickToEnter" src="../assets/images/enterLanding.png" alt="Click the image above to enter"></router-link>
<div class="lastRow">
    <div class="iconSocialMedia">
        <a href="https://www.facebook.com/profile.php?id=100091650320962">
        <img class="iconFacebook" src="../assets/icons/png-transparent-computer-icons-facebook-blog-facebook-logo-desktop-wallpaper-facebook-icon-removebg-preview.png" alt="Facebook Link"></a>
        <a href="https://twitter.com/indylookalike">
        <img class="iconTwitter" src="../assets/icons/twitter-logo-vector-png-clipart-1-removebg-preview.png" alt="Twitter Link"></a>
        <a href="https://www.instagram.com/topindylookalike/">
        <img class="iconInstagram" src="../assets/icons/instagram-logo-png-transparent-background-1024x1024-1-removebg-preview.png" alt="Instagram Link"></a>
        <a href="https://www.youtube.com/channel/UCPys7xIDUv5-txhRIWZI9fQ">
        <img class="iconYoutube" src="../assets/icons/png-transparent-youtube-logo-youtube-red-logo-computer-icons-youtube-television-angle-rectangle-thumbnail-removebg-preview.png" alt="Youtube Link"></a>

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

*{
    margin:0;
    padding: 0;
    
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
        width: 70%;
        margin-left: 18%;
        margin-top: 3%;
    }
    
    #imgClickToEnter {
        width: 10%;
        height: 5%;
        margin-left: 45%;
        margin-top: 3%;
    }

    #imgLanding {
        width: 80%;
        height: 80%;
        margin-left: 37%;
        margin-top: 5%;
        /* position: relative; */
        /* display: inline-block; */
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
    margin-left: 45%;
    margin-bottom: 1px;
}
#lastRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
        .iconSocialMedia {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            margin-left: 10%;
            margin-top: 4%;


        }
        .iconFacebook{
            width: 15%;
            height: 15%;
        }
        .iconTwitter{
            width: 15%;
            height: 15%;
        }
        .iconInstagram {
            width: 10%;
            height: 10%;
        }
        .iconYoutube {
            width: 15%;
            height: 15%;
        }




</style>