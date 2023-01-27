//menngunakan event
const button = document.querySelector('span');

button.addEventListener('click', () => {
  var li = document.createElement('li');
  var inputValue = document.getElementById('myInput').value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('Anda belum memasukan list!');
  } else {
    document.getElementById('myUL').appendChild(li);
  }
  document.getElementById('myInput').value = '';

  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7'); // kode \u00D7 membuat tanda x
  span.className = 'close'; //meambahkan clas di dla
  span.appendChild(txt);
  li.appendChild(span);

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = 'none';
    };
  }
});

// Klik tombol tutup untuk menyembunyikan item daftar saat ini
var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = 'none';
  };
}
//menngunakan function
// // Buat item daftar baru saat mengklik tombol "Tambah"
// function newElement() {
//   var li = document.createElement('li');
//   var inputValue = document.getElementById('myInput').value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert('Anda belum memasukan list!');
//   } else {
//     document.getElementById('myUL').appendChild(li);
//   }
//   document.getElementById('myInput').value = '';

//   var span = document.createElement('SPAN');
//   var txt = document.createTextNode('\u00D7'); // kode \u00D7 membuat tanda x
//   span.className = 'close'; //meambahkan clas di dla
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (var i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       var div = this.parentElement;
//       div.style.display = 'none';
//     };
//   }
// }

// // Buat tombol "tutup" dan tambahkan ke setiap item daftar opsional
// // var myNodelist = document.getElementsByTagName('LI');
// // var i;
// // for (i = 0; i < myNodelist.length; i++) {
// //   var span = document.createElement('SPAN');
// //   var txt = document.createTextNode('\u00D7');
// //   span.className = 'close';
// //   span.appendChild(txt);
// //   myNodelist[i].appendChild(span);
// // }

// // Klik tombol tutup untuk menyembunyikan item daftar saat ini
// var close = document.getElementsByClassName('close');
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     var div = this.parentElement;
//     div.style.display = 'none';
//   };
// }
