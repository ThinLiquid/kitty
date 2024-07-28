import Kitty from '..'
import { KittyAttributes } from '../types'

export class Container extends Kitty {
  constructor (attrs: Record<string, string> = {}) {
    super('div', attrs)

    this.class('container')
  }

  static render (attrs: KittyAttributes = {}): Container {
    return new Container(attrs)
  }
}

export class Div extends Kitty {
  constructor (attrs: KittyAttributes = {}) {
    super('div', attrs)
  }

  static render (attrs: KittyAttributes = {}): Div {
    return new Div(attrs)
  }
}

export class Break extends Kitty {
  constructor () {
    super('br', {})
  }

  static render (): Break {
    return new Break()
  }
}

export class Paragraph extends Kitty {
  constructor (attrs: KittyAttributes = {}) {
    super('p', attrs)
  }

  static render (attrs: KittyAttributes = {}): Paragraph {
    return new Paragraph(attrs)
  }
}
