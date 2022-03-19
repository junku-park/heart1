input.onButtonPressed(Button.A, function () {
    basic.showString("" + (만보기수))
})
input.onGesture(Gesture.Shake, function () {
    만보기수 += 1
    만보기총합수 += 1
    basic.showString("" + (만보기수))
    if (만보기수 > 9999) {
        멜로디연주()
        만보기수 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (만보기총합수))
})
function 멜로디연주 () {
    music.playMelody("C C C C C C C C ", 2000)
    music.playMelody("D D D D D D D D ", 2000)
    music.playMelody("E E E E E E E E ", 2000)
    music.playMelody("F F F F F F F F ", 2000)
    music.playMelody("G G G G G G G G ", 2000)
    music.playMelody("A A A A A A A A ", 2000)
    music.playMelody("B B B B B B B B ", 2000)
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 2000)
}
let 만보기총합수 = 0
let 만보기수 = 0
멜로디연주()
만보기수 = 0
만보기총합수 = 만보기수
basic.showString("" + (만보기총합수))
