import _ from 'lodash';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.less';
import 'jquery-validation';


$('form').validate({
	rules: {
		username: {
			email: true
		},
		password: {
			minlength: 6
		}
	}
});
