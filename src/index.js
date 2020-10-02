import './assets/style.css';
import * as Page from './page-load';
import * as Menu from './menu';
import * as Contact from './contact';

Page.createHeroLayout();
Page.createHomeContent();

const homeLink = document.querySelector('#home-link');
homeLink.addEventListener('click', () => {
  const content = document.querySelector('#content');
  const target = document.querySelector('#content-section');
  content.removeChild(target);
  Page.createHomeContent();
  const currentTab = document.querySelector('li.is-active');
  const newCurrent = document.querySelector('#home-tab');
  currentTab.classList.remove('is-active');
  newCurrent.classList.add('is-active');
});

const menuLink = document.querySelector('#menu-link');
menuLink.addEventListener('click', () => {
  const currentTab = document.querySelector('li.is-active');
  const newCurrent = document.querySelector('#menu-tab');
  currentTab.classList.remove('is-active');
  newCurrent.classList.add('is-active');
  Menu.default();
});

const contactLink = document.querySelector('#contact-link');
contactLink.addEventListener('click', () => {
  const currentTab = document.querySelector('li.is-active');
  const newCurrent = document.querySelector('#contact-tab');
  currentTab.classList.remove('is-active');
  newCurrent.classList.add('is-active');
  Contact.default();
});
