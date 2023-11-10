for (var i = 0; i < 10; i++) {
    (function (number) {
      setTimeout(function () {
        console.log(number);
      }, 0);
    })(i);
  }  