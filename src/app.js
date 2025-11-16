const inputRef = document.querySelector('#bookmarkInput')
const buttonRef = document.querySelector('#addBookmarkBtn')
const listRef = document.querySelector('#bookmarkList')

const bookarr = []

buttonRef.addEventListener('click', () => {
	const value = inputRef.value.trim()
	if (value) {
		bookarr.push(value)
		inputRef.value = ''

		renderList(bookarr)
	}
})

function renderList(array) {
	listRef.innerHTML = array
		.map((item, index) => {
			return `<li class="bookmark" data-idx="${index}">
	<a href="https://${item}" target="_blank">${item}</a>
		<button type="button" class="delete">delete</button>
</li>`
		})
		.join('')
}
// listRef.addEventListener('click', event => {
// 	const index = event.target.dataset.idx
// 	if (event.target.classList.contains('delete')) {
// 		bookarr.splice(index, 1)
// 		renderList(bookarr)
// 	}
// })
listRef.addEventListener('click', event => {
	if (event.target.classList.contains('delete')) {
		const li = event.target.closest('.bookmark') // ← нашли родителя
		const index = li.dataset.idx // ← получили индекс

		bookarr.splice(index, 1)
		renderList(bookarr)
	}
})
