window.onload = storage = () => {
    let i = window.sessionStorage.getItem('keyi');
    var num = document.getElementById('hcj') ;
    if (i != null) {
      document.form.hcj.selectedIndex = i;
      }
    console.log(i);
    }

pulldown = () =>{
const num = document.form.hcj;

const i = num.selectedIndex;

sessionStorage['keyi'] = i;

console.log(i);
}


