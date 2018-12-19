<template>
	<div>
		<h1 v-if="!$store.state.isUserLoggedIn">PLEASE LOGIN TO VIEW THE PAGE</h1>
	</div>
</template>

<script>
import panel from '@/components/panel'
export default {
	components:{
		panel
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
