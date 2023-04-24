<script>
  function MoreLess(){
    var dots=document.getElementById("dots");
    var longText=document.getElementById("longText");
    var readMoreBtn=document.getElementById("readMoreBtn");
    if(dots.style.display!="none"){
      dots.style.display="none";
      longText.style.display="inline";
      readMoreBtn.innerHTML="Read Less";
    }
    else{
      dots.style.display="inline";
      longText.style.display="none";
      readMoreBtn.innerHTML="Read More..."
    }
  }
</script>

<template>

  <h1>ISMAEL AS INDIANA JONES</h1>
<div class="container">
  <input id="check" type="checkBox">
  <p>
    Ever since watching Raiders of the Lost Ark as a kid, Ismael has been
    fascinated by Indiana Jones as a film character. The film provided two hours
    of sheer, mind-blowing entertainment that would take the world by storm.<br />

    When the film was over and the lights brought everybody back to reality,
    Ismael felt that he had been part of something very special. On his way back
    home, dreamy and absent-minded, he tried to slowly digest the magnificent
    spectacle that he had just experienced. Raiders was just the beginning.
    Indiana Jones and the Temple of Doom would follow only three years later…and
    then, of course, The Last Crusade and Crystal Skull. <br />

    The appeal of the Indiana Jones character is unquestionable. It is simply
    iconic and manages to reach all audiences – young and old. This, of course,
    has a lot to do with Harrison Ford’s charisma - but also with Indy’s
    determination and witty sense of humour. He is the courageous-yet-relatable
    adventurer who takes us to exotic lands and fires up our imagination. Who
    didn’t ever want to be Indy at some point in their lives?<br />

    Indiana Jones was named the greatest movie character of all time… after
    thousands of film fans cast their votes via the Empire magazine, back in
    2015. James Bond came only second.<br />

    All throughout these years, fans all over the world have been fascinated not
    only by the storylines – but also by Indy’s iconic gear. Ismael was of
    course one of them. <br />
    Over the years he has been dressing up as Indy, bringing joy to many people.
    Whether it is at corporate events, promotional assignments or charity galas,
    the ‘Indy’ in him takes over and never disappoints...</p><div class="longText">Through years of meticulous research, he has been able to acquire some of the most impressive and screen-accurate gear and props. Yes…we are talking of hats, leather jackets, bullwhips and other ‘archaeological’ finds! To the point of being able to offer his clients an impersonation of any of the Indiana Joneses in the film franchise – although specialising chiefly in the first three movies (Raiders, Temple of Doom and Last Crusade).<br />
    Some people think that Indy always wears the same type of hat, or jacket, in every film. Wrong. Film connoisseurs and hard core fans know otherwise. Every single detail adds to the overall look of the Indiana Jones character in each of the films. The design pattern of the jackets, the type of leather, their level of distress. Did you know, for example, that three different jacket types were used in Raiders of the Lost Ark only?  Some of the hats have a taller crown or a wider brim, whether symmetrical or not. The bullwhips come in different lengths and colours – even the design of the handles vary from one film to another. Indy also carries different types of pistols. In essence, the overall costume has always been envisioned according to the nature and feel of each of the movies.<br />
    Every single detail makes a difference when it comes to achieving screen-accuracy and a memorable impersonation of this great movie character. And this is what Ismael can offer.<br />
    Primarily based in London (UK), he is available for all party requirements and corporate events – staying in character, interacting with your guests, having photos taken or any other requirement that you or your client may have.<br />
    Also available for promotions at exhibitions, conferences, product launches, shows or other events where attention is required for your product or company.<br />
    With the imminent release of the fifth instalment of Indiana Jones in the summer of 2023, there hasn’t been a better time to book!<br /><br />
    <label for="check">Read Less...</label>
  </div>
<label for="check">Read More...</label>
</div>
</template>

<style scoped lang="scss">


*{
  margin: 0;
  padding: 0;
}

h1 {
  font-family: "SF Fedora", sans-serif;
  margin-left: 3.3%;
  margin-top: 3%;
}

p {
  font-size: 20px;
  font-family: "SF Fedora Titles", sans-serif;
  background: transparent;
  margin-bottom: 1%;
  text-align: justify;
  padding: 1% 3%;
  line-height: 25px;
}

#check{
  display: none;
}
#check:checked ~ .longText{
  display: block;
}

#check:checked ~ label{
  display: none;
}

label{
  font-size: 20px;
  font-family: "SF Fedora Titles", sans-serif;
  display: inline-block;
  cursor: pointer;
  color: orangered;
  background-color: goldenrod;
  padding: 0.5%;
  border-radius: 5%;
  margin-top: 0.5%;
  margin-bottom: 3%;
  margin-left: 3%;
  
}

.longText{
  display: none;
  font-size: 20px;
  font-family: "SF Fedora Titles", sans-serif;
  background: transparent;
  margin-bottom: 1%;
  text-align: justify;
  padding: 0% 3%;
  line-height: 25px;

}

</style>
