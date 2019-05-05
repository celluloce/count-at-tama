function ready(loaded) {
    if (['interactive', 'complete'].includes(document.readyState)) {
        loaded();
    } else {
        document.addEventListener('DOMContentLoaded', loaded);
    }
}
ready(() => {
    const onReset = [];
    /**
     * 
     * @param {string} id
     */
    const registerButtonBehavior = (id) => {
        const b1 = document.getElementById(id);
        onReset.push(() => {
            b1.innerText = '0';
        })
        b1.addEventListener('click', () => {
            const current = localStorage.getItem(id) | 0;
            b1.innerText = current++;
            localStorage.setItem(id, current++);
        });
    };
    registerButtonBehavior('button1');
    registerButtonBehavior('button2');
    document.getElementById('reset').addEventListener('click', () => {
        localStorage.clear();
        for (const f of onReset) {
            f();
        }
    });
})