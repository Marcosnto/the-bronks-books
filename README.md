# The Bronks Books

The project consists of a store that displays diverse books, allowing the user to add/remove them to the shopping cart, view book details, and add new books to the database.

## Learning Process and choices

The project was developed using React (using create-react-app as a framework) and the libraries described below. I chose to use technologies that I had not directly used in the professional environments I have worked in, such as Tailwind, Zustand, and ReactQuery. This allowed me to explore new tools and expand my knowledge. To guide me during this process, I used the documentation for each of them and community-produced articles/videos (Stackoverflow, medium, youtuber as Jack Herrington).

Regarding code quality, I chose to use Eslint, Prettier, and TypeScript to help me in writing code that is easy to understand and maintain.

Unfortunately, I was unable to fulfill all the requested requirements due to time constraints, such as integrating the Stripe library and creating an editing and deletion environment for store items. However, these are functionalities that I intend to implement to make the system complete.

Finally, there are some areas for improvement in the code, such as componentizing the form inputs, improving the utilization of react-query features, expanding the tests, and enhancing user action notifications (UX).

## Languages

<ul>
<li><a href="https://developer.mozilla.org/pt-BR/docs/Glossary/W3C">HTML5</a></li>
<li><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">CSS3</a></li>
<li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JavaScript<a></li>
<li><a href="https://www.typescriptlang.org/">Typescript</a></li>
</ul>

## Frameworks & Libs

<ul>
<li><a href="https://create-react-app.dev/">React by Create React App</a></li>
<li><a href="https://tanstack.com/query/v4/docs/react/overview">React Query</a></li>
<li><a href="https://reactrouter.com/en/main">React Router</a></li>
<li><a href="https://tailwindcss.com/">Tailwind</a></li>
<li><a href="https://zustand-demo.pmnd.rs/">Zustand</a></li>
<li><a href="https://github.com/typicode/json-server">json-server</a></li>
<li><a href="https://jestjs.io/">Jest</a></li>
<li><a href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library</a></li>
<li><a href="https://eslint.org/">Eslint</a></li>
<li><a href="https://prettier.io/">Prettier</a></li>
</ul>

## Execution

First, it is necessary to execute the database command so that the db.json files are loaded on port 3333.
```bash
yarn server
```
After that, execute the command that will open the web system: 
```bash
yarn start
```

To tests, execute: 
```bash
yarn test
```


By default, the system will open on port 3000. If you are running another project, it will automatically switch to a different port.

If it's on the default port, simply open the link [http://localhost:3000/](http://localhost:3000/) in your browser to view the project.

