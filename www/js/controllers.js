angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaVibration,$cordovaNativeAudio,$cordovaFile) {





$scope.vibrar=vibrar;

  $scope.prendersonido=prendersonido;
    $scope.apagarsonido=apagarsonido;
   
function prendersonido()
{
  alert("sonando con ritmo y sustancia");
 /* $cordovaNativeAudio
    .preloadComplex('music', 'audio/music.mp3', 1, 1)
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      console.error(error);
    });
*/
 $cordovaNativeAudio
    .preloadSimple('click', 'audio/click.mp3')
    .then(function (msg) {
      $cordovaNativeAudio.play('click');
      $cordovaNativeAudio.loop('music');
    }, function (error) {
      alert(error);
    });
  }

function apagarsonido()
{
  alert("apagar sonido");
  // stop 'music' loop and unload
   $cordovaNativeAudio.stop('music');
   $cordovaNativeAudio.unload('click');
}
function vibrar()
      {
          //console.log("sadas");
          try
          {
                $cordovaVibration.vibrate(100);
                alert("Estoy vibrando");

          }
          catch(e)
          {
              alert("No soy un celular"+e);
          }


      }




})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
