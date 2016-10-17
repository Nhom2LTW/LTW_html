$(function (){
			$('#datetimepicker6').datetimepicker({
				locale:'vi'
			});
			$('#datetimepicker7').datetimepicker({
				useCurrent:false,
				locale:'vi' //Important! See issue #1075
			});
			$("#datetimepicker6").on("dp.change", function (e) {
				$('#datetimepicker7').data("DateTimePicker").minDate(e.date);
			});
			$("#datetimepicker7").on("dp.change", function (e) {
				$('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
			});
		});
$(function() {
    $('#chitiet-form-link').click(function(e) {
		$("#chitiet-form").delay(100).fadeIn(100);
 		$("#khachmoi-form").fadeOut(100);
		$('#khachmoi-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#khachmoi-form-link').click(function(e) {
		$("#khachmoi-form").delay(100).fadeIn(100);
 		$("#chitiet-form").fadeOut(100);
		$('#chitiet-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});
$(document).ready(function() {
    //lay link qua href cua the btn
    $("#myModal").on("show.bs.modal", function(e) {
        var link = $(e.relatedTarget);
        $(this).find(".modal-dialog").load(link.attr("href"));
    });
    //Reset modal box
    $("#myModal").on("hide.bs.modal", function() {
        $(".modal-body").html("");
    });
});
// Validaiton
	var demoApp = angular.module('demoApp',[]);
	 demoApp.controller( "RegisterCtrl", ['$scope', function($scope) {
	 $scope.success = false;
	 $scope.register = function() {
	 $scope.success=true;
	 }
	 }]);
	 
	demoApp.directive('passwordMatch', [function () {
	return {
	 restrict: 'A',
	 scope:true,
	 require: 'ngModel',
	 link: function (scope, elem , attrs,control) {
	 var checker = function () {
	 
	   //lấy giá trị của trường mật khẩu
	   var e1 = scope.$eval(attrs.ngModel);
	 
	   //lấy giá trị của xác nhận mật khẩu
	   var e2 = scope.$eval(attrs.passwordMatch);
	   return e1 == e2;
	 };
	 scope.$watch(checker, function (n) {
	 
	   //thiết lập form control
	   control.$setValidity("unique",n);
	   });
	 }
	 };
	}]);


