import './style.css'
import { treeService } from './services/treeService'
import { services } from './data/data.json'
import { generateTreeHTML } from './helpers/tree.template'

const servicesTree = treeService.buildTree(services)
const htmlTree = generateTreeHTML(servicesTree)

document.querySelector('#app').innerHTML = htmlTree

