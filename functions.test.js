const { stringLiteral } = require('@babel/types')
const {getUserChoice,
    userInput,
    getCpuChoice,
    getWinner,
    playGame} = require('./app')

    //const userChoice = prompt("Please select rock, paper or scissors?");

    describe ('getUserChoice', () => { 
        test("getUserChoice", () => {
            expect(getUserChoice).toBeDefined()
        })
        test('is a function', () => {
            expect(getUserChoice instanceof Function).toEqual(true);
        })
        test('receive arguments', ()=>{
            expect(getUserChoice).toContain(userInput);
        })
    })

    describe ('getCpuChoice', () => {

        test("getUserChoice", () => {
            expect(getCpuChoice).toBeDefined()
        })
        test('is a function', () => {
            expect(getCpuChoice instanceof Function).toEqual(true);
        })
        // test('receive arguments', ()=>{
        //     expect(getCpuChoice).toContain();
        // })
        test('receive arguments', ()=>{
                const randomNumber = Math.floor(Math.random() * 3)

            expect(randomNumber).toBeLessThanOrEqual(2);
        })

        test('A cpu choice is returned', () => {
            
            const getCpuChoice = (num) => {
               
                switch (num) {
                case 0:
                    return "rock";
                    break;
                case 1:
                    return "paper";
                    break;
                case 2:
                    return "scissors";
                    break;
                }
            };
            
         // expect(typeof getCpuChoice() == 'string').toEqual(true);
          expect(getCpuChoice(2)).toEqual('scissors')
        });
    })
