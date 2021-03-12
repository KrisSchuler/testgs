
function testGS(){

     const url = "https://script.google.com/macros/s/AKfycbxpZWRifvrwp4AFyttrDinZw6oxEKV3vLGHL5uo3dOb-Po5McU/exec"

    fetch(url)
         .then(d => d.json())
         .then(d => {
             document.getElementById("app").textContent = d[0].status;
        });

}

document.getElementById("btn").addEventListener("click",testGS);
