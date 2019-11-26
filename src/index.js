import _ from 'lodash';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './css/signin.css';
import './lib/jquery.validate.min.js'


$('form').validate({
	rules:{
		username:{
			email:true
		},
		password:{
			minlength:6
		}
	}
});

