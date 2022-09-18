const quotes = [

    {
        quote:"절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다.",
        author:"L론허바드",
    },
    {
        quote:"계단을 밟아야 계단 위에 올라설수 있다.",
        author:"터키속담",
    },
    {
        quote:"오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
        author:"앙드레 말로",
    },
    {
        quote:"좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
        author:"단테",
    },
    {
        quote:"행복은 습관이다,그것을 몸에 지니라",
        author:"허버드",
    },
    {
        quote:"성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
        author:"톰 모나건",
    },
    {
        quote:"자신감 있는 표정을 지으면 자신감이 생긴다",
        author:"찰스다윈",
    },
    {
        quote:"평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
        author:"제임스 딘",
    },
    {
        quote:"네 믿음은 네 생각이 된다 . 네 생각은  네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다",
        author:"간디",
    },
    {
        quote:"일하는 시간과 노는 시간을 뚜렷이 구분하라 . 시간의 중요성을 이해하고 매순간을 즐겁게 보내고 유용하게 활용하라. 그러면 젋은 날은 유쾌함으로 가득찰것이고 늙어서도 후회할 일이 적어질것이며 비록 가난할 때라도 인생을 아름답게 살아갈수있다",
        author:"루이사 메이올콧",
    },
    
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");




const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];


quote.innerText= todaysQuote.quote;
author.innerText= " - "+todaysQuote.author;
