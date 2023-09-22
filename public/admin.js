
// Your Code Here
async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(book =>{
        console.log(book)
        renderBook(book)
    });
}
async function renderBook(book){
const root = document.getElementById('root')

const li = document.createElement('li')
li.textContent = book.title

const input = document.createElement('input')
input.value = book.quantity

const saveBtn = document.createElement('button')
saveBtn.textContent = 'Save'

saveBtn.addEventListener('click', () => {
    const url = 'http://localhost:3001/updateBook'
    const payload = {
        id: book.id,
        quantity: input.value
    }
    fetch(url, {
        method: 'PATCH',
        headers: {
           'content-type': 'application/json' 
        },
        body: JSON.stringify(payload)
    })
})
li.append(input,saveBtn)
root.append(li)
}
main()