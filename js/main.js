const circle = document.querySelectorAll('.circle')
// console.log(circle)

const btn = document.getElementsByClassName('textright')[0]
// console.log(btn)


const alldiv = document.querySelectorAll('.div')
console.log(alldiv)


btn.addEventListener("click", (eo) => {

  for (let i = 0; i < circle.length; i++) {
  
    circle[i].style.display = 'none'
    alldiv[i].style.backgroundColor = '#ffffff'
  }
  
})



