<script>

</script>

<template>
    <body class="bodyLogin">
<form class="contactForm">
      <div class="divContainer">
        <h2 class="formTitle">Welcome, Ismael!</h2>
        <input
          type="text"
          class="formInput"
          placeholder="Your Name:"
        /><br />
        <input
          type="password"
          class="formInput"
          placeholder="Your Password:"
        /><br />
        <input type="submit" value="Send" class="formInputCTA" />
        <form action= "" method="" enctype="text/plain"></form>
      </div>
    </form>
</body>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    font-family: "SF Fedora", sans-serif;
}

.bodyLogin {
  background: linear-gradient(to right, rgb(252, 74, 26), rgb(247, 183, 51));
  min-height: 90vh;
  width: 100%;
  display: flex;

}

.contactForm {
  background-color: white;
  width: 90%;
  margin: auto;
  max-width: 400px;
  border-radius: 1em;
  padding: 3.5em, 1.5em;
  margin-left: 35%;
  margin-right: 50%;
  margin-top: 10%;
  margin-bottom: 15%;
  

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