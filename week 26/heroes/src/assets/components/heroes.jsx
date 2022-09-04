import React from 'react';

function Heroes(props) {
    return (
        <div class='hero'>
            <h2 class="heroProfile" id="heroName">{props.name}</h2>
            <div class="heroProfile" id="universe">Вселенная: {props.universe} </div>
            <div class="heroProfile" id="alterEgo">Альтер Эго: {props.alterEgo} </div>
            <div class="heroProfile" id="activity">Род деятельности: {props.activity} </div>
            <div class="heroProfile" id="friends">Друзья: {props.friends} </div>
            <div class="heroProfile" id="siperPower">Суперсилы: {props.superPowers}</div>
            <img class="heroProfile" alt="hero" src='{props.pic}' />
            <div class="heroProfile" id="description">Подробнее: {props.description}</div><br />
            <div class="heroProfile">Оцените героя</div>
            <select class="heroProfile" id="rating {props.name}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <button id="sendBtn" onclick='send()'>Отправить</button>
        </div>
    );
}

export default Heroes;