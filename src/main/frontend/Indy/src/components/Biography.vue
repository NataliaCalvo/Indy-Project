<script>

</script>

<template>
    <body>
        <img class="bioImgTitle" src="../assets/images/bioTitle.png" alt="Image of section's title: Biography"><br>
        <div class="imagesAndBioTextFirst">
            <img class="bioImg1" src="../assets/images/Feb 1990.jpg" alt="Image of Ismael as Indiana Jones in early 90's">
            <p class="bioTextFirst">The year is 1981. An eleven-year old kid, sitting in a dark cinema room with two of his schoolmates, waits patiently for the film to start. He has been invited to watch this new movie – some Hollywood action flick – on the occasion of one of his friends’ birthday.
            Little did he know at the time how deeply this event would influence his life. Two hours of sheer, mind-blowing entertainment that suddenly took – not just him, but millions of other people across the world – by storm.</p>
        <div class="imagesAndBioTextSecond">
            <p class="bioTextSecond">The film was Raiders of the Lost Ark…and that little kid was me. I still remember walking back home, dreamy and absent-minded, trying to digest the magnificent spectacle that I had just experienced.
                <br>
            Raiders was just the beginning – although, of all the films in the franchise, possibly the one that had the greatest impact on me. Indiana Jones and the Temple of Doom would follow only three years later…and then, of course, The Last Crusade. Oh boy, it was really cool to be a kid growing up in the eighties!
            </p>
            <img class="bioImg2" src="../assets/images/imgBio2.png" alt="Image of Ismael as Indiana Jones in early 90's in his hometown of Gijon">
        </div>

</div>
</body>
</template>

<style>


body{
    background-image: url('../assets/images/backgroundGradient.png');
}

.bioImgTitle{
    width: 20%;
    height: 20%;
    margin-left: 40%;
    margin-top: 2%;
}

.imagesAndBioTextFirst{
    display: flex;
    flex-direction: row;

}

.bioImg1{
    size:90%;
    margin-top: 1%;
    border: 1%;
    border-style: solid;
    border-color: goldenrod;
}

.bioTextFirst{
    font-family: 'SF Fedora Titles', sans-serif;
    font-size: xx-large;
    margin-left: 5%;
    margin-top: 5%;
    margin-right: 2%;
}

.imagesAndBioTextSecond{
    display: flex;
    flex-direction: row;

}

</style>