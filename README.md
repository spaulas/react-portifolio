<h1 align="center">React Portfolio</h1>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/spaulas/react-portifolio?logo=typescript&style=for-the-badge">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/spaulas/react-portifolio?style=for-the-badge">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/spaulas/react-portifolio/MasterDeployCI?style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/spaulas/react-portifolio?style=for-the-badge">
  <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/spaulas/react-portifolio?style=for-the-badge">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/spaulas/react-portifolio?style=for-the-badge">
</p>
<img align="left" alt="react-portfolio" width="100%" src="https://i.ibb.co/KmwzgBh/Banner.png" />
&nbsp;

<h3 align="center"><a href="https://spaulas.github.io/react-portifolio/" target="_blank">Website</a>
<h3 align="left">Description</h3>

<p>Portfolio implemented by scratch on react.</p>
<p>This project's goal is to group every project I make in my github. Displaying all the necessary info for each project. It is also possible to know a bit more about me and to contact me. It has support for english, portuguese, spanish and german.</p>

<h3 align="left">Set up</h3>

```
npm install
npm start
```

<h3 align="left">Tech Stack</h3>
<img align="left" alt="HTML5" height="30px" src="https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png" />
<img align="left" alt="CSS3" height="30px" src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png" />
<img align="left" alt="Javascript" height="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGnwhltDp6v141Wc08D17U-3zGku-gjJEgNg&usqp=CAU" />
<img align="left" alt="Typescript" height="30px" src="https://img2.pngio.com/microsoft-delivers-typescript-30-angular-support-coming-soon-typescript-png-816_816.png" />
<img align="left" alt="React" height="30px" src="https://scand.com/wp-content/uploads/2019/10/React.js_logo-512.png" />
<img align="left" alt="Redux" height="32px" src="https://cdn.worldvectorlogo.com/logos/redux.svg" />
<img align="left" alt="Antd" height="30px" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
<img align="left" alt="Less" height="23px" src="https://prepros.io/img/home/less.png" />
<img align="left" alt="EmailJS" height="30px" src="https://i.ibb.co/KspLNkt/logo.png" /> 
<img align="left" alt="Visual Studio Code" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png" />
<img align="left" alt="Git" height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png" />
<br/>
<h3 align="left">EmailJS</h3>
<p>Since this is a frontend project, there was no need to complicate therefore I look for a tool that could send emails for me.</p>
<p>The base flow of the process is the following:</p>
<ul>
  <li>connect your email service, in my case, I used Outlook;</li>
  <li>create email template, since this email is addressed to me, I kept a simple template, only displaying the name, email and message;</li>
  <li>send email with javascript, which is quite simple and done in a small amount of code, something close to this:

```
var params = {
  name: 'Paula',
  email: 'paula@gmail.com',
  message: 'This is a test.'
};
emailjs.send( 'outlook', 'feedback', params );
```

</ul>

<img align="left" alt="contactModal" width="100%" src="https://i.ibb.co/9HxzGQn/send-Message-Modal.png" />
</br>
<h3 align="left">Projects Display</h3>
<p>All the projects are bellow the initial view, each with a dedicated container of information.</p>
<p>At first, it is only displayed the main image with the title of the project.</p>

<img align="left" alt="initialDisplay" width="100%" src="https://i.ibb.co/KVW7YGb/initial-Banner.png" />
</br>
<p>After clicking on "Show More", it is possible to see more information:
<ul>
  <li>a small description of the project;</li>
  <li>the teck stack;</li>
  <li>the link to the deploy website;</li>
  <li>the link to the github repository;</li>
  <li>an image of the main feature of the project;</li>
</ul>

<img align="left" alt="infoDisplay" width="100%" src="https://i.ibb.co/yY5Wq9Y/projectinside.png" />
<br/>
<p>To add more projects, it is rather simple. Just add another object to the array of projects as follows:</p>

```

{
      rendered: false,
      title: "React Solitaire",
      description: (
        <FormattedMessage
          id="project.reactSolitaire.description"
          defaultMessage="Project Description"
        />
      ),
      techs: [
        { source: "html.png", title: "HTML" },
        { source: "css.png", title: "CSS" },
        { source: "javascript.png", title: "Javascript" },
        { source: "typescript.png", title: "Typescript" },
        { source: "react.png", title: "React" },
        { source: "redux.svg", title: "Redux" },
        { source: "antd.svg", title: "Antd" },
        { source: "less.png", title: "less" },
        { source: "firebase.png", title: "Firebase" }
      ],
      link: "https://spaulas.github.io/react-solitaire/#/",
      github: "https://github.com/spaulas/react-solitaire",
      mainImage: "reactSolitaire_main.png",
      sideImage: "reactSolitaire_side.png"
 }

```

<p>Just pay attention to the images and the description translation id.</p>
