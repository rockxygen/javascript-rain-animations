"use strict";

class Rainy {

    constructor(el, opt = {}) {

        this.element = document.querySelector(el);

        if (!(this.element instanceof Node)) {
            throw ("Can't initialize Rainy because " + el + " is not a Node.");
        }

        this.settings = this.extendSettings(opt);
        this.count = 0;
        this.amount = this.settings.amount;
        this.delay = this.settings.delay;
        this.duration = this.settings.duration;
        this.colors = this.settings.colors;

        return this;
    }
    extendSettings(settings) {
        let defaultSettings = {
          amount: 200,
          duration: 1.5,
          delay: 1,
          colors: []
        };
    
        let newSettings = {};
        for (var property in defaultSettings) {
          if (property in settings) {
            newSettings[property] = settings[property];
          } else {
            newSettings[property] = defaultSettings[property];
          }
        }
    
        return newSettings;
    }

    create(){
        const el = document.createElement('i');
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
            el.style.width = 0.2 + size + 'px';
            el.style.left = 1 + posX + 'px';
            el.style.animationDelay = (Math.random() * this.delay) + 's',
            el.style.animationDuration = 1 + (Math.random() * this.duration) + 's';
            el.style.background = `linear-gradient(transparent, ${this.colors[Math.floor(Math.random() * (this.colors.length))]})`;
        this.element.appendChild(el);
    }

    rain(){
        for(this.count; this.count < this.amount; this.count++){
            this.create();
        }
    }

}