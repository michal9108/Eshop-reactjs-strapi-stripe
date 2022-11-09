# Ecommerce website - Women clothes ReactJS + Strapi + Stripe + Firebase 

<a href="https://reactjs-eshop-clothes.web.app/" target="_blank"> <img src="https://github.com/michal9108/media/blob/af1cdaf0f376fa14b26a34a48cb78e89df744cb1/kenvo.gif" width="75%" height="75%" align="center"/>
</a>


## Link

[Ecommerce Website ](https://reactjs-eshop-clothes.web.app/)

## Requirements

Before using this project, you will need to have installed [Node.js](https://nodejs.org/en/), [git](https://git-scm.com/), [redux](https://redux.js.org/), [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/),
[Material UI](https://mui.com/) for styling, [Strapi](https://strapi.io/) for Back-End headless CMS, [Formik](https://formik.org/) for React forms and [Stripe](https://stripe.com/en-sk) for implementing payments.

## Development Setup

**Front-End**
npm
```
$ git clone https://github.com/michal9108/Eshop-reactjs-strapi-stripe.git
$ cd Eshop-reactjs-strapi-stripe/client
$ npm install 
```
or 

yarn
```
$ git clone https://github.com/michal9108/Eshop-reactjs-strapi-stripe.git
$ cd Eshop-reactjs-strapi-stripe/client
$ yarn install 
```


The application will be listening on port 3000. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Deploy Setup


Deploy app on Firebase

New project on firebase

Install firebase CLI: 
```
$npm install -g firebase-tools
```

Choose your google account or Sign-Up
```
$ firebase login
```

Initiate your project 
```
$ firebase init
```

- Choose Hosting> Configure files for Firebase Hosting and (optionally) set up Github Action deploys - press space bar
- Use existing project - choose your project
- What do you want to use as your public directory?`build`

- Configure as a single-page app (rewrite all urls to /index.html)(y/N)?`No`
 
- Set up automatic builds and deploys with GitHub? (y/N)`Yes`

- For which GitHub repository would you like to set up a GitHub workflow? (format:  user/repository)

- What script shoud run before every deploy? `npm run build`


- Set up automatic deployment to your site's live channel when a PR is merged?(y/N)`Yes`

- What is the name of the GitHub branch associated with your site's live channel?  - `main`

Build
```
$ npm run build
```
or 
```
$ yarn run build
```
Deploy to firebase
```
$ firebase deploy
```



