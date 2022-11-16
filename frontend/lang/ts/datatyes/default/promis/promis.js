var dhanushPromise = new Promise(function (resl, notresol) {
    // resl('not resolved')
    notresol('not resolved');
});
dhanushPromise.then(function (a) { console.log(a); });
dhanushPromise.then(function (a) { console.log(a); });
