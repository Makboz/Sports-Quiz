document.addEventListener('DOMContentLoaded', function() {
    
                let counter = 0;
                
                
                let q1_response = document.querySelector('#q1_response');
                let submit_q1 = document.querySelector('#q1');
                let q1_status = document.querySelector('#q1_answer')
                
                submit_q1.addEventListener('click', function() {
                    if (q1_response.value == '3') {
                        q1_response.style.background = 'green';
                        q1_status.innerHTML = "Correct";
                        counter++;
                    } else {
                     q1_response.style.background = 'red';
                        q1_status.innerHTML = "Incorrect. Try Again";
                    }
                })
                
                let q2_response = document.querySelector('#q2_response');
                let submit_q2 = document.querySelector('#q2');
                let q2_status = document.querySelector('#q2_answer')
                
                submit_q2.addEventListener('click', function() {
                    if (q2_response.value == '2') {
                        q2_response.style.background = 'green';
                        q2_status.innerHTML = "Correct";
                        counter++;
                    } else {
                        q2_response.style.background = 'red';
                        q2_status.innerHTML = "Incorrect. Try Again";
                    }
                })
                
                
                let q3_response = document.querySelector('#q3_response');
                let submit_q3 = document.querySelector('#q3');
                let q3_status = document.querySelector('#q3_answer')
                
                submit_q3.addEventListener('click', function() {
                    if (q3_response.value == '1') {
                        q3_response.style.background = 'green';
                        q3_status.innerHTML = "Correct";
                        counter++;
                    } else {
                     q3_response.style.background = 'red';
                        q3_status.innerHTML = "Incorrect. Try Again";
                    }
                })
                
                
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
                
                
                
                let q6_correct = document.querySelector('#q6_correct');
                let q6_incorrect = document.querySelectorAll('.q6_incorrect');
                let q6_status = document.querySelector("#q6_answer");
                
                q6_correct.addEventListener('click', function() {
                    q6_correct.style.backgroundColor = 'green';
                    q6_status.innerHTML = "Correct!";
                    counter++;
                });
                
                for (let i = 0; i < q6_incorrect.length; i++) {
                    q6_incorrect[i].addEventListener('click', function() {
                        q6_incorrect[i].style.backgroundColor = 'red';
                        q6_status.innerHTML = "Incorrect. Try Again";
                    });
                }
                
                
                
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
                
                
                
                
                let q9_correct = document.querySelectorAll('.q9_correct');
                let q9_incorrect = document.querySelectorAll('.q9_incorrect');
                let q9_status = document.querySelector("#q9_answer");
                
                let tracker = 0;
                
                for (let i = 0; i < q9_correct.length; i++) {
                    q9_correct[i].addEventListener('click', function() {
                        q9_correct[i].style.backgroundColor = 'green';
                        q9_status.innerHTML = "Correct!";
                        
                        tracker++;
                        
                        if (tracker == 2) {
                            counter++;
                        }
                    });
                }
                
                for (let i = 0; i < q9_incorrect.length; i++) {
                    q9_incorrect[i].addEventListener('click', function() {
                        q9_incorrect[i].style.backgroundColor = 'red';
                        q9_status.innerHTML = "Incorrect. Try Again";
                    });
                }
                
                
                let q10_response = document.querySelector('#q10_response');
                let submit_q10 = document.querySelector('#q10');
                let q10_status = document.querySelector('#q10_answer')
                
                submit_q10.addEventListener('click', function() {
                    if (q10_response.value == '24') {
                        q10_response.style.background = 'green';
                        q10_status.innerHTML = "Correct";
                        counter++;
                    } else {
                     q10_response.style.background = 'red';
                        q10_status.innerHTML = "Incorrect. Try Again";
                    }
                })
                
                
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
            