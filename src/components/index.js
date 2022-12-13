export const createTitle = (text = " ") => {
	const element = document.createElement("h1")
	element.innerHTML = text
	document.body.appendChild(element)
}

export const createP = (text = " ") => {
	const element = document.createElement("p")
	element.innerHTML = text
	document.body.appendChild(element)
}