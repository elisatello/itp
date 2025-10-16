// javascript:function%20FtoC(f){let%20c%20=%20(f%20-%2032)%205%20/%209;return%20c;}let%20f%20=%2099;let%20c%20=%20FtoC(f);console.log(f%20+%20%22%C2%BAF%20is%20%22%20+%20C.toFixed(2)%20+%20%22%C2%BAC%22);
function FtoC(f){
	let c = (f - 32) * 5/9;
	return c;
}

let f = 99; 
let c = FtoC(f);
console.log(f + "ºF is " + c.toFixed(2) + "ºC");
