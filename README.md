# Тестовое задание для Фьюче

  Покольку обьем бизнес логики и данных приложения подразумевался относительно крупным (хранить весь обьем в родительском компоненте и прокидывать длинной цепочкой пропсов было бы неправильным решением), возникла необходимость в сторонней технологии стейт менеджмента (выбрал Redux). Следом были подключены react-redux, thunk (для асинхронного запроса), redux-form (для того, чтобы не засорять стейт и экшены управлением формами, коих 3), reselect (для оптимизации фильтрации и сортировки), react-router-dom (для управления роутами, которых 2 - страница выбора обьема данных и сама таблица), classnames (маленькая библиотека, которая делает удобнее работу со случаями, когда на элемент нужно повесить несколько классов, а некоторые - по условию). 
  Для взаимодействия с api выбрал axios. Для одного GET запроса в принципе можно было бы использовать и обычный fetch, но если принять во внимание, что приложение вместе с логикой запросов может расти, то лучше сразу установить готовое проверенное решение, вместо того, чтобы потом все переписывать, либо создавать свой axios.
  Касательно тестирования, я пока не имел основательного опыта написания тестов. В этом приложении написал тесты для редьюсера (Jest). Так же в разработке справляться с нахождением ошибок помогали typescript, redux-devtools.
  
  для запуска: npm start
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
