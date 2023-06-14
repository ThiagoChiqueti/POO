export class Component{
  #element = null
  constructor(tag, parent, option){
    this.tag = tag,
    this.parent = parent,
    this.option = option
    this.build()
  }
  
  getElement(){
    return this.#element
  }

  build(){
    this.#element = document.createElement(this.tag)
    Object.assign(this.#element, this.option)
    return this
  }
  
  render(){
    if(this.parent instanceof Component){
      this.parent.getElement.append(this.#element)
    }else{
      document.querySelector(this.parent).append(this.#element)
    }
  }
}