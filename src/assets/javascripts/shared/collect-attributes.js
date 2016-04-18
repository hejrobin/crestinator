export default function collectAttributes(targetNode) {
	let attributes = targetNode.attributes;
	const collectedAttributes = {};
	Array.from(attributes).forEach(function(attr) {
		if(attr.name === 'class') {
			collectedAttributes.classNames = attr.value.split(' ');
		} else if(attr.name.indexOf('data-') > -1) {
			let propertyName = attr.name.substr(5).replace(/(\-[a-z])/g, function(match) {
				return match.toUpperCase().replace('-', '');
			});
			collectedAttributes[propertyName] = attr.value;
		}
	});
	return collectedAttributes;
}
