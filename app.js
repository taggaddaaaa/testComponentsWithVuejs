Vue.component(`card`, {

	props: ['title', 'content'],
	
	data() {
		return {
		 claps : 0
		}
	},
	
	template: `<div class="card">
								<div class="card-body">
										<h3 class="card-title">{{ title }}</h3>

										<div class="card-text">{{ content }}</div>
										
										<div class="text-center text-muted display-4"> {{ claps }}</div>
										
										<button @click="deleteArticle" class="btn btn-danger btn-sm">Delete Me</button>
										<button @click="clapForArticle" class="btn btn-info btn-sm">Clap for me</button>
								</div>
						</div>`,
	
	methods: {
		deleteArticle() {
			console.log('article is deleted');
			this.$emit(`delete-article`, this.title);
		},
		clapForArticle() {
			this.claps++;
		}
	}
});



new Vue({
	el: '#app',
	data: {
		articles: [{
			title: 'Build full stack app with Vuejs and php',
			content: 'blablablablabala'
		}, {
			title: 'Build your first app with Quasar',
			content: 'lorem	ipsumlorem ipsum psumlorem ipsum psumlorem ipsum'
		}, {
			title: 'This is yout third lesson',
			content: 'ola que tal?'
		}]
	},
	methods: {
		/**
		 * Remove from list of the articles, the article witch has the same title that the event parameter.
		 * @param event
		 */
		removeArticle(event) {
			this.articles = this.articles.filter(article => article.title !== event )
		},
		
	}
});
