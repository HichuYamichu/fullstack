<template>
	 <v-layout collumn>
    <v-flex xs10 offset-xs1>
      <div class="secondary">
        <v-toolbar flat dense class="primary" dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
				<div class="pl-4 pr-4 pt-4 pb-2">
					<slot>
						slot content
					</slot>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
