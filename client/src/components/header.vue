<template>
	<v-toolbar fixed class="primary" dark>
		<v-toolbar-title class="mr-4">
      <router-link 
        class="home"
        tag="span"
        :to="{
          name: 'root'
        }">
        Hichu-Yamichu
      </router-link>
		</v-toolbar-title>
		<v-toolbar-items class="buttons">
			<v-btn
				v-if="$store.state.isUserLoggedIn"
				block
				to="apps">
				Apps
				</v-btn>
		</v-toolbar-items>
		<v-spacer></v-spacer>
		<v-toolbar-items class="buttons">
			<v-btn 
				v-if="!$store.state.isUserLoggedIn"
				block
				to="login">
				login
			</v-btn>
		</v-toolbar-items>
		<v-toolbar-items class="buttons">
			<v-btn
				v-if="!$store.state.isUserLoggedIn"
				block
				to="register">
				Sign Up
				</v-btn>
		</v-toolbar-items>
		<v-toolbar-items class="buttons">
			<v-btn
				v-if="$store.state.isUserLoggedIn"
				block
				@click="logout">
				Log out
				</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>

export default {
  methods: {
		logout(){
			this.$store.dispatch('setToken', null)
			this.$store.dispatch('setUser', null)
			this.$router.push({
				name: 'root'
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
	cursor: pointer;
}

.buttons{
	margin-left: 5px;
	margin-right: 5px;
}
</style>
