<script setup>
import HeaderPrincipal from '../components/HeaderPrincipal.vue';
import RoundedMenu from '../components/RoundedMenu.vue';
import TextPrincipal from '../components/TextPrincipal.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
<body class="backgroundPrincipal">
<HeaderPrincipal />
<RoundedMenu />
<TextPrincipal />
<Footer />
</body>
</template>

<style>
    .backgroundPrincipal{
        background: linear-gradient(to right, rgb(252, 74, 26), rgb(247, 183, 51));
    }
</style>