export function generateTreeHTML(list) {
  return `<div>${ generateList(list) }</div>`
}

function generateList(list) {
  const listHTML = list.map((item) => `${generateListItem(item)}`).join('')
  return `<ul>
    ${ listHTML }
  </ul>`
}

function generateListItem(item) {
  return `
    <li>
      <p>${ item.name } - ${ item.price }</p>
      <div>${ item.children.length ? generateList(item.children) : '' }</div>
    </li>
  `
}