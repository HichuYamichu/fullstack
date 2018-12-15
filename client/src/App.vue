<template>
  <div id="app">
		<v-app dark>
			<pageHeader/>
      <v-content id="content">
        <v-container fluid>
					<router-view/>
				</v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import pageHeader from '@/components/header.vue'
export default {
  name: 'app',
  components: {
    pageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#content {
	margin-top: 110px;

}
</style>
