<template>
    <div id="app">
            <router-view/>
        <VNavbar />
        <VTable />
    </div>
</template>

<script>

    import VNavbar from "./components/VNavbar";
    import VTable from "./components/VTable";
    export default {
        data() {
            return {}
        },
        name: 'App',
        components: {
            VNavbar,
            VTable,
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
