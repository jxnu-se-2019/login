import _ from 'lodash';
import $ from 'jquery';
import ko from 'knockout';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.less';
import 'knockout';
import 'knockout.validation';

var viewModel = {
	username: ko.observable().extend({
		required: {
			message: '请输入username'
		},
		email:{
			message:'请输入正确的邮箱格式'
		}
	}),
	password: ko.observable().extend({
		required:{
			message: '请输入password'
		}
	}),

	SubmitClick: function() {
		
		alert($('#username').val());
		alert($('#password').val());
		if (viewModel.errors().length == 0) {
			return;
		} else {
			viewModel.errors.showAllMessages();
			return false;
		}
	}
};

viewModel.errors = ko.validation.group(viewModel);

ko.applyBindings(viewModel);
