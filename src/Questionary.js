import React, { useState } from 'react';
import $ from 'jquery';
import './Questionary.css';
import Navigation from './Navigation';

function Questionary() {
    const [errorSurname, setErrorSurname] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorPatronymic, setErrorPatronymic] = useState('');
    const [errorAge, setErrorAge] = useState('');

    const blurSurnameValue = e => {
        if (e.currentTarget.value.length < 3) {
            setErrorSurname("Surname must be at least 3 symbols");
        } else {
            setErrorSurname('');
        }
    }
    const blurNameValue = e => {
        if (e.currentTarget.value.length < 3) {
            setErrorName("Name must be at least 3 symbols");
        } else {
            setErrorName('');
        }
    }
    const blurPatronymicValue = e => {
        if (e.currentTarget.value.length < 3) {
            setErrorPatronymic("Patronymic must be at least 3 symbols");
        } else {
            setErrorPatronymic('');
        }
    }
    const blurAgeValue = e => {
        if (e.currentTarget.value < 10) {
            setErrorAge("Age must be greater then 10");
        } else {
            setErrorAge('');
        }
    }
    var childCount = 0;
    var count = 0;
    var childindexes = [];
    return (
        <div className="mat-card-questinary">
            <Navigation />
            <div className="title">Questionary</div>

            <div style={{ display: 'inline-block', width: '80px', textAlign: 'right' }}>Surname</div>
            <input id='surname' type="text" style={{ marginLeft: '10px' }} className="inputSurname" onBlur={blurSurnameValue} />
            <div className="error" >{errorSurname}</div>

            <div className="subtitle1" style={{ display: 'inline-block', width: '80px', textAlign: 'right' }}>Name</div>
            <input id='name' type="text" style={{ marginLeft: '10px' }} className="inputSurname" onBlur={blurNameValue} />
            <div className="error" >{errorName}</div>

            <div className="subtitle1" style={{ display: 'inline-block', width: '80px', textAlign: 'right' }}>Patronymic</div>
            <input id='patronymic' type="text" style={{ marginLeft: '10px' }} className="inputSurname" onBlur={blurPatronymicValue} />
            <div className="error" >{errorPatronymic}</div>

            <div className="subtitle1" style={{ display: 'inline-block', width: '80px', textAlign: 'right' }}>Age</div>
            <input id='age' type="text" style={{ marginLeft: '10px' }} className="inputSurname" onBlur={blurAgeValue} />
            <div className="error" >{errorAge}</div>

            <div className="title">Children</div>

            <button className="add-button"
                onClick={() => {
                    childCount = document.getElementById("children").childElementCount;
                    if (childCount < 5) {
                        // eslint-disable-next-line no-useless-concat
                        $('#children').append('<span></br><div class="name">Name</div> <input id="name' + count + '" class="childName" type="text"/>' +
                            '<div style="width: 30px; display: inline-block; padding-left: 20px;">Age</div> <input id="age' + count + '" style="width: 20px;" type="text"/>' +
                            '<button type="button" style="margin-left: 20px;" onClick="return this.parentNode.remove();" >-</button></span>');
                        childindexes.push(count);
                        count++;
                    };
                }} >+</button>
            <div id='children'></div>

            <button className="ok-button"
                onClick={() => {
                    if (errorSurname === "" && errorName === "" && errorPatronymic === "" && errorAge === "") {
                        window.sessionStorage.setItem('Surname', $('#surname').val());
                        window.sessionStorage.setItem('Name', $('#name').val());
                        window.sessionStorage.setItem('Patronymic', $('#patronymic').val());
                        window.sessionStorage.setItem('Age', $('#age').val());
                    }
                    var k = 1;
                    for (let i = 0; i < count; i++) {
                        if ($('#name'+i).val() !== undefined) {
                            window.localStorage.setItem('name'+ k, $('#name'+i).val());
                            window.localStorage.setItem('age'+ k, $('#age'+i).val());
                        k++;
                        }
                    }
                }} >Save</button>
        </div>
    )
}
export default Questionary
