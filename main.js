const darkToggle = document.querySelector('.dark-toggle');
const justifyEnd = document.querySelector('.justify-end');
const container = document.querySelector('.container');
const rigthSite = document.querySelector('.rightsite');

const selectionBtn = document.querySelectorAll('.selectionBtn');
const mainBox = document.querySelector('.main-box');

const submitButton = document.querySelectorAll(".submitBtn");
let matter = document.querySelectorAll(".metter1");
const questionCount = document.querySelectorAll(".leftSide.question p span");
const squarValliedShow = document.querySelector('.squarVallied');
const squarVallied = document.querySelector('.squarVallied div h1 span');
const squarMeter = document.querySelector('.squarVallied div meter');
const boxes = document.querySelectorAll('.boxes');

const currection = document.querySelector('.currection');
const reload = document.querySelectorAll('.play-again');
const currectionList = document.querySelector('.currection-list');
const currectionShow = document.querySelector('.currection-show');

let currentOptionText = null ;
let currectAnswer = null;
let currentSubject = null;
let questionCountingNum = 1;
let totalSquar = 0;

let currectionArray = [];
let currectionText = null

// quetion loaded
let htmlQuestion = [];
let cssQuestion = [];
let jsQuestion = [];
let sassQuestion = [];

// json Loaded question
async function fetchQeustion(){
    try{
        const [htmlRes,cssRes, jsRes, sassRes] = await Promise.all([
             fetch('./htmlquestion.json'),
             fetch('./cssquestion.json'),
             fetch('./jsquestion.json'),
             fetch('./sassquestion.json')
        ]);
            htmlQuestion = await htmlRes.json();
            cssQuestion = await cssRes.json();
            jsQuestion = await jsRes.json();
            sassQuestion = await sassRes.json(); 
    }
    catch(error){
        console.log('there is some on plz tex'+ error)
    }
}

