//import UIfx from 'uifx'
//import beepAudio from '../assets/short_beep.mp3'

export default function (lengthOfInterval, numberOfRepititions) {
	//length of interval comes in in seconds

	//const beep = new UIfx(beepAudio)

	(function () {
		let intervalCounter = 0
		const intervalID = setInterval(() => {
			if (intervalCounter < numberOfRepititions) {
				console.log('hi')
				//beep.play()
			} else {
				clearInterval(intervalID)
			}
			intervalCounter++
		}, lengthOfInterval * 1000)
	})()
}
