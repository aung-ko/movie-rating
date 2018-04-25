
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


class Errors{
	constructor(){
		this.errors = {};
	}
	get(field){
		if(this.errors[field]){
			return this.errors[field][0];
		}
	}
	record(errors){
		this.errors = errors.errors;
	}
	clear(field){
		delete this.errors[field];
	}
	has(field){
		return this.errors.hasOwnProperty(field);
	}
	any(){
		return Object.keys(this.errors).length > 0;
	}

}

new Vue({
    el: '#root',
    data:{
    	movie_name: '',
    	director_name: '',
    	description: '',
    	genres: '',
    	released_date: '',
    	errors: new Errors()
    },
    methods:{
    	onSubmit(){
    		axios.post('/movie', this.$data)
    		.then(this.onSuccess)
    		.catch(error => this.errors.record(error.response.data));
    	},
    	onSuccess(response){
    		alert('Success');
    		this.movie_name = '';
    		this.director_name = '';
    		this.description = '';
    		this.genres = '';
    		this.released_date = '';
    	}
    }
});
