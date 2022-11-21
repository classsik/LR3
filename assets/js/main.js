// Азат Юлдашев

// 1
// Была ли нажата кнопка
let clicked = false;
// Была ли загружена страница
let loaded = false;

// Получаем кнопку
const ex1 = document.querySelector(".ex1");

// Добавляем событие на клик
ex1.addEventListener("click", () => {
  // Кнопка была нажата
  clicked = true;

  // Если страница загружена
  if (loaded) {
    // Делаем скролл вниз на 500px
    window.scrollBy({
      top: 500,
      left: 0,
      behavior: "smooth",
    });

    // Убираем клик
    clicked = false;
  }
});

// При загрузке страницы
window.onload = () => {
  // После 3х секунд
  setTimeout(() => {
    // Ставим переменную что страница загружена
    loaded = true;

    // Если был клик до загрузки
    if (clicked) {
      // Выполняем скролл
      window.scrollBy({
        top: 500,
        left: 0,
        behavior: "smooth",
      });

      // Убираем клик
      clicked = false;
    }
  }, 3000);
};

// 2
const ex2 = () => {
  alert(
    // Если высота Body выше высоты окна, то скролл есть
    document.body.offsetHeight > document.documentElement.clientHeight
      ? "Скролл есть"
      : "Скролла нет"
  );
};

// 3
const ex3 = () => {
  // Получаем форму
  const form = document.getElementById("form");

  // Получаем все инпуты
  let inputs = form.children;
  // Сумма
  let sum = 0;

  // Проходимся по каждому инпуту
  for (input of inputs) {
    // Добавляем к сумме
    sum += +input.value;
  }

  // Выводим сумму
  alert(`Сумма чисел: ${sum}`);
};

// 4
// Список стран с городами
const cities = {
  rus: ["Уфа", "Москва", "Казань"],
  usa: ["Нью-Йорк", "Лос-Анджелес", "Чикаго"],
  ger: ["Берлин", "Мюнхен", "Гамбург"],
};

const ex4 = (event) => {
  // Получаем выделенный option
  const selected = event.options[event.selectedIndex];

  // Получаем второй select
  const select = document.querySelector(".ex4_1");

  // Если ничего не выбрано
  if (selected.value == "null") {
    // Убираем второй select
    select.classList.add("closed");
    // Иначе
  } else {
    // Добавляем второй select
    select.classList.remove("closed");

    // Очищаем его
    select.innerHTML = "";

    // Получаем текущие города
    let cur_cities = cities[selected.value];

    // Создаем options
    for (city of cur_cities) {
      select.innerHTML += `<option>${city}</option>`;
    }
  }
};

// 5
// Получаем элемент
const ex5 = document.querySelector(".ex5");
// Добавляем li в конец
ex5.innerHTML += "<li>Пункт</li>";

// 6
// Получаем все ссылки
const links = document.querySelectorAll("a");

// Проходимся по ним
for (let i = 0; i < links.length; i++) {
  // Добавляем событие на наведение
  links[i].addEventListener("mouseover", function () {
    // Добавляем href в скобках
    links[i].innerHTML += `(${links[i].href})`;
  });

  // Добавляем событие на отведение
  links[i].addEventListener("mouseout", function () {
    // Удаляем скобки и то что внутри
    links[i].innerHTML = links[i].innerHTML.replace(/\(.+\)/, "");
  });
}

// 7
// Получаем все абзацы
const ex7 = document.querySelectorAll(".ex7");

// Проходимся по ним
for (let i = 0; i < ex7.length; i++) {
  // Добавляем событие по клику
  ex7[i].addEventListener("click", () => {
    // Ставим внутрь квадрат числа
    ex7[i].innerHTML = ex7[i].innerHTML ** 2;
  });
}

// 8
// Получаем кнопку
const ex8 = document.querySelector(".ex8");

// Добавляем событие на клик
ex8.addEventListener("click", () => {
  // Прибавляем 1
  ex8.innerHTML = +ex8.innerHTML + 1;
});

// 9
// Получаем список
const ex9 = document.querySelector(".ex9");
// Получаем кнопку
const ex9_1 = document.querySelector(".ex9_1");

// Добавляем событие на клик
ex9_1.addEventListener("click", () => {
  // Добавляем новый элемент в список
  ex9.innerHTML += "<li>Пункт</li>";
});

// Получаем событие на клик внутри списка
ex9.addEventListener("click", function (event) {
  // Добавляем ! в конец элемента по которому нажали
  event.target.innerHTML = `${event.target.innerHTML} !`;
});

// 10
// Получаем таблицу
const ex10 = document.querySelector(".ex10");
// Получаем форму
const ex10_1 = document.querySelector(".ex10_1");

// Добавляем событие на отправку формы
ex10_1.addEventListener("submit", (e) => {
  // Убираем действие по умолчанию
  e.preventDefault();

  // Создаем строку
  const tr = document.createElement("tr");

  // Получаем значения формы
  const firstname = document.querySelector(".ex10_1_1").value;
  const lastname = document.querySelector(".ex10_1_2").value;

  // Добавляем значения в строку
  tr.innerHTML = `<td><div>${firstname}</div></td><td><div>${lastname}</div></td>`;

  // Добавляем строку в таблицу
  ex10.tBodies[0].appendChild(tr);
});

// Добавляем событие по клику на элемент таблицы
ex10.addEventListener("click", (event) => {
  // Получаем новое значение через prompt
  const newValue = prompt("");

  // Меняем его в таблице
  event.target.innerHTML = newValue;
});
