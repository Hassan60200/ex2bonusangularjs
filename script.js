var app = angular.module('myApp', []);

app.controller('clickAlert', function ($scope){
	//je vérifie si le bouton m'envoie l'alerte
			$scope.alert = function(){
				alert('GG ta réussi l exercice');
			};
		});
