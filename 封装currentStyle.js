function getStyle(obj,attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return obj.getComputedStyle(oDiv,flase)[attr];
	}
}