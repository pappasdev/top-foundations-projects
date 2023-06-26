import imgUrl from './logo.svg';
import './index.css';
import { aboutPage } from './about';
import { menuPage } from './menu';
import { homePage } from './home';
const content = document.getElementById('content');

const pageContent = document.createElement('div');
pageContent.id = 'pageContent';

const banner = document.createElement('img');
banner.src = imgUrl;

//navigation for the three buttons (home about menu)
const nav = document.createElement('div');
nav.id = 'nav';

// home button
const home = document.createElement('button');
home.textContent = 'Home';
home.addEventListener('click',homePage);
//about button
const about = document.createElement('button');
about.textContent = 'About';
about.addEventListener('click',aboutPage);
// menu button
const menu = document.createElement('button');
menu.textContent = 'Menu';
menu.addEventListener('click',menuPage);

document.body.appendChild(content);

content.appendChild(banner);
content.appendChild(nav);
content.appendChild(pageContent);
nav.appendChild(home);
nav.appendChild(about);
nav.appendChild(menu);
homePage();
export { pageContent };

//! All buttons must utilize the same div for content.