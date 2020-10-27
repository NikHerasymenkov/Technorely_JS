
export default {
    actions: {
        async fetchUsers(ctx) {
            const users = []
            const response = await fetch('https://api.github.com/users');
            const res = await response.json();
            this.users = await  res.map(item => {
                const user= {
                    id :item.id,
                    login:item.login,
                    image:item.avatar_url,
                    url: item.html_url,
            }
                users.push(user)
            })
            ctx.commit('updatedUsers', users)
        }
    },
    mutations: {
        updatedUsers(state, users) {
            state.users = users
        }
    },
    state: {
        users: []
    },
    getters: {
        allUsers(state) {
            return state.users
        }
    }
}
