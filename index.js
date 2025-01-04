let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

function isValidURL(string) {
	const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/
	return urlPattern.test(string)
}

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage
	render(myLeads)
}

tabBtn.addEventListener("click", function () {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		myLeads.push(tabs[0].url)
		localStorage.setItem("myLeads", JSON.stringify(myLeads))
		render(myLeads)
	})
})

function render(leads) {
	let listItems = ""
	for (let i = 0; i < leads.length; i++) {
		listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
	}
	ulEl.innerHTML = listItems
}

const handleDelete = () => {
	localStorage.clear()
	myLeads = []
	render(myLeads)
}

deleteBtn.addEventListener("dblclick", handleDelete)

const handleInput = () => {
	if (!isValidURL(inputEl.value)) {
		alert("Please enter a valid URL")
		return
	}

	myLeads.push(inputEl.value)
	inputEl.value = ""

	localStorage.setItem("myLeads", JSON.stringify(myLeads))
	render(myLeads)
}

inputEl.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		event.preventDefault()
		handleInput()
	}
})

inputBtn.addEventListener("click", handleInput)

// inputBtn.addEventListener("click", function () {
// 	if (!isValidURL(inputEl.value)) {
// 		alert("Please enter a valid URL")
// 		return
// 	}

// 	myLeads.push(inputEl.value)
// 	inputEl.value = ""

// 	localStorage.setItem("myLeads", JSON.stringify(myLeads))
// 	render(myLeads)
// })

// deleteBtn.addEventListener("dblclick", function () {
// 	localStorage.clear()
// 	myLeads = []
// 	render(myLeads)
// })
