export default {
	'/handler/': function({get}) {
		let arr = [1,2,4,5,5,6,57536]
		return arr[+get.idx];
	}
}