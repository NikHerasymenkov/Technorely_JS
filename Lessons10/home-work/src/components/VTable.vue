<template>
    <div class="Table">
        <b-container>
            <table class="table table-dark">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Login</th>
                    <th>Avatar</th>
                    <th>URL</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(user) in allUsers " :key="user">
                    <td>{{user.id}}</td>
                    <td>{{user.login}}</td>
                    <td>
                        <img :src="user.image"
                             height="60px"
                             width="60px"
                             alt=""/>
                    </td>
                    <td>{{user.url}}</td>
                </tr>
                </tbody>
            </table>
        </b-container>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'VTable',
        computed: mapGetters(['allUsers']),
        methods: mapActions(['fetchUsers']),
        async mounted() {
            return this.fetchUsers()
        },
    }
</script>

<style lang="scss" scoped>
    img {
        border-radius: 50%;
    }
    img:hover {
        color: chocolate;

        box-shadow: 0 0 10px 10px ;
    }
</style>