// mainFuntion
fetchQeustion().then(() => {

    // DarkToggle
    const toggleUpdates = () => {
    darkToggle.classList.toggle('active');
    justifyEnd.classList.toggle('active');
    container.classList.toggle('active');
    rigthSite.classList.toggle('active');
    }

    darkToggle.addEventListener('click', ()=> {
        justifyEnd.addEventListener('click', toggleUpdates);
    })

    // subject select
    selectionBtn.forEach((selection) =>{
        let img = document.createElement('img');        
        selection.addEventListener('click',() =>{
        
            const subject = selection.dataset.subject
            const logoItem = document.querySelector('.manurech h1');
            logoItem.textContent = "";
            mainBox.classList.add('show-not');
            
            if( subject=== "html"){
                logoItem.appendChild(img);
                img.src = "svgs/html-icon.svg";
                htmlBox = document.querySelector(".html");
                htmlBox.classList.remove('show-not');
                currentSubject = "html"
                html()  
            }

            else if(subject ==="css"){
                logoItem.appendChild(img);
                img.src = "svgs/css-icon.svg";
                cssBox = document.querySelector(".css");
                cssBox.classList.remove('show-not');
                currentSubject = "css"
                css()  
            }

            else if(subject === "js"){
                logoItem.appendChild(img);
                img.src = "svgs/javascript-icon.svg";
                jsBox = document.querySelector(".js");
                jsBox.classList.remove('show-not');
                currentSubject = "js"
                javascript() 
            }

            else if(subject === "sass"){
                logoItem.appendChild(img);
                img.src = "svgs/sass-icon.svg";
                sassBox = document.querySelector(".sass");
                sassBox.classList.remove('show-not');
                currentSubject = "sass"
                sass()   
            }

        })
    })


    // quesiton
    function html(){
        const questionHtml = document.querySelector('.questionHtml h3');
        const AllButns = document.querySelectorAll('.htmlOption button')
        const optionQuestion = Array.from(AllButns).filter(btn => !btn.classList.contains('submitBtn'));
        
        // reset select
        optionQuestion.forEach(b => b.classList.remove('selected'));
        
        // rendom question
        let rendomQuestion = Math.floor(Math.random()*htmlQuestion.length);
        let questionIndex = htmlQuestion[rendomQuestion];

        questionHtml.textContent = questionIndex.question;
        currectAnswer = questionIndex.answer;
        currectionText = questionIndex.question;
        
        // question option
        optionQuestion.forEach((option, index) => {
            let op = option.querySelector('p');
            op.textContent = questionIndex.options[index]
        });
        
        optionQuestion.forEach(btn => {
         btn.addEventListener('click', function () {
            optionQuestion.forEach(b => b.classList.remove('selected')); 
            this.classList.add('selected');
            currentOptionText = this.querySelector('p').textContent;
            
            });
        });
    }

    function css(){
        const questionCss = document.querySelector('.questionCss h3');
        const AllButns = document.querySelectorAll('.cssOption button')
        const optionQuestion = Array.from(AllButns).filter(btn => !btn.classList.contains('submitBtn'));
        
        // reset select
        optionQuestion.forEach(b => b.classList.remove('selected')); 
        
        // rendom question
        let rendomQuestion = Math.floor(Math.random()*cssQuestion.length);
        let questionIndex = cssQuestion[rendomQuestion];

        questionCss.textContent = questionIndex.question;
        currectAnswer = questionIndex.answer;
        currectionText = questionIndex.question;
        
        // question option
        optionQuestion.forEach((option, index) => {
            let op = option.querySelector('p');
            op.textContent = questionIndex.options[index]
        });

        optionQuestion.forEach(btn => {
         btn.addEventListener('click', function () {
            optionQuestion.forEach(b => b.classList.remove('selected')); 
            this.classList.add('selected');
            currentOptionText = this.querySelector('p').textContent;
            
            });
        });        
    }
    
    function javascript(){
        const questionJs = document.querySelector('.questionJs h3');
        const AllButns = document.querySelectorAll('.jsOption button')
        const optionQuestion = Array.from(AllButns).filter(btn => !btn.classList.contains('submitBtn'));
        
        // select reset
        optionQuestion.forEach(b => b.classList.remove('selected')); 
        
        // rendom question
        let rendomQuestion = Math.floor(Math.random()*jsQuestion.length);
        let questionIndex = jsQuestion[rendomQuestion];

        questionJs.textContent = questionIndex.question;
        currectAnswer = questionIndex.answer;
        currectionText = questionIndex.question;

        // question option
        optionQuestion.forEach((option, index) => {
            let op = option.querySelector('p');
            op.textContent = questionIndex.options[index]
        });
        
        //   selectOption
         optionQuestion.forEach(btn => {
         btn.addEventListener('click', function () {
            optionQuestion.forEach(b => b.classList.remove('selected')); 
            this.classList.add('selected');
            currentOptionText = this.querySelector('p').textContent;
            
            });
        });
    }

    function sass(){
        const questionSass = document.querySelector('.questionSass h3');
        const AllButns = document.querySelectorAll('.sassOption button')
        const optionQuestion = Array.from(AllButns).filter(btn => !btn.classList.contains('submitBtn'));
        
        // reset select
        optionQuestion.forEach(b => b.classList.remove('selected')); 
        
        // rendom question
        let rendomQuestion = Math.floor(Math.random()*sassQuestion.length);
        let questionIndex = sassQuestion[rendomQuestion];

        questionSass.textContent = questionIndex.question;
        currectAnswer = questionIndex.answer;
        currectionText = questionIndex.question

        // question option
        optionQuestion.forEach((option, index) => {
            let op = option.querySelector('p');
            op.textContent = questionIndex.options[index]
        });
        
        optionQuestion.forEach(btn => {
         btn.addEventListener('click', function () {
            optionQuestion.forEach(b => b.classList.remove('selected')); 
            this.classList.add('selected');
            currentOptionText = this.querySelector('p').textContent;
            
            });
        });
    }

    // Control funtion
        submitButton.forEach(btn => {
            btn.addEventListener('click', () =>{
            
                if(!currentOptionText){
                    alert('please select the option')
                    return
                }

                if(currectAnswer === currentOptionText){
                        totalSquar++;
                }else{
                    currectionArray.push(`${currectionText} - ${currectAnswer}`)
                } 
    
                questionCountingNum++
                
                matter.forEach(mtr => {
                    mtr.value=questionCountingNum})

                questionCount.forEach(questioncounting => {
                    if(questionCountingNum <=10){
                        questioncounting.textContent = questionCountingNum
                    }else{
                        questioncounting.textContent = 10
                    }
                })

                currentOptionText = null;

                if(questionCountingNum<=10){
                    if(currentSubject==="html"){html()}
                    else if(currentSubject === "css"){css()}
                    else if(currentSubject === "js"){javascript()}
                    else if(currentSubject === "sass"){sass()}
                }else{
                    boxes.forEach(box => {
                        box.classList.add('show-not')
                    })
                    squarValliedShow.classList.remove('show-not')
                    squarVallied.textContent = totalSquar;
                    squarMeter.value = totalSquar;
                    }
            })
        })
  
        currection.addEventListener('click', () => {
            currectionArray.forEach((value, index) => {
                currectionShow.classList.remove('show-not')
                const li = document.createElement('li');
                li.textContent = index+1 +'. '+ value;
                currectionList.appendChild(li)
                squarValliedShow.classList.add('show-not');
            })
        }) 
        
        reload.forEach(event => {
            event.addEventListener('click', ()=>{
                location.reload()
            })
        })
})  














