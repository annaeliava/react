#25

1. Обязательно ли скачивать и устанавливать какие-то библиотеки для начала работы с ReactJS?

Ответ: да, должен быть установлен node.js
***
2. Перечислите плюсы и минусы SPA приложении?

Ответ: плюс SPA приложении: нет многочисленных html файлов, скрость, доступ к фреймворкам; минус SPA приложении: необходимость интернет-соединения, нельзя вставить поисковик с запросом по всему сайту, так как каждая страничка отрисовывается.
***
3. Как создать React-приложение?

Ответ: npm install -g create-react-app (если его нет) -> create-react-app <name> -> cd <name> -> npm start 
***
4. Является ли React фреймворком? А какие есть еще веб-фронтенд фреймворки?

Ответ: нет, это библиотека JS. Vue.js, Angular
***
5. Какой командой можно добавить библиотеку или компонент в свой файл?

Ответ: npm install <component> --save -> app.js: import { smth } from 'component' -> app.js: </>
***
6. Найдите три внешних React-компонента, которые вам могут пригодиться в будущем (например, react-color, react-google-maps и пр.)

Ответ: react-burger-menu, react-chartjs, reacttransitiongroup, react-datepicker

что из себя представляют react-библиотеки? Например, MUI core, Ant design, storybook. Это просто собрание компонентов? 
***
7. Какой основной файл SPA-проекта, где мы делаем изменения?

Ответ: app.js
***
8. Зачем нужна папка build и какой командой мы генирируем ее содержимое?

Ответ: содержит все готовые файлы при сборке продакшен-окружения