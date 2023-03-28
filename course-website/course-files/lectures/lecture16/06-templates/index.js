//The data:
const firstName = "Jane";
const pic = "patrick.png"; 
const score = 300;

console.log(firstName);
console.log(pic);
console.log(score);

document.querySelector('main').innerHTML = `
    <section class="card">
        <img src="${pic}" />
        <p>Welcome, ${firstName}. Your current high score is ${score}.</p>
    </section>
`;
