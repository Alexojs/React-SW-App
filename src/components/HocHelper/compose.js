const compose = (...func) => (component) => {
	return func.reduceRight((value, f) => {
		return f(value);
	}, component);
}

export default compose;