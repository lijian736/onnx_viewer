
var host = host || {};

host.BrowserHost = class {

    constructor(vscode) {
        this._vscode = vscode;
        this._window = window;
        this._document = window.document;

        this._environment = {
            name: this._document.title,
            menu: true
        };
    }

    get window() {
        return this._window;
    }

    get document() {
        return this._document;
    }

    async view(view) {
        this._view = view;
    }

    async start() {
        this.document.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        this.document.addEventListener('drop', (e) => {
            e.preventDefault();
        });
        this.document.body.addEventListener('drop', (e) => {
            e.preventDefault();
        });
        this._view.show('welcome');
    }

    environment(name) {
        return this._environment[name];
    }

    error(message, detail) {
        this._vscode.postMessage({ type: 'error', message: detail });
    }

    /**
     * save numpy tensor
     * @param {*} name 
     * @param {*} extension 
     * @param {*} defaultPath 
     * @param {*} callback 
     */
    save(name, extension, defaultPath, callback) {
        callback(defaultPath + '.' + extension);
    }

    /**
     * export png and svg images
     * @param {string} file the file name
     * @param {Blob} blob data blob
     */
    export(file, blob) {
        // const element = this.document.createElement('a');
        // element.download = file;
        // element.href = URL.createObjectURL(blob);
        // this.document.body.appendChild(element);
        // element.click();
        // this.document.body.removeChild(element);

        blob.arrayBuffer().then((arrayBuf)=>{
            let data = new Uint8Array(arrayBuf);
            this._vscode.postMessage({ type: 'export', fileName: file, data: data });
        })
    }

    exception(error, fatal) {
        //send telemetry， do nothing
    }

    event(name, params) {
        //do nothing
    }

    _element(id) {
        return this.document.getElementById(id);
    }
};

if (!('scrollBehavior' in window.document.documentElement.style)) {
    const __scrollTo__ = Element.prototype.scrollTo;
    Element.prototype.scrollTo = function(options) {
        if (options !== undefined) {
            if (options === null || typeof options !== 'object' || options.behavior === undefined || arguments[0].behavior === 'auto' || options.behavior === 'instant') {
                if (__scrollTo__) {
                    __scrollTo__.apply(this, arguments);
                }
            } else {
                const now = () =>  window.performance && window.performance.now ? window.performance.now() : Date.now();
                const ease = (k) => 0.5 * (1 - Math.cos(Math.PI * k));
                const step = (context) => {
                    const value = ease(Math.min((now() - context.startTime) / 468, 1));
                    const x = context.startX + (context.x - context.startX) * value;
                    const y = context.startY + (context.y - context.startY) * value;
                    context.element.scrollLeft = x;
                    context.element.scrollTop = y;
                    if (x !== context.x || y !== context.y) {
                        window.requestAnimationFrame(step.bind(window, context));
                    }
                };
                const context = {
                    element: this,
                    x: typeof options.left === 'undefined' ? this.scrollLeft : ~~options.left,
                    y: typeof options.top === 'undefined' ? this.scrollTop : ~~options.top,
                    startX: this.scrollLeft,
                    startY: this.scrollTop,
                    startTime: now()
                };
                step(context);
            }
        }
    };
}

if (typeof window !== 'undefined' && typeof window === 'object') {
    window.host = host;
}

if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    module.exports = host;
}
