document.addEventListener('DOMContentLoaded', function() {
    
                let counter = 0;
                
                
                let q1_response = document.querySelector('#q1_response');
                let submit_q1 = document.querySelector('#q1');
                let q1_status = document.querySelector('#q1_answer');
                
                submit_q1.addEventListener('click', function() {
                    if (q1_response.value == '4') {
                        q1_response.style.background = 'green';
                        q1_status.innerHTML = "Correct";
                        counter++;
                    } else {
                     q1_response.style.background = 'red';
                        q1_status.innerHTML = "Incorrect. Try Again";
                    }
                });
                
                let q2_response = document.querySelector('#q2_response');
                let submit_q2 = document.querySelector('#q2');
                let q2_status = document.querySelector('#q2_answer');
                
                submit_q2.addEventListener('click', function() {
                    if (q2_response.value == '6') {
                        q2_response.style.background = 'green';
                        q2_status.innerHTML = "Correct";
                        counter++;
                    } else {
                        q2_response.style.background = 'red';
                        q2_status.innerHTML = "Incorrect. Try Again";
                    }
                });
                
                
                
                let q3_correct = document.querySelectorAll('.q3_correct');
                let q3_incorrect = document.querySelectorAll('.q3_incorrect');
                let q3_status = document.querySelector("#q3_answer");
                
                let tracker = 0;
                
                for (let i = 0; i < q3_correct.length; i++) {
                    q3_correct[i].addEventListener('click', function() {
                        q3_correct[i].style.backgroundColor = 'green';
                        q3_status.innerHTML = "Correct!";
                        
                        tracker++;
                        
                        if (tracker == 5) {
                            counter++;
                        }
                    });
                }
                
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
                
                
                
                let q6_correct = document.querySelectorAll('.q6_correct');
                let q6_incorrect = document.querySelectorAll('.q6_incorrect');
                let q6_status = document.querySelector("#q6_answer");
                
                let tracker_q6 = 0;
                
                for (let i = 0; i < q6_correct.length; i++) {
                    q6_correct[i].addEventListener('click', function() {
                        q6_correct[i].style.backgroundColor = 'green';
                        q6_status.innerHTML = "Correct!";
                        
                        tracker_q6++;
                        
                        if (tracker_q6 == 6) {
                            counter++;
                        }
                    });
                }
                
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
                
                
                
                let q9_correct = document.querySelector('#q9_correct');
                let q9_incorrect = document.querySelectorAll('.q9_incorrect');
                let q9_status = document.querySelector("#q9_answer");
                
                q9_correct.addEventListener('click', function() {
                    q9_correct.style.backgroundColor = 'green';
                    q9_status.innerHTML = "Correct!";
                    counter++;
                });
                
                for (let i = 0; i < q9_incorrect.length; i++) {
                    q9_incorrect[i].addEventListener('click', function() {
                        q9_incorrect[i].style.backgroundColor = 'red';
                        q9_status.innerHTML = "Incorrect. Try Again";
                    });
                }
                
                
                let q10_correct = document.querySelector('#q10_correct');
                let q10_incorrect = document.querySelectorAll('.q10_incorrect');
                let q10_status = document.querySelector("#q10_answer");
                
                q10_correct.addEventListener('click', function() {
                    q10_correct.style.backgroundColor = 'green';
                    q10_status.innerHTML = "Correct!";
                    counter++;
                });
                
                for (let i = 0; i < q10_incorrect.length; i++) {
                    q10_incorrect[i].addEventListener('click', function() {
                        q10_incorrect[i].style.backgroundColor = 'red';
                        q10_status.innerHTML = "Incorrect. Try Again";
                    });
                }
                
                
                
                let q11_correct = document.querySelector('#q11_correct');
                let q11_incorrect = document.querySelectorAll('.q11_incorrect');
                let q11_status = document.querySelector("#q11_answer");
                
                q11_correct.addEventListener('click', function() {
                    q11_correct.style.backgroundColor = 'green';
                    q11_status.innerHTML = "Correct!";
                    counter++;
                });
                
                for (let i = 0; i < q11_incorrect.length; i++) {
                    q11_incorrect[i].addEventListener('click', function() {
                        q11_incorrect[i].style.backgroundColor = 'red';
                        q11_status.innerHTML = "Incorrect. Try Again";
                    });
                }
                
                
                
                let q12_response = document.querySelector('#q12_response');
                let submit_q12 = document.querySelector('#q12');
                let q12_status = document.querySelector('#q12_answer');
                
                submit_q12.addEventListener('click', function() {
                    if (q12_response.value == '22') {
                        q12_response.style.background = 'green';
                        q12_status.innerHTML = "Correct";
                        counter++;
                    } else {
                     q12_response.style.background = 'red';
                        q12_status.innerHTML = "Incorrect. Try Again";
                    }
                });
                
                
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
            