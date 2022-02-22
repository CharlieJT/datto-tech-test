## To Run Locally

1.  run `git clone https://github.com/CharlieJT/datto-tech-test.git` in the cli
2.  run `yarn` or `npm install` to install a '**node modules**'.
3.  Create a '**.env**' file at the root of this project.
4.  Create an account at [IMDB-api](https://imdb-api.com/api) & generate an api key (keep the api key on-hand).
5.  Inside of the local '**.env**' file. You need to add the following code...

```
REACT_APP_BASE_URL=https://imdb-api.com/en/API
REACT_APP_API_KEY=**API KEY HERE**
```

6. Run `npm start` or `yarn start` & open [http://localhost:3000](http://localhost:3000) to view it in the browser.
