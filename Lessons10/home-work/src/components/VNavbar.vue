<template>
    <div class="VNavbar">
      <b-container>
        <b-navbar toggleable="lg" type="dark " variant="secondary">
                <b-navbar-brand href="#">Home work</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/" href="#/">Home</b-nav-item>
                <b-nav-item to="/Users" href="/Users">Users</b-nav-item>
            </b-navbar-nav>
                </b-collapse>
        </b-navbar>
      </b-container>

    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
        name: 'VNavbar',
    }
</script>

<style scoped lang="scss">

</style>
