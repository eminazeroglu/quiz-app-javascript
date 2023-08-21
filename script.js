const listContent = document.getElementById("list-content");
const btnAdd = document.querySelector("#btnAdd");
const inputText = document.querySelector("#inputText");
const items = [
    { id: 1, name: "Tapsiriq 1" },
    { id: 2, name: "Tapsiriq 2" },
    { id: 3, name: "Tapsiriq 3" },
    { id: 4, name: "Tapsiriq 4" },
];

function createLi() {
    listContent.innerHTML = "";
    for (item of items) {
        let li = `
			<li class="p-2 flex items-center justify-between item-list">
				<label class="flex items-center space-x-2">
					<input type="checkbox" class="border" />
					<span>${item.name}</span>
				</label>
				<div>
					<button
						class="inline-flex items-center justify-center py-1 px-2 text-white rounded text-xs bg-blue-500"
					>
						Edit
					</button>
					<button
						class="inline-flex items-center justify-center py-1 px-2 text-white rounded text-xs bg-red-500"
					>
						Delete
					</button>
				</div>
			</li>
		`;
        listContent.insertAdjacentHTML("beforeend", li);
    }
}

createLi();

btnAdd.addEventListener("click", function () {
    items.push({ id: items.length + 1, name: inputText.value });
    inputText.value = "";
    createLi();
});

inputText.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        let value = e.target.value;
        items.push({ id: items.length + 1, name: value });
		e.target.value = '';
		createLi();
    }
});
