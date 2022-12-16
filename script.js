function verifyCode(postalCode) {
  var pCode = postalCode.toUpperCase();
  var nPcode = pCode.trim();
  var i = nPcode.substring(0, 3);
  var j = nPcode.substring(3);
  var words = [i, j];
  var joint = words.join(' ');
  var fxCode = joint.replace(/\s+/g, ' ');
  const exclude1 = new RegExp('[^DFIOQUWZ]');
  const exclude2 = new RegExp('[^DFIOQU]');

  if (
      exclude1.test(fxCode[0]) === true &&
      isNaN(fxCode[1]) === false &&
      exclude2.test(fxCode[2]) === true &&
      fxCode[3] === ' ' &&
      isNaN(fxCode[4]) === false &&
      exclude2.test(fxCode[5]) === true &&
      isNaN(fxCode[6]) === false &&
      fxCode.length === 7
  ) 
  {
      return `${fxCode}`;
  }
  return false;
}

var btn = document.querySelector("#submit");
var postalCode = document.querySelector("#postalcode");
btn.addEventListener("click", () => {
  if(verifyCode(postalCode.value)){
      postalCode.value = verifyCode(postalCode.value);
  }
  else {
      alert("invalid postal code!");
  }
});


const msg = document.querySelector('#Other');
msg.addEventListener('change', hidArea);
function hidArea() {
  if (this.checked) {
      document.querySelector('#Others').hidden=false;
      document.querySelector('#option1').hidden=true;
      document.querySelector('#option2').hidden=true;
  }
}
















