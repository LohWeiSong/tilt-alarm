function alarm () {
    basic.showIcon(IconNames.Angry)
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Forever)
}
radio.onReceivedString(function (receivedString) {
    alarm()
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("thief!")
    alarm()
})
radio.setGroup(1)
