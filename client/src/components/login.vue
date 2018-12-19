<template>
 <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="secondary">
        <v-toolbar flat dense class="primary" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
				<div class="pl-4 pr-4 pt-4 pb-2">
					<form autocomplete="off">
					<v-text-field
						type="email" 
            name="email"
            v-model="email"
            placeholder="email"
						solo
          ></v-text-field>
          <br>
					<v-text-field
						type="password" 
            name="password"
            v-model="password"
            placeholder="password"
						solo
          ></v-text-field>
					</form>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn
						class="primary"
            @click="login">
            login
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return {
			email: '',
			password: '',
			error: ''
    }
  },
	methods: {
		async login() {
			try{
				const responce = await authenticationService.login({
					email: this.email,
					password: this.password
				})
				this.$store.dispatch('setToken', responce.data.token)
				this.$store.dispatch('setUser', responce.data.user)
				this.$router.push({
					name: 'root'
				})
			}catch(error){
				this.error = error.response.data.error
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.error{
		color: red;
	}
</style>
