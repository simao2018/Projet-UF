<!-- On crée nos trois balises Template Script Style -->
<template>
    <div id="app" class="container-fluid bg-light">
            <Navbar></Navbar>
    </div>

</template>

<script>
    import Navbar from "@/components/Navbar";

    export default {
        name:'app',
        components: {
            Navbar
        }
    }
</script>

<style lang="scss">
    @import "assets/style";
    @import "~bootstrap";
    p{
        font-weight:bold;
    }
</style>
