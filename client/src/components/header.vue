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
		<v-spacer></v-spacer>
		<v-toolbar-items class="buttons">
			<v-btn block to="login">login</v-btn>
		</v-toolbar-items>
		<v-toolbar-items class="buttons">
			<v-btn block to="register">Sign Up</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>

export default {
  
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
