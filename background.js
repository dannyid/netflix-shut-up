var options = {
    configurable: false, 
    value: window.console
}

Object.defineProperty(window, 'console', options);

