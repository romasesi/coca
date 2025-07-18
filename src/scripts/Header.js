class Header  {
  selectors = {
    root:'[data-js-header]',
    overlay:'[data-js-header-overlay]',
    burgerButton:'[data-js-header-burger-button]'
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock'
  }

  constructor() {
    this.rootSelectors = document.querySelector(this.selectors.root)
    this.overlaySelecors = this.rootSelectors.querySelector(this.selectors.overlay)
    this.burgerButtonSelectors = this.rootSelectors.querySelector(this.selectors.burgerButton)
    this.bindEvents()
  }

  ClickBurgerButton = () => {
    this.burgerButtonSelectors.classList.toggle(this.stateClasses.isActive)
    this.overlaySelecors.classList.toggle(this.stateClasses.isActive)
    document.documentElement.classList.toggle(this.stateClasses.isLock)

  }

  bindEvents = ()=> {
    this.burgerButtonSelectors.addEventListener('click', this.ClickBurgerButton);
  }


}

export default Header