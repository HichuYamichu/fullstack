<template>
	<panel title="Apps">
		<div v-for="(app, index) in apps"
		:item="app"
		:key="index"
		class="appItem">
			<v-toolbar flat dense class="primary" dark>
				<v-toolbar-title>{{ app.name }}</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-toolbar-items class="buttons">
					 <v-btn
						class="primary"
            @click="lunchApp">
            LUNCH
          </v-btn>
				</v-toolbar-items>
      </v-toolbar>
			<div>
				{{ appContent }}
			</div>
		</div>
	</panel>
</template>

<script>
import panel from '@/components/panel'
import fetchApps from '@/services/fetchApps'
import fetchAppContent from '@/services/fetchAppContent'

export default {
	components:{
		panel
	},
	data(){
		return{
			apps: null,
			appContent: null
		}
	},
	methods: {
		async lunchApp(){
			this.appContent = (await fetchAppContent.index(3002)).data
			console.log('clicked')
		}
	},
	watch:{
		appContent (value){
			console.log(value);
		}
	},
	async mounted(){
		this.apps = (await fetchApps.index()).data
		console.log(this.apps)
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appItem{
	margin-bottom: 5px;
}
.buttons{
	margin-left: 5px;
	margin-right: 5px;
	background-color: primary;
}
</style>
