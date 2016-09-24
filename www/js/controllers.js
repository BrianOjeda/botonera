angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope,$cordovaVibration,$cordovaNativeAudio,$cordovaFile) {

$scope.vibrar=vibrar;

  $scope.prendersonido=prendersonido;
    $scope.apagarsonido=apagarsonido;
    $scope.terminar=terminar;

crear();




function terminar()
{

   // READ
    $cordovaFile.readAsText($scope.inputs.readFile)
      .then(function (success) {
        // success
        $("#mostrartxt").html("<h1>"+success+"</h1>");
      }, function (error) {
        // error
        $("#mostrartxt").html("<h1>"+error+"</h1>");
      });

}



function eliminar()
{
   $cordovaFile.removeFile("archivos/file.txt")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });
}


  function crear()
  {
    $cordovaFile.createFile("archivos/file.txt", true)
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });
  }
 function escribir(escribo)
 {
    
       switch(escribo) {
      case 'skiner':
           $cordovaFile.writeExistingFile("archivos/file.txt", "skiner")
                .then(function (success) {
                  // success
                }, function (error) {
                  // error
                });
          break;
    case 'bart':
         $cordovaFile.writeExistingFile("archivos/file.txt", "bart")
                .then(function (success) {
                  // success
                }, function (error) {
                  // error
                });
        break;
       case 'jefe':
         $cordovaFile.writeExistingFile("archivos/file.txt", "jefe")
                .then(function (success) {
                  // success
                }, function (error) {
                  // error
                });
        break;
     case 'lisa':
         $cordovaFile.writeExistingFile("archivos/file.txt", "lisa")
                .then(function (success) {
                  // success
                }, function (error) {
                  // error
                });
        break;
     case 'marge':
        $cordovaFile.writeExistingFile("archivos/file.txt", "marge")
                .then(function (success) {
                  // success
                }, function (error) {
                  // error
                });
        break;
    default:
        
      }
 }   
   
function prendersonido(prendo)
{

  //alert("sonando con ritmo y sustancia");
   
    apagarsonido();
    switch(prendo) {
      case 'skiner':
        //alert("anda la osa");
           $cordovaNativeAudio
            .preloadSimple('click', 'audio/skiner.mp3')
            .then(function (msg) {
              $cordovaNativeAudio.play('click');
              $cordovaNativeAudio.loop('music');
            }, function (error) {
              alert(error);
            });
          break;
    case 'bart':
         $cordovaNativeAudio
          .preloadSimple('click', 'audio/bart.mp3')
          .then(function (msg) {
            $cordovaNativeAudio.play('click');
            $cordovaNativeAudio.loop('music');
          }, function (error) {
            alert(error);
          });
        break;
       case 'jefe':
         $cordovaNativeAudio
          .preloadSimple('click', 'audio/jefe.mp3')
          .then(function (msg) {
            $cordovaNativeAudio.play('click');
            $cordovaNativeAudio.loop('music');
          }, function (error) {
            alert(error);
          });
        break;
     case 'lisa':
         $cordovaNativeAudio
          .preloadSimple('click', 'audio/lisa.mp3')
          .then(function (msg) {
            $cordovaNativeAudio.play('click');
            $cordovaNativeAudio.loop('music');
          }, function (error) {
            alert(error);
          });
        break;
     case 'marge':
         $cordovaNativeAudio
          .preloadSimple('click', 'audio/marge.mp3')
          .then(function (msg) {
            $cordovaNativeAudio.play('click');
            $cordovaNativeAudio.loop('music');
          }, function (error) {
            alert(error);
          });
        break;
    default:
        
      }
     
       escribir(prendo);
 }

  
 /* $cordovaNativeAudio
    .preloadComplex('music', 'audio/music.mp3', 1, 1)
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      console.error(error);
    });
*/
 
  

function apagarsonido()
{
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
