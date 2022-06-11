(function() {
    // Get the local time using JS
    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();  
    // Create an object with each hand and it's angle in degrees
    var hands = [
      {
        hand: 'hours',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'mints',
        angle: (minutes * 6)
      },
      {
        hand: 'seconds',
        angle: (seconds * 6)
      }
    ];
    // Loop through each of these hands to set their angle
    for (var j = 0; j < hands.length; j++) {
      var elements = document.querySelectorAll('.' + hands[j].hand);
      for (var k = 0; k < elements.length; k++) {
          elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
          elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
          // If this is a minute hand, note the seconds position (to calculate minute position later)
          if (hands[j].hand === 'mints') {
            elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
          }
      }
    }
  })();
//   (function()
//   {
//       let ddate = new Date;
//       let dhours = ddate.getHours();
//       let dmints = ddate.getMinutes();
//       let vhours = document.querySelector('.digital-hours');
//       let vmints = document.querySelector('.digital-mints');

//       vhours.innerHTML = dhours;
//       vmints.innerHTML = dmints;

//   })();

function currentDigitalTime()
{
    let ddate = new Date;
    let dhours = ddate.getHours();
    let dmints = ddate.getMinutes();
    let period = "AM";

    if (dhours === 0)
    {
        dhours = 12;
    }
    if(dhours >12)
    {
        dhours = dhours - 12;
        period = "PM"
    }

    dhours =  (dhours < 10) ? "0" + dhours : dhours;
    dmints =  (dmints < 10) ? "0" + dmints : dmints;

    document.getElementById('digital-hours').innerText = dhours;
    document.getElementById('digital-mints').innerText = dmints;
    document.getElementById('period').innerText = period;
    
    
    setTimeout(function(){currentDigitalTime()}, 1000 );
}

    currentDigitalTime();