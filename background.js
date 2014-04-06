Object.defineProperty(window, 'console', {configurable: false, value: window.console});

window.console2 = (function () {

    window.globals = [],
    iframe = document.createElement(‘iframe’),
    cleanWindow;

    iframe.src = ‘about:blank’;
    iframe.style.display = ‘none’;
    document.body.appendChild(iframe);

    return (iframe.contentWindow || iframe.contentDocument).console;
    
}());

Object.defineProperty(window, “console”, {
    get: function () { 
        return window.console2; 
    }
})
