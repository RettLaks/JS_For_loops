// Oppgave 1
for (let i = 0; i < 10; i++) {
    document.writeln(`<p style="color: red"><br>Hello World</p>`)
}

// Oppgave 2
for (let i = 0; i < 51; i++) {
    document.writeln(`<br>${i}`)
}

// Oppgave 3
var sum = 0;
for (let i = 1; i < 11; i++) {
    sum += i;
}
document.writeln(`<br><br>${sum}`)

// Oppgave 4
var str = ""
for (let i = 0; i < 4; i++) {
    str += "#";
    document.writeln(`<br>${str}`);
}
document.writeln(`<br>`)

// Oppgave 5
for (let i = 0; i < 51; i++) {
    if(i % 2 == 0){
        document.writeln(i)
    }
}
document.writeln(`<br>`)

// Oppgave 6
for (let i = 0; i < 101; i++) {
    if(i % 15 == 0){
        document.writeln(i)
    }
}
document.writeln(`<br>`)

// Oppgave 7
const tall = [3,45,2,5,8,123,3]
var storst = tall[0]

for (let i = 0; i < tall.length; i++) {
    if (tall[i]>storst) {
        storst = tall[i]
    }
}
document.writeln(`Det største tallet er ${storst}`)

