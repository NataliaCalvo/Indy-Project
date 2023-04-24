<script></script>

<template>
  <body>
<div class="divEvents">
<h1 class="eventsTitle">PAST EVENTS</h1>
<article class="eventsText">Ismael has impersonated Indiana Jones at many different events, public or private. A few examples of these include:<br><br><br>
  * <b>Paramount Pictures, Medicinema & Vue Entertainment (London):</b> Charity gala to celebrate the 30th anniversary of Indiana Jones and the Temple of Doom – with producer Robert Watts in attendance.<br><br><br><br>
	* <b>Paramount Home Entertainment & HMV Flagship Store (London):</b> European release of the Indiana Jones films on Blu-ray for the first time ever. 
	* <b>ExCel London:</b> launch of the Sony Xperia 2014 mobile phone range<br><br><br>
	* <b>Chunky Onion Productions:</b> Hollywood-themed annual dinner for the Institute of Actuaries (Birmingham).<br><br><br>
	* <b>Channel Four (London):</b> Empire names Indiana Jones the greatest movie character of all time – Channel Four News; Entertainment highlights.<br>
</article>
</div>

    <form class="contactForm">
      <div class="divContainer">
        <h2 class="formTitle">Contact me for bookings!</h2>
        <input
          type="text"
          class="formInput"
          placeholder="Your Name:"
        /><br />
        <input
          type="email"
          class="formInput"
          placeholder="Your Email:"
        /><br />
        <textarea
          class="formInput_formInput--message"
          placeholder="Write your message here:"
        ></textarea><br />
        <input type="submit" value="Send" class="formInputCTA" />
        <form action= "https://formsubmit.co/indianismael@gmail.com" method="POST" enctype="text/plain"></form>
      </div>
    </form>
  </body>
</template>

<style scoped>
* {
  font-family: "SF Fedora", sans-serif;
  margin: 0;
  padding: 0;
}

body {
  background: linear-gradient(to right, rgb(252, 74, 26), rgb(247, 183, 51));
  min-height: 90vh;
  width: 100%;
  display: flex;

}

.divEvents{
    width: 80%;
    margin-top: 9em;
    margin-left: 2.5em;
}

.eventsTitle{
    margin-bottom: 50px;
    margin-left: 15em;
    color: goldenrod;
}
.eventsText{
  text-align:justify;
  margin-left: 10%;
}



.contactForm {
  background-color: white;
  width: 90%;
  margin: auto;
  max-width: 400px;
  border-radius: 1em;
  padding: 3.5em, 1.5em;
  margin-left: 200px;
  margin-right: 200px;
  

}

.divContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  grid-auto-columns: 100%;
}

.formTitle{
    margin-left: 10px;
    margin-right: 10px;
    font-size: 1.8rem;
    margin-bottom: .4em;
    margin-top: 40px;
    color: orangered;
}

.formInput{
    width: 70%;
    font-family: inherit;
    font-size: 1rem;
    padding: .8em 1em;
    outline: none;
    border: none;
    border: 1px solid goldenrod;
    border-radius: 0.2em;
}

.formInput_formInput--message{
    width: 65%;
    outline: none;
    border: none;
    border: 1px solid goldenrod;
    border-radius: 0.2em;
    resize: none;
    padding: 1.8em 2em;
    margin-bottom: 0.5em;
}
.formInputCTA{
    width: 79%;
    font-family: inherit;
    background-color: lightsalmon;
    color: orangered;
    border: none;
    font-weight: 700;
    font-size: 1rem;
    padding: .7em 0;
    border-radius: .2em;
    cursor: pointer;
    margin-bottom: 2em;
}

@media (max-width:450px){
    .contactForm{
        padding: 1em;
    }
    .formTitle{
        font-size: large;
    }

}
</style>
