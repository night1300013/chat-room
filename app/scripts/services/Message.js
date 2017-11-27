(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.send = function(newMessage, room) {
        //Send method logic
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        if (room && newMessage) {
          $firebaseArray(ref).$add({
              roomId: room.$id,
              content: newMessage,
              sentAt: dateTime,
              userName: $cookies.get('chatRoomUser')
          });
        }
    };

    return Message;
  }

  angular
    .module('chatRoom')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
