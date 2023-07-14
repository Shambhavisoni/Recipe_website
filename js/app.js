const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

// on 'clicking' nav-btn the event listener performs the function that it toogle the show link 
navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

// to add date in footer
const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
