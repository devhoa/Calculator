const calc = (a,b,p) => {
	if (!a || !b || !p)
		return "Please provide all parameters" ;
	switch (p) {
		case '+' : {
			return Number(a) + Number(b);
			//or return parseInt(a) + parseInt(b);
			break ;
		}
		case '-' : {
			return Number(a) - Number(b);
			break ;
		}
		case '*' : {
			return Number(a) * Number(b);
			break ;
		}
		case '/' : {
			return Number(a) / Number(b);
			break ;
		}
		default :{ return ;}
	}
}
exports.calc=calc; //very important line