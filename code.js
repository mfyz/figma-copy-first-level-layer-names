// console.log('--> figma.currentPage.children', figma.currentPage.children)

let namesList = []
figma.currentPage.children.forEach((child) => {
	namesList.push(child.name)
})

console.log(namesList.reverse().join('\n'))

figma.closePlugin()
