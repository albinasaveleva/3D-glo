class MaskPhone{
	constructor({selector, masked = '+7 (___) ___-__-__'}) {
		this.elems = document.querySelectorAll(selector);
		this.masked = masked;
	}
	mask(event, elem){
		const keyCode = event.keyCode;
		const template = this.masked;
		const def = template.replace(/\D/g, ""),
			val = elem.value.replace(/\D/g, "");
		// console.log(template);
		let i = 0,
			newValue = template.replace(/[_\d]/g, (a) => i < val.length ? val.charAt(i++) || def.charAt(i) : a);
		i = newValue.indexOf("_");
		if (i != -1) {
			newValue = newValue.slice(0, i);
		}
		let reg = template
			.substr(0, elem.value.length)
			.replace(/_+/g, (a) => "\\d{1," + a.length + "}")
			.replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test(elem.value) || elem.value.length < 5 || keyCode > 47 && keyCode < 58) {
			elem.value = newValue;
		}
		if (event.type == "blur" && elem.value.length < 5) {
			elem.value = "";
		}
	}
	start() {
		for (const elem of this.elems) {
			elem.addEventListener("input", () => this.mask('input', elem));
			elem.addEventListener("focus", () => this.mask('focus', elem));
			elem.addEventListener("blur", () => this.mask('blur', elem));
		}
	}
}

// use

// maskPhone({
// 	selector: 'селектор элементов',
// 	masked: 'маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__'
// });

export default MaskPhone;