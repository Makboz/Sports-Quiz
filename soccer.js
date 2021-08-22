document.addEventListener('DOMContentLoaded', function() {
    
                let counter = 0;
                
                let q1_correct = document.querySelector('#q1_correct');
                let q1_incorrect = document.querySelectorAll('.q1_incorrect');
                let q1_status = document.querySelector("#q1_answer");
                
                q1_correct.addEventListener('click', function() {
                    q1_correct.style.backgroundColor = 'green';
                    q1_status.innerHTML = "Correct!";
                    counter++;
                });
                
                for (let i = 0; i < q1_incorrect.length; i++) {
                    q1_incorrect[i].addEventListener('click', function() {
                        q1_incorrect[i].style.backgroundColor = 'red';
                        q1_status.innerHTML = "Incorrect. Try Again";
                    });
                }
                
                let q2_correct = document.querySelector('#q2_correct');
                let q2_incorrect = document.querySelectorAll('.q2_incorrect');
                let q2_status = document.querySelector("#q2_answer");
                
                q2_correct.addEventListener('click', function() {
                    q2_correct.style.backgroundColor = 'green';
                    q2_status.innerHTML = "Correct!";
                    counter++;
                });
                
                for (let i = 0; i < q2_incorrect.length; i++) {
                    q2_incorrect[i].addEventListener('click', function() {
                        q2_incorrect[i].style.backgroundColor = 'red';
                        q2_status.innerHTML = "Incorrect. Try Again";
                    });
                }
                
                let q3_correct = document.querySelector('#q3_correct');
                let q3_incorrect = document.querySelectorAll('.q3_incorrect');
                let q3_status = document.querySelector("#q3_answer");
                
                q3_correct.addEventListener('click', function() {
                    q3_correct.style.backgroundColor = 'green';
                    q3_status.innerHTML = "Correct!";
                    counter++;
                });
                
                for (let i = 0; i < q3_incorrect.length; i++) {
                    q3_incorrect[i].addEventListener('click', function() {
                        q3_incorrect[i].style.backgroundColor = 'red';
                        q3_status.innerHTML = "Incorrect. Try Again";
                    });
                }
                
                let q4_correct = document.querySelector('#q4_correct');
                let q4_incorrect = document.querySelectorAll('.q4_incorrect');
                let q4_status = document.querySelector("#q4_answer");
                
                q4_correct.addEventListener('click', function() {
                    q4_correct.style.backgroundColor = 'green';
                    q4_status.innerHTML = "Correct!";
                    counter++;
                });
                
                for (let i = 0; i < q4_incorrect.length; i++) {
                    q4_incorrect[i].addEventListener('click', function() {
                        q4_incorrect[i].style.backgroundColor = 'red';
                        q4_status.innerHTML = "Incorrect. Try Again";
                    });
                }
                
                let q5_correct = document.querySelector('#q5_correct');
                let q5_incorrect = document.querySelectorAll('.q5_incorrect');
                let q5_status = document.querySelector("#q5_answer");
                
                q5_correct.addEventListener('click', function() {
                    q5_correct.style.backgroundColor = 'green';
                    q5_status.innerHTML = "Correct!";
                    counter++;
                });
                
                for (let i = 0; i < q5_incorrect.length; i++) {
                    q5_incorrect[i].addEventListener('click', function() {
                        q5_incorrect[i].style.backgroundColor = 'red';
                        q5_status.innerHTML = "Incorrect. Try Again";
                    });
                }

                let q6_response = document.querySelector('#q6_response');
                let submit_q6 = document.querySelector('#q6');
                let q6_status = document.querySelector('#q6_answer')
                
                submit_q6.addEventListener('click', function() {
                    if (q6_response.value == '15') {
                        q6_response.style.background = 'green';
                        q6_status.innerHTML = "Correct";
                        counter++;
                    } else {
                     q6_response.style.background = 'red';
                        q6_status.innerHTML = "Incorrect. Try Again";
                    }
                })

                
                let q7_correct = document.querySelector('#q7_correct');
                let q7_incorrect = document.querySelectorAll('.q7_incorrect');
                let q7_status = document.querySelector("#q7_answer");
                
                q7_correct.addEventListener('click', function() {
                    q7_correct.style.backgroundColor = 'green';
                    q7_status.innerHTML = "Correct!";
                    counter++;
                });
                
                for (let i = 0; i < q7_incorrect.length; i++) {
                    q7_incorrect[i].addEventListener('click', function() {
                        q7_incorrect[i].style.backgroundColor = 'red';
                        q7_status.innerHTML = "Incorrect. The whole ball must cross the goal line.";
                    });
                }
                
                
                let q8_correct = document.querySelector('#q8_correct');
                let q8_incorrect = document.querySelectorAll('.q8_incorrect');
                let q8_status = document.querySelector("#q8_answer");
                
                q8_correct.addEventListener('click', function() {
                    q8_correct.style.backgroundColor = 'green';
                    q8_status.innerHTML = "Correct!";
                    counter++;
                });
                
                for (let i = 0; i < q8_incorrect.length; i++) {
                    q8_incorrect[i].addEventListener('click', function() {
                        q8_incorrect[i].style.backgroundColor = 'red';
                        q8_status.innerHTML = "Incorrect. Try Again";
                    });
                }
                
                
                let end = document.querySelector('#end');
                let result = document.querySelector('#result');
                
                end.addEventListener('click', function() {
                    if (counter > 7) {
                        result.innerHTML = "Your result is " + counter + "/12. Great Job!";
                    } else if (counter < 4) {
                        result.innerHTML = "Your result is " + counter + "/12. Better Luck Next Time!";
                    } else {
                        result.innerHTML = "Your result is " + counter + "/12. Nice try!";
                    }
                });
            });
            