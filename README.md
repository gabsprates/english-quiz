# English Quiz :us: :game_die:

* `npm start`: run develop server in `localhost:8080`
* `npm build`: build JS code to `dist/js`

The initial idea was create a interactive game show, with questions and answers, using [React](https://facebook.github.io/react/). This starts with a home work, but now, I'm work to improve it.

## How it works

The data provided by the API follow the basic format:

```
[
  {
    "_id": "question ID, the most important attribute",
    "question": "Question description",
    "options": [
      "Option 1",
      "Option 2"
      // what options you need
    ],
    "answer": 3, // the integer represent the key of right answer of `options`
    "answered": false // if this question already was answered
  },
  { ... }
]
```

In the `config/config.js` file, you need to set the API URL:

```
export default {
  "webservice": {
    // e.g:
    "addr": "http://localhost:3000",
  }
}
```

This game works together *[english-quiz-server](https://github.com/gabsprates/english-quiz-server)*, but you can implement any other API to provide the data. For this, you must to implement the following endpoints:

* `GET`: `/questions/props/[ props ]`

  To get all questions with specifics props. E.g: `props/answered,answer`


* `GET`: `/questions/[ questionId ]`

  The ID of the specific question you need. In this case, all props are returned.


* `PUT`: `/questions/[ questionId ]`

  To update the `question.answered` prop.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT © [Gabriel Prates](http://gabrielprates.com)
