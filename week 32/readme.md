#32

1. В чем разница между контролируемыми и неконтролируемыми компонентами?

Ответ: контролируемые компоненты - гибкие, имеют функции, которые изменяют изначальное значение 
***
2. Есть ли смысл использовать метод `shouldComponentUpdate()` в `PureComponent`?

Ответ: нет, так как `PureComponent` сам автоматически ловит изменения state и props и рендерит компонент(только если есть изменения) 
***
3. Будет ли перерисовываться данный компонент?

```jsx
class PureComponent extends React.PureComponent {
    state = {
        item: {
            count: 0
        },
    }

    handleClick = () => {
        const item = this.state.item;
        item.count = this.state.item.count ++ ;
        this.setState({item});
    }
    render() {
        return <h2>{this.state.item.count}</h2>
    }
}
```

Ответ: нет, метод ни к чему не привязан 
***
4. Что будет, если чекбоксу не передать свойство `checked`?

Ответ: checkbox будет неконтролируемым, так как нет state, который прописан в атрибуте `checked`
***
5. в чем главное преимущество использование `PureComponent`?

Ответ: `PureComponent` рендерит компоненты, только если произошло изменение в state и props, при этом сам автоматически ловит их. Также он перерисовывает не только сам компонент, но и его детей. Даннные преимущества помогают не навредить производительность приложения.
***
6. Что будет, если комоненту `input` передать метод `onChange`, но передать `value`? А что будет, если компоненту `input` передать `value`, но не передать метод `onChange`?

Ответ: в первом случае - value `input` будет меняться в зависимости от прописанного метода, во втором - компонент будет неконтролируемым, у `input` заданное значение
***
7. Как сделать из обычного `select` список с несколькими выбранными значениями (мультиселект)?

Ответ: добавить атрибут multiple={true} в тег `select`
***
8. Напишите пример валидации текстового поля на React - чтобы оно было не пустым

Ответ: 
```jsx
    import React, {useState} from 'react';

    export default function Input(props) {
        const {data} = props;

        const [text, setText] = useState(initialValue:'');

        handleChange = (e) => {
            setText(e.target.value);
        };

        handleSubmit = (e) => {
            if(text === '') {
                alert('Something went wrong :(')
            } else {
                alert('Welcome!')
            }
        }

        return(
            <form>
                <input type='text' onChange={handleChange} value={text} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        );
    }
```
***
9. Приведите пример пройстейшей формы логина на сторонних компонентах (Formic, Material или Bootstrap)

Ответ: 

```jsx
import React from "react";
import { 
    FormControl,
    Input,
    InputLabel 
} from '@mui/material';

export default class App extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${this.state.email}`);
  };

  render() {
    return (
      <div className="App">
        <FormControl className="form" onSubmit={this.handleSubmit}>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input onChange={this.handleChange} id={email} value={this.state.email} type='text' />
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input onChange={this.handleChange} id={password} value={this.state.password} type='password' />

            <Input type='submit' value='Login' />
        </FormControl>
      </div>
    );
  }
}
```