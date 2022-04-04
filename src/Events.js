/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const btn = document.createElement('button');
    btn.textContent = 'Удали меня';
    document.body.append(btn);
    btn.addEventListener('click', () => btn.remove());
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const list = document.createElement('ul');
    document.body.append(list);

    for (let i = 0; i < arr.length; i++) {
        let n = document.createElement('li');
        n.textContent = arr[i];
        list.append(n);
        n.addEventListener('mouseover', () => n.setAttribute('title', arr[i]));
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let element = document.createElement('a');
    element.textContent = 'tensor';
    element.setAttribute('href', 'https://tensor.ru/');
    document.body.append(element);

    element.addEventListener('click', (event) => {
        if (!event.target.textContent.includes('https://tensor.ru/')) {
            event.preventDefault();
            event.target.textContent += ' https://tensor.ru/';
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.insertAdjacentHTML(
        'afterbegin',
        '<ul><li>Пункт</li></ul><button>Добавить пункт</button>',
    );

    const ul = document.querySelector('ul');
    document.querySelector('button').onclick = () => {
        const li = document.createElement('li');
        li.textContent = 'Пункт';
        ul.insertAdjacentElement('beforeend', li);
    };

    ul.addEventListener('click', function (event) {
        if (event.target && event.target.nodeName === 'LI') {
            event.target.textContent += '!';
        }
    });
}
