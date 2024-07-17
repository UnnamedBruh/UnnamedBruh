function handleFileUpload(event) {
	const file = event.target.files[0]
	if (file) {
		const reader = new FileReader()
		reader.onload = function(e) {
			const img = document.createElement('img')
			img.src = e.target.result
			img.style.maxWidth = '100%'
			img.style.maxHeight = '100%'
			document.getElementById('imageContainer').appendChild(img)
		}
		reader.readAsDataURL(file)
	}
}
