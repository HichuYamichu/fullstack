<template>
  <div>
		<h1>Register</h1>

		<input
			type="email"
			name="email"
			v-model="email"
			placeholder="email@gmail.com" />
		<br>
		<input
			type="password"
			name="password"
			v-model="password"
			placeholder="password" />
		<br>
		<div class="error" v-html="error"/>
			<button @click="register">Register</button>
	</div>
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
		async register() {
			try{
				await authenticationService.register({
					email: this.email,
					password: this.password
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
