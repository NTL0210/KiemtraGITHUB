async function tinhtoancong(a,b) {
    return a+b;
}
async function tinhtoantru(a,b) {
    return a-b;
}
async function tinhtoannhan(a,b) {
    return a*b;
}
async function tinhtoanchia(a,b) {
    return a/b;
}

async function main() {
    let kq = await tinhtoancong(5,6);
    console.log(kq);
    let kq2 = await tinhtoantru(40,4);
    console.log(kq2);
    let kq3 = await tinhtoannhan(6,6);
    console.log(kq3);
    let kq4 = await tinhtoanchia(40,4);
    console.log(kq4);
}

main();