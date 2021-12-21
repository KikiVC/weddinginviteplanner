/*------------------------------------------------------------------
[CHANGE STYLE]
-------------------------------------------------------------------*/

function changeStyle(style) {

  if(style == 'style1') {
    document.getElementById("inviteWindow").className = "style1";
    document.body.style.background = 'hsla(137, 23%, 68%, 0.858)';
  }
  
  if(style == 'style2') {
    document.getElementById("inviteWindow").className = "style2";
    document.body.style.background = 'hsla(39, 64%, 63%, 0.858)';
  }
  
  if(style == 'style3') {
    document.getElementById("inviteWindow").className = "style3";
    document.body.style.background = 'hsla(78, 22%, 61%, 0.858)';
  }

  if(style == 'style4') {
    document.getElementById("inviteWindow").className = "style4";
    document.body.style.background = 'hsla(12, 52%, 47%, 0.858)';
  }
  }


/*------------------------------------------------------------------
[LIVETYPE]
-------------------------------------------------------------------*/

function getName() {
    let nam = document.getElementById('name').value;
    document.getElementById("input").innerHTML = "" + nam;
}

function getName2() {
    let nam2 = document.getElementById('name2').value;
    document.getElementById("input2").innerHTML = "" + nam2;
}

function getDate() {
  let dateVal = document.getElementById("dateVal").value;
  const d = new Date(dateVal);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  let newDateVal = `${da}-${mo}-${ye}`;
  document.getElementById('input3').innerHTML = newDateVal;
}

function getTime() {
    let t = document.getElementById('time').value;
    document.getElementById("input4").innerHTML = "" + t;
}

function getVenue() {
    let v = document.getElementById('venue').value;
    document.getElementById("input5").innerHTML = "" + v;
}


