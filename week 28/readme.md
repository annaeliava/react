#28

1. Кратко опишите основные отличия `state` от `props`.

Ответ: `state` определяет состояние компонента изнутри и определяется внутри, а `props` - снаружи. `props` нельзя менять, а `state` - можно.
***
2. Какую ошибку я допустила в следующем коде и как ее исправить:
    
    ```jsx
    handleChange = () => {
        const chechedArr = this.state.arr; // [1,2,3] 
    		chechedArr.push(5); // [1,2,3,5] 
        this.setState({
          arr: chechedArr,
        });
      };
    ```


Ответ:

    ```jsx
    handleChange = () => {
        const chechedArr = this.state.arr; // [1,2,3] 
        this.setState({ 
          chechedArr.push(5); // [1,2,3,5] 
         });
      };
    ```
***
3. Можно ли повесить на один элемент несколько обработчиков событий?

Ответ: можно
***
4. Каким образом можно изменить `state`?

Ответ: через `setState`

классовый компонент:

```jsx
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    };
  };

  handleChange = () => {
    this.setState(
      {pressed: !this.state.pressed}
    );
  }

  render() {
    <button onClick={this.handleChange}>
      {this.state.pressed?'Pressed':'Press'}
    </button>
  }
```


функциональный компонент:

```jsx
  const [pressed, setPressed] = useState(false);
  const handleChange = () => {
    setPressed(!pressed);
  }
  return (
    <button onClick={handleChange}>
      {pressed?'Pressed':'Press'}
    </button>
  )
```
***
5. Попробуйте предсказать какие сообщения будут в консоли и объяснить результат:
    
    ```jsx
    handleChange = () => {
        console.log(this.state.checked) //#1 false 
        this.setState({
          checked: !this.state.checked, //true
        });
        console.log(this.state.checked) //#2 ?
      };  
    ```


Ответ: false, так как мы находимся внутри функции, начальное состояние - false
***
6. Какими способами можно задать функцию `handleChange` и какой из них является самым правильным?

Ответ: правильно использовать стрелочную функция(номер 2). обычной функции нужно прописать еще следующее: `this.handleClick = this.handleClick.bind(this);`, а данная строка вызывает рендеринг, что негативно сказится на производительности приложения

```jsx 
handleChange() {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };
```

```jsx
  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };
  ```
***
7. Чем отличаются классовые и функциональные компоненты? Какие из них предпочтительнее в 2021 году?

Ответ: главное различие между ними, что классовые компоненты построены на классах, им доступен `this`, код больше чем в функциональном, нужно прописывать `bind`, а функциональные - на хуках, код короче, вместо `this` используется `useState. Предпочтительнее писать функциоанльные компоненты
***
8. Есть ли `this` в функциональных компонентах? Как можно получить к нему доступ?

Ответ: нет, `this` не используется в функциональных компонентах. вместо него используется хук useState, где мы передаем исходное состояние
***
9. Можно ли использовать `props` и `state` одновременно?

Ответ: да
***
10. Где можно задать `state` без использования команды `this.setState`?

Ответ: в компоненте 

например:
```jsx 
export default class Checkbox extends React.Component {
	static defaultProps = {
	    checked: false,
	  };
	constructor(props) {
	    super(props);
	    this.state = {
	      checked: props.checked,
	    };
	  };
	
	  render() {
	    /*** ... ***/
    };
}
```
```jsx
<Checkbox />
<Checkbox checked />
```
***
11. Может ли состояние классового компонента не быть объектом? А функционального?

Ответ: в классовом компоненте - нет, в функциональном может благодаря `useState`, он может передавать также числа и строки
***
12. Способны ли функциональные компоненты самостоятельно хранить состояние?

Ответ: да, благодаря хукам могут
***
13. Как использовать хуки в классовых компонентах?

Ответ: классовому компоненту недоступны хуки
***
14. А как задать начальное состояние `props`, если они еще не были переданы?

Ответ: `static defaultProps = {
  title:'Sorry, try again',
};`