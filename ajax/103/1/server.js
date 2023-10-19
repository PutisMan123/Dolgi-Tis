export default {
	'/handler/': function({get}) {
		return +get.num1 + +get.num2;
	}
}