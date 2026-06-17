import './style.css'
import placeholder from './assets/placeholder.jpg'

// card contents
interface CardData {
  image: string
  title: string
  subtitle: string
  buttonText: string
}

// certifications
const certifications: CardData[] = [
  { image: placeholder, title: 'Card 1', subtitle: 'Lorem ipsum dolor sit amet...', buttonText: 'Button'},
  { image: placeholder, title: 'Card 2', subtitle: 'Lorem ipsum dolor sit amet...', buttonText: 'Button'},
  { image: placeholder, title: 'Card 3', subtitle: 'Lorem ipsum dolor sit amet...', buttonText: 'Button'},
  { image: placeholder, title: 'Card 4', subtitle: 'Lorem ipsum dolor sit amet...', buttonText: 'Button'},
  { image: placeholder, title: 'Card 5', subtitle: 'Lorem ipsum dolor sit amet...', buttonText: 'Button'}
]

// UI projects
const uiProjects: CardData[] = [
  { image: placeholder, title: 'Card 1', subtitle: 'Lorem ipsum dolor sit amet...', buttonText: 'Button'},
  { image: placeholder, title: 'Card 2', subtitle: 'Lorem ipsum dolor sit amet...', buttonText: 'Button'},
  { image: placeholder, title: 'Card 3', subtitle: 'Lorem ipsum dolor sit amet...', buttonText: 'Button'},
  { image: placeholder, title: 'Card 4', subtitle: 'Lorem ipsum dolor sit amet...', buttonText: 'Button'},
  { image: placeholder, title: 'Card 5', subtitle: 'Lorem ipsum dolor sit amet...', buttonText: 'Button'}
]

function renderCard ({ image, title, subtitle, buttonText }: CardData): string {
  return `
    <div class="card">
        <img src=${image}>
        <span class="title">${title}</span>
        <span class="subtitle">${subtitle}</span>
        <button class="link">${buttonText}</button>
      </div>
  `
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="header">
    <h1>bearbau</h1>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>projects</li>
      </ul>
  </div>

  <div class="container">
    <img src="${placeholder}" style="width: 200px;">
    <h1>notebook: stats for nerds</h1>
    <p>description blah blah</p>
    <button>this is a button</button>
  </div>

  <div class="container">   
    <h1>Certifications</h1>
    <div class="carousel">
      ${certifications.map(renderCard).join('')}
    </div>
  </div>

  <div class="container">
    <h1>UI Projects</h1>
    <div class="carousel">
      ${uiProjects.map(renderCard).join('')}
    </div>
  </div>

  <div class="footer">
    <span class="subtitle">made with <3 on react</span>
  </div>
`
