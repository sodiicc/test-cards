let game = document.querySelector('.game')
let shapes = ['spades', 'clubes', 'hearts', 'diamonds']
let start = document.querySelector('.start')

let field = () => {
  let randomSize = ~~(Math.random()*5) + 5
  game.style.height = `${randomSize * 60}px`
  game.style.width = `${randomSize * 60}px`

  for(let i = 0; i < randomSize**2; i++){
    let randomShape = shapes[~~(Math.random()*4)]
    let square = document.createElement('div')
    square.className = randomShape
    square.style.width = '58px'
    square.style.height = '58px'
    game.appendChild(square)

  }
}

field()

game.addEventListener('click', e => {
  let selectShape = document.querySelectorAll(`.${e.target.className}`);
  selectShape.forEach((el)=>{
    el.className = 'common'
  })
})

start.addEventListener('click', () => {
  game.innerHTML = ''
    field()
})