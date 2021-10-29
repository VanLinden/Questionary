import React from 'react';
import './Viewing.css';
import Navigation from './Navigation';

function Viewing() {
    let ddd = []
    // eslint-disable-next-line no-unused-vars
    for (const [key, value] of Object.entries(window.localStorage)) {
        ddd.push(value)
        ddd.sort();
    }
    const childAge = ddd.slice(0, ddd.length / 2)
    const childName = ddd.slice(ddd.length / 2)

    return (
        <div className="mat-card-questinary">
            <Navigation />
            <div className="title">Viewing</div>
            <div>
                <span className="name">Surname</span>
                <span className="inputName">{window.sessionStorage.Surname}</span>
            </div>
            <div>
                <span className="name">Name</span>
                <span className="inputName">{window.sessionStorage.Name}</span>
            </div>
            <div>
                <span className="name">Patronymic</span>
                <span className="inputName">{window.sessionStorage.Patronymic}</span>
            </div>
            <div>
                <span className="name">Age</span>
                <span className="inputName">{window.sessionStorage.Age}</span>
            </div>

            <div className="title">Children</div>
            {childName[0] &&
                <div>
                    <span className="name">Name</span>
                    <span className="inputName"> {childName[0]} </span>
                    <span className="name">Age</span>
                    <span className="inputName"> {childAge[0]} </span>
                </div>
            }
            {childName[1] &&
                <div>
                    <span className="name">Name</span>
                    <span className="inputName"> {childName[1]} </span>
                    <span className="name">Age</span>
                    <span className="inputName"> {childAge[1]} </span>
                </div>
            }
            {childName[2] &&
                <div>
                    <span className="name">Name</span>
                    <span className="inputName"> {childName[2]} </span>
                    <span className="name">Age</span>
                    <span className="inputName"> {childAge[2]} </span>
                </div>
            }
            {childName[3] &&
                <div>
                    <span className="name">Name</span>
                    <span className="inputName"> {childName[3]} </span>
                    <span className="name">Age</span>
                    <span className="inputName"> {childAge[3]} </span>
                </div>
            }
            {childName[4] &&
                <div>
                    <span className="name">Name</span>
                    <span className="inputName"> {childName[4]} </span>
                    <span className="name">Age</span>
                    <span className="inputName"> {childAge[4]} </span>
                </div>}
        </div>
    )
}

export default Viewing