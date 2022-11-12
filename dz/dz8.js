/*
Задание 1

Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.

Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.



Выведите в консоль строку:

С помощью браузера ... я открыл страничку ... 

(необходимые значения добавьте с помощью BOM)
*/

console.log(`с помощью браузера ${navigator.appName} я открыла страничку ${location.href}`);

/*
Задание 2

В файле html есть разметка:

<ul id="list">
<li>Джон</li>
<li>Пит</li>
<li>Джессика</li>
<li>Сара</li>
</ul>

Вывести в консоль каждое из имен (содержимое каждого li).
*/
for (li of document.querySelectorAll('li')) {
    console.log(li.innerText);
}

/*
Задание 3

Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
*/

for (let i = 0; i < document.querySelector('#list').children.length; i++) {
    document.querySelector('#list').children[i].innerText = i ;
}


// ДЛЯ СЕБЯ
// for (let i = 0; i < document.body.children[0].children.length; i++) {
//     document.body.children[0].children[i].innerText = i;
// }


/*
Задание 4

Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
*/

let p = document.createElement('p');
document.body.appendChild(p).innerText = 'information';
p.style.fontSize = '36px';
p.style.fontWeight = 'bold';

/*
Задание 5

Написать в html тег заголовка с текстом "Сегодня:" 

После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.
*/


document.getElementById('date').innerText = new Date().toLocaleDateString();

// ДЛЯ СЕБЯ
// let newDate = new Date();
// let htmlDate = document.getElementById('date'); 
// htmlDate.innerText = new Date().toLocaleDateString();


/*
Задание 6

Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
*/

let toCreateNewTag = (tagName, color, inform) => {
    let creating = document.createElement(tagName);
    creating.innerText = inform;
    creating.style.color = color;
    document.body.appendChild(creating);
}
toCreateNewTag('div', 'blue', 'wow');
toCreateNewTag('p', 'red', 'info');


/*
Задание 7

Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
*/

let getSelect = document.getElementById('select');
for (let year = 1960; year <= 2020; year++) {
    let option = document.createElement('option');
    option.innerText = year;
    getSelect.appendChild(option);
}


/*
Задание 8

Вставить в страницу (в html документ) ul.
Предусмотреть в коде следующий массив:

[{
name: "Женя",
order: true
},
{
name: "Кристина",
order: true
},
{
name: "Павел",
order: false
},
{
name: "Виолетта",
order: false
},
{
name: "Костя",
order: true
}];

Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
- Клиент Женя оплатил заказ
- Клиент Павел отменил заказ
... остальные li с контентом

Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.
*/

let analysis = [{
    name: "Женя",
    order: true
    },
    {
    name: "Кристина",
    order: true
    },
    {
    name: "Павел",
    order: false
    },
    {
    name: "Виолетта",
    order: false
    },
    {
    name: "Костя",
    order: true
    }];

    let toGetUl = document.getElementById('clients');
    for (let i = 0; i < analysis.length; i++) {
        let li = document.createElement('li');
       li.innerText = analysis[i].order ? 
       `Клиент ${analysis[i].name} оплатил заказ` : 
       `Клиент ${analysis[i].name} отменил заказ`;
       toGetUl.appendChild(li);
    }

    /*
    Задание 9

Есть массив ссылок:

let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

Вам нужно:

1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)

2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег

c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")

ПОДСКАЗКА Для создания атрибута используется js метод setAttribute:

element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его значение.

Вкладывать ссылки в див нужно с помощью метода appendChild или append.

3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY
    */

let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

let div = document.createElement('div');
div.style.background = 'brown';
div.style.color = 'white';
div.style.width = '300px';
div.style.height = '300px';
div.style.padding = '20px';
document.body.appendChild(div);

for (let key of linksArr) {
    let createLink = document.createElement('a');
    createLink.innerText = key + '\n';
    createLink.setAttribute('target', '_blank');
    createLink.setAttribute('href', key);
    div.appendChild(createLink);
}

/*
Задание 10

Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.

ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove()
*/

let remove = document.querySelectorAll('#forRemove').forEach(element => element.remove());


/*
Задание 11*

Создать массив объектов с полями name, age. Например:

const users = [
{name: 'Mark', age: 12},
{name: 'Olga', age: 30},
{name:'Tom', age: 25}
]

Создать в html таблицу (table).

C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.

ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.
*/

const users = [
    {name: 'Mark', age: 12},
    {name: 'Olga', age: 30},
    {name:'Tom', age: 25}
    ]

let table = document.createElement('table');
table.style.width = '200px';
table.style.border = "1px solid #000";
document.body.appendChild(table);
let string1 = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');
string1.appendChild(td1).innerText = 'name';
td1.style.border = "1px solid #000";
string1.appendChild(td2).innerText = 'age';
td2.style.border = "1px solid #000";
table.appendChild(string1);

function usersInform (array) {
    array.forEach(obj => {
        let string = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerText = obj.name;
        td1.style.color = 'red';
        let td2 = document.createElement('td');
        td2.innerText = obj.age;
        td2.style.color = 'blue';
        string.appendChild(td1);
        string.appendChild(td2);
        table.appendChild(string);
    })
}
usersInform(users);

