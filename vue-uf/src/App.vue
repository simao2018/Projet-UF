<!-- On crée nos trois balises Template Script Style -->
<template>
    <div id="app">
            <router-view></router-view>
    </div>

</template>

<script>
    import Home from "@/components/Home";

    export default {
        components: {
            // eslint-disable-next-line vue/no-unused-components
            Home
        }
    }
</script>

<style lang="scss">

</style>
