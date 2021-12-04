import React,{ useState, useEffect } from "react"

export default class ModeSwitcherButton extends React.Component {
    
    constructor(props) {
        super(props)
        this.handle = this.handle.bind(this)
    }

    componentDidMount() {
        if (localStorage.getItem('theme') === themeType.dark || (!('theme' in localStorage) && window.matchMedia(`(prefers-color-scheme: ${themeType.dark})`).matches)) {
            window.document.body.classList.add(themeType.dark)
        } else {
            window.document.body.classList.remove(themeType.dark)
        }
    }

    handle() {  
        window.document.querySelector('html').classList.toggle(themeType.dark)
        const currTheme = localStorage.getItem('theme') === themeType.dark ? themeType.light : themeType.dark

        window.localStorage.setItem(currTheme,'theme')
    }


    render() {
        return  (
            <button onClick={this.handle}>
                    change 
            </button>
        )
    }
}

const themeType = {
    dark: 'dark',
    light: 'light'
  };

