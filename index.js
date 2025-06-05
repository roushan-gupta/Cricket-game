 let scoreStr=localStorage.getItem('score');
        let score;
        resetScore(scoreStr);

        function resetScore(scoreStr){
            // score = JSON.parse(scoreStr) || {win:0, lost:0, tie:0,};
            score = scoreStr ? JSON.parse(scoreStr) : {win:0, lost:0, tie:0,};
            // if(scoreStr !== null){
            //     score = JSON.parse(scoreStr);
            // }else{
            //     score={
            //         win:0,
            //         lost:0,
            //         tie:0,
            //     };
            // }
            score.displayScore=function(){
                return `Score: Won: ${score.win}, lost: ${score.lost}, Tie: ${score.tie}`;
            };
          showResult();
        }
        function generateComputerChoice(){
        let randomNumber=Math.random()*3;
            if(randomNumber>0 && randomNumber<=1){
                return 'Bat';
            }else if(randomNumber>1 && randomNumber<=2){
                return 'Ball';
            }else{
                return 'Stump';
            }
        }
        function getResult(userMove, computerMove){
            if(userMove==='Bat'){
                if(computerMove==='Bat'){
                    score.tie++;
                    return `it's a tie`;
                }else if(computerMove==='Ball'){
                    score.win++;
                    return 'User won';
                }else if(computerMove==='Stump'){
                    score.lost++;
                    return 'Computer has won';
                }
            }
            else if(userMove==='Ball'){
                if(computerMove==='Ball'){
                    score.tie++;
                    return `It's a tie`;
                }else if(computerMove==='Bat'){
                    score.lost++;
                    return 'Computer has won';
                }else if(computerMove==='Stump'){
                    score.win++;
                    return 'User won';
                }
            }
            else{
                if(computerMove==='Ball'){
                    score.lost++;
                    return 'Computer has won';
                }else if(computerMove==='Bat'){
                    score.win++;
                    return 'User won';
                }else if(computerMove==='Stump'){
                    score.tie++;
                    return `It's a tie`;
                }
            }
        }
        function showResult(userMove, computerMove,result){
            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('#user-move').innerText=userMove ? `you have chosen ${userMove}` : "";
            // document.querySelector('#user-move').innerText=userMove !== undefined ? `you have chosen ${userMove}` : "";
            document.querySelector('#computer-move').innerText=computerMove ? `Computer choice is:  ${computerMove}` : "";

            document.querySelector('#result').innerText= result || '';

            document.querySelector('#score').innerText= score.displayScore();
            console.log(score);
            // alert(`you have chosen ${userMove}. computer choice is ${computerMove}
            // result: ${result}
            // ${score.displayScore()}
        }