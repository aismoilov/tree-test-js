import { nestedClone } from "../utils"

class Tree {
  constructor() {
    this.treeList = [] 
  }

  buildTree(data) {
    const sortedData = this.sortArray(nestedClone(data))
    sortedData.forEach((item) => {
      if(item.head) {
        this.addToParent(this.treeList, item)
      } else {
        this.addToRoot(item)
      }
    })

    return this.treeList
  }

  sortArray(array) {
    return array.sort((a, b) => {
      if (a.node === b.node) {
        return a.sorthead < b.sorthead ? -1 : 1
      }

      return a.node < b.node ? -1: 1
    })
  }


  addToParent(list, item) {
    list.forEach((listItem) => {
      if (listItem.id === item.head) {
        listItem.children.push({...nestedClone(item), children: []})
      }

      if (listItem.children.length) {
        this.addToParent(listItem.children, item)
      }
    })
  }

  addToRoot(item) {
    this.treeList.push({...nestedClone(item), children: []})
  }
}

export const treeService = new Tree()