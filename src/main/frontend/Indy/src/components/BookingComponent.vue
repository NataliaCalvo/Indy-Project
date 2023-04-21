<script></script>

<template>
  <body>
    <form class="contactForm">
      <div class="divContainer">
        <h2 class="formTitle">Contact me for bookings!</h2>
        <input
          type="text"
          class="formInput"
          placeholder="Write here your Name:"
        /><br />
        <input
          type="email"
          class="formInput"
          placeholder="Write here your Email:"
        /><br />
        <textarea
          class="formInput formInput:message"
          placeholder="Write here your Message"
        ></textarea><br />
        <input type="submit" value="Send!" class="formInputCTA" />
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
  min-height: 80vh;
  width: 100%;
  display: flex;
}

.contactForm {
  background-color: white;
  width: 100%;
  margin: auto;
  max-width: 400px;
  border-radius: 1em;
  padding: 3.5em, 1.5em;
}

.divContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  grid-auto-columns: 100%;
}

.formTitle{
    margin-left: 10px;
    margin-right: 10px;
    font-size: 1.8rem;
    margin-bottom: .4em;
    margin-top: 40px;
}

.formInput{
    font-family: inherit;
    font-size: 1rem;
    padding: .8em 1em;
}
</style>
