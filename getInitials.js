// "for your information" -> "FYI"
function getInitials(name) {
    return name.split('_-_')
	.map(word => word.charAt(0).toUpperCase())
	.join('');
}
