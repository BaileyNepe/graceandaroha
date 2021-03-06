const inputs = document.querySelectorAll('.input');
function focusFunc() {
  this.parentNode.classList.add('focus');
}
function blurFunc() {
  let e = this.parentNode;
  '' == this.value && e.classList.remove('focus');
}
function submitToAPI(e) {
  e.preventDefault();
  var t = document.getElementById('name-input').value,
    n = document.getElementById('phone-input').value,
    s = document.getElementById('email-input').value,
    u = document.getElementById('description-input').value;
  if ('' == t || '' == n || '' == s || '' == u) return alert('Please Fill All Required Fields'), !1;
  if (((emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), !emailRE.test(s))) return alert('Email Address entered, is not valid'), !1;
  var o = { name: t, phone: n, email: s, desc: u },
    a = new XMLHttpRequest();
  a.open('POST', 'https://formspree.io/f/moqywyvv'),
    a.setRequestHeader('Content-Type', 'application/json'),
    a.send(JSON.stringify(o)),
    (a.onreadystatechange = function () {
      if (4 === a.readyState) {
        JSON.parse(a.responseText);
        200 === a.status ? (console.log('successful'), alert('Your message has been sent')) : console.log('failed');
      }
    }),
    document.getElementById('contact-form').reset();
}
inputs.forEach((e) => {
  e.addEventListener('focus', focusFunc), e.addEventListener('blur', blurFunc);
});
