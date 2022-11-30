window.onload = function () {


    var tpos = 0, lpos = 0;
      var box = document.getElementById('box');
      var t = setInterval(move, 10);
      function move() {
          lpos += 1;
          box.style.left = lpos + 'px';
           if (tpos == 150 & lpos==150) {
                  clearInterval(t);
              }
          else if (lpos >150) {
              lpos = 0
              tpos += 10;
              box.style.left = lpos + 'px';
              box.style.top = tpos + 'px';
          }
      }
  }