import './style.css'
import placeholder from './assets/placeholder.jpg'

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
    <h1>Certifications</h1>

    <div class="carousel">

      <div class="card">
        <img src=${placeholder}>
        <span class="title">Card 1</span>
        <span class="subtitle">Lorem ipsum dolor sit amet...</span>
        <button class="link">Button</button>
      </div>

      <div class="card">
        <img src=${placeholder}>
        <span class="title">Card 2</span>
        <span class="subtitle">Lorem ipsum dolor sit amet...</span>
        <button class="link">Button</button>
      </div>

      <div class="card">
        <img src=${placeholder}>
        <span class="title">Card 3</span>
        <span class="subtitle">Lorem ipsum dolor sit amet...</span>
        <button class="link">Button</button>
      </div>

    </div>
  </div>
`
