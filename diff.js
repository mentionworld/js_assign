function difference(arr1, arr2) {

    let a1 = arr1;
    let a2 = arr2;

    let a = [],
        diff = [];
    for (let i = 0; i < a1.length; i++)
        a[a1[i]] = false;
    for (i = 0; i < a2.length; i++)
        if (a[a2[i]] === true) { delete a[a2[i]]; } else a[a2[i]] = true;
    for (let k in a)
        diff.push(k);
    return diff;
}

console.log(difference([1, 2, 3, 50, 100], [100, 2, 1, 10, 300]));