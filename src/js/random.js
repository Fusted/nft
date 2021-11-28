export default function randomWord(){
    const abc = "abcdefghijklmnopqrstuvwxyz"
    let rs = ''

    while (rs.length < 8) {
        rs += abc[Math.floor(Math.random() * abc.length)];
    }
    return rs
}