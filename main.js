const reviews = [
    // {
    //     id: 1,
    //     name: "Rafa Ballerini",
    //     job: "Dev Fullstack",
    //     image: "https://avatars.githubusercontent.com/u/54322854?v=4",
    //     text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
    // },
    {
        name: "Antony Rodrigues",
        job: "Web Designer",
        color: "#2680a3",
        image: "https://media.licdn.com/dms/image/D4E03AQHaOjLxKZBojQ/profile-displayphoto-shrink_200_200/0/1680863252815?e=1688601600&v=beta&t=92Gt8dBAMgl8NT7oszDPUDNMGW3euU9yHWzJYz48zNU",
        text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa. pok heirloom fashion axe crazy stumptown venmo actually seitan. marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan",
    },
    {
        name: "Leticia Dias",
        job: "Dev Fullstack",
        color: "#4B2D73",
        image: "https://media.licdn.com/dms/image/C4D03AQHhNu-eqyBrsg/profile-displayphoto-shrink_200_200/0/1662335170139?e=1688601600&v=beta&t=3_kGhBDal337dSPXVUiZ-Ir-8RWTJlDp3EEDw24rXug",
        text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa. eum nobis asperiores velit vel sit nesciunt dolorem, labore, itaque libero delectus nulla?",
    },
    {
        name: "Leyla Santos",
        job: "Analista de Sistemas",
        color: "#AEC539",
        image: "https://media.licdn.com/dms/image/C4D03AQHxZJGRnSpFnA/profile-displayphoto-shrink_200_200/0/1636577423044?e=1688601600&v=beta&t=IF0hMEd5eddAbQOXIhl18-2pv0pxaIK-bc2T_UOf_bI",
        text: "Edison bulp put a bird on it humblebrag, offal activated charcoal slow-carb marfa. eum nobis asperiores velit vel sit nesciunt dolorem, marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan.",
    },
    {
        name: "Mikael Ribeiro",
        job: "Dev Fullstack",
        color: "#5051A3",
        image: "https://media.licdn.com/dms/image/C4D03AQHAVdnCq1FTow/profile-displayphoto-shrink_200_200/0/1662434560751?e=1688601600&v=beta&t=RZstGkWJai288JpiAI-PS3_iWj8w44isyGSSE6FZqg8",
        text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
    }
]

const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const randBtn = document.getElementById('random')
const userInfo = document.getElementById('userInfo')

let i = 0;
prevBtn.addEventListener('click', () => {
    if (i >= 0) {
        i--
        console.log(i)
        changeUser()
    }
})
nextBtn.addEventListener('click', () => {
    i++
    console.log(i)
    changeUser()

})
randBtn.addEventListener('click', () => {
    i = Math.floor(Math.random() * 4);
    changeUser()

})

function changeUser() {
    document.body.style.setProperty('--cor-destaque', `${reviews[i].color}`);
    userInfo.innerHTML = `
    <div class="revImg">
                    <img src="${reviews[i].image}" class="pic">
                </div>
                <div class="name">
                    <h2>${reviews[i].name}</h2>
                    <h3 class="category">${reviews[i].job}</h3>
                </div>
                <div class="description">
                    <p>${reviews[i].text}</p>
                </div>
    `;
}
