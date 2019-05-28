const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

app.get('/students', (req, res) => {
  res.json({
    students: [
      {
        basics: {
          name: 'Dajung Kim',
          picture:
            'https://media.licdn.com/dms/image/C4E03AQECalUJ7r4vLQ/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=vvKwzFqKQsh5E8gwpY2nBhTgofQ0ImhaYFPbOCdULWE',
          email: 'obacar7@gmail.com',
          website: 'https://github.com/jenna1k',
          summary: 'A summary of John Doe...',
          location: {country: 'Germany'},
          profiles: [
            {
              network: 'Github',
              username: 'jenna1k',
              url: 'https://github.com/jenna1k',
            },
            {
              network: 'Linkedin',
              username: 'Dajung Kim',
              url: 'https://www.linkedin.com/in/kim-jenna-4292b0132/',
            },
          ],
        },
        projects: [
          {
            title: 'wildQuizApp',
            date: '2019-05-16',
            summary: 'quiz app using trivia api',
            technologies: [
              'html',
              'css',
              'react',
              'bootstrap',
              'reactstrap',
              'git',
              'github',
              'npm',
              'netlify',
            ],
          },
        ],
        favorite_programming_languages: ['javascript', 'python'],
        interests: [
          {name: 'Linux', keywords: ['git', 'terminal']},
          {name: 'javascript framework', keywords: ['react', 'vue']},
        ],
      },
      {
        basics: {
          name: 'Camille Charteau',
          picture:
            'https://media.licdn.com/dms/image/C4E03AQFU4bvO5nyT_Q/profile-displayphoto-shrink_200_200/0?e=1564012800&v=beta&t=-NqonpuOx70oy6bvW5-XYYrxXdgmV0MY9MTdI3CxdOM',
          email: 'camille.charteau@hotmail.fr',
          website: 'https://campalo.github.io/BlogOnBerlin',
          summary:
            "I'm a former Digital Marketing Manager from the tech and food fields. I decided in 2019 to go further than promoting tech tools, now I want to participate in their development. I enjoy this new carrer path as a Junior Fullstack web developer working with React.js and Node.js. I'm eager to join your dev team!",
          location: {country: 'Germany'},
          profiles: [
            {
              network: 'Github',
              username: 'Campalo',
              url: 'https://github.com/Campalo',
            },
            {
              network: 'Linkedin',
              username: 'Camille Charteau',
              url: 'https://www.linkedin.com/in/camille-charteau/',
            },
          ],
        },
        projects: [
          {
            title: 'Trivial Like game',
            date: '2019-05',
            summary:
              ' Creating a React WebApp Quiz game in 3 weeks. Check here: https://github.com/Campalo/QuizFox',
            technologies: [
              'css3',
              'html5',
              'javascript',
              'react',
              'material-ui',
              'git',
              'github',
              'netlify',
            ],
          },
        ],
        favorite_programming_languages: ['CSS3', 'React.js'],
        interests: [{name: 'innovation', keywords: ['blockchain', 'iot']}],
      },
      {
        basics: {
          name: 'Raphael Lautenbacher',
          picture: 'https://i.imgur.com/ioNgh8D.jpg',
          email: 'raphael.lautenbacher@googlemail.com',
          website: '',
          summary:
            'Passionate about diruptive technology and interested in tech since ever. Blockchain will inherit AI, Big Data in a sustainable way. We are shaping the future, we just need to participate!',
          location: {country: 'Germany'},
          profiles: [
            {
              network: 'Github',
              username: 'datingel',
              url: 'https://github.com/datingel',
            },
            {
              network: 'Linkedin',
              username: 'Raphael',
              url: 'https://de.linkedin.com/in/raphael-lautenbacher-4940a6171',
            },
          ],
        },
        projects: [
          {
            title: 'QuizFox',
            date: '15.05.2019',
            summary: 'Trivia Quiz.',
            technologies: [
              'css',
              'html/jsx',
              'react',
              'material ui',
              'git/github',
              'netlify',
            ],
          },
        ],
        favorite_programming_languages: ['REACT', 'JSX', 'Bootstrap'],
        interests: [
          {
            name: 'Blockchain',
            keywords: ['security', 'fairness', 'currencies'],
          },
        ],
      },
      {
        basics: {
          name: 'Laura Sochaczewski',
          picture: 'https://i.imgur.com/knaZGHY.jpg',
          email: 'Laura_Sochaczewski_student2019@wilder.school',
          website: '',
          summary:
            'Laura has made her journey from business & economics over econometrics & statics to data analysis and finally software product management. She has been interested in web development for many years but never dared to take this step. Wild Code School gave her the opportunity to finally take her career into her own hands and aim for her long-term goal. Coding fulfills her desire to apply logic and solve new problems every day.',
          location: {country: 'Germany'},
          profiles: [
            {
              network: 'Github',
              username: 'laura-mso',
              url: 'https://github.com/laura-mso',
            },
            {
              network: 'Linkedin',
              username: 'Laura Sochaczewski',
              url: 'https://www.linkedin.com/in/laura-sochaczewski-70863b121/',
            },
          ],
        },
        projects: [
          {
            title: 'Laura.in.Berlin',
            date: '2019-04-05',
            summary: 'Photoblog with Bootstrap 4',
            technologies: ['css', 'html', 'bootstrap'],
          },
          {
            title: "Lauras Travel's",
            date: '2019-05-05',
            summary: 'First React App for Exploration',
            technologies: ['css', 'html', 'react'],
          },
          {
            title: 'Contact Manager',
            date: '2019-05-16',
            summary: 'Introduction to Context API and Redux in Online Course',
            technologies: ['css', 'html', 'bootstrap', 'react', 'redux'],
          },
        ],
        favorite_programming_languages: ['Javascript', 'React', 'SQL'],
        interests: [
          {name: 'Music', keywords: ['Electro', 'Micro House']},
          {name: 'Cycling', keywords: ['Sport', 'Berlin']},
          {
            name: 'Travelling',
            keywords: ['Barcelona', 'London', 'Amsterdam', 'Basel', 'New York'],
          },
          {
            name: 'Psychology & Economics Books',
            keywords: [
              'The Memory Illusion',
              'Doing Good Better',
              'Lean In',
              'Freakonomics',
              'The Marshmallow Effect',
            ],
          },
        ],
      },
      {
        basics: {
          name: 'Anastasiya Aliashkevich',
          picture:
            'https://avatars3.githubusercontent.com/u/48459026?s=460&v=4',
          email: 'a.v.aliashkevich@gmail.com',
          website: '',
          summary: 'Junior Web Developer (JavaScript)',
          location: {country: 'Germany'},
          profiles: [
            {
              network: 'Github',
              username: 'aliashkevich',
              url: 'https://github.com/aliashkevich',
            },
            {
              network: 'Linkedin',
              username: 'anastasiya-aliashkevich-941091a0',
              url:
                'https://www.linkedin.com/in/anastasiya-aliashkevich-941091a0/',
            },
          ],
        },
        projects: [
          {
            title: 'Photo Blog',
            date: '2019-09-04',
            summary: 'Responsive static photo blog of Berlin',
            technologies: ['css', 'html', 'bootstrap'],
          },
          {
            title: 'Wild Circus',
            date: '2019-20-02',
            summary: 'Static site for Circus',
            technologies: ['css', 'html', 'javascript'],
          },
          {
            title: 'Wild Quiz',
            date: '2019-15-05',
            summary: 'Quiz game',
            technologies: ['css', 'html', 'reactjs', 'reactstrap', 'nodejs'],
          },
        ],
        favorite_programming_languages: ['JavaScript'],
        interests: [
          {
            name: 'Web Development',
            keywords: ['hmlt', 'css', 'javascript', 'react', 'codewars'],
          },
        ],
      },
      {
        basics: {
          name: 'Neli Diakonidze',
          picture:
            'https://avatars2.githubusercontent.com/u/35463370?s=460&v=4',
          email: 'diakonidzeneli@gmail.com',
          website: 'https://nelidiakonidze.github.io/',
          summary:
            'This is a short intro about myself; I studied Political Science in UPF University in Barcelona and I have 2 years experience as a office Manager. For the past year and half I’ve been working in an international Real Estate company in Barcelona as a Manager and Executive Assistant. Currently I am living in Berlin and studyin Web Development programme at Wild Code School.',
          location: {country: 'Germany'},
          profiles: [
            {
              network: 'Github',
              username: 'john',
              url: 'https://github.com/nelidiakonidze',
            },
            {
              network: 'Linkedin',
              username: 'john',
              url: 'https://www.linkedin.com/in/nelidiakonidze/',
            },
          ],
        },
        projects: [
          {
            title: 'Beer & Lin',
            date: '2019-1-01',
            summary: 'Bog about Berlin.',
            technologies: ['css', 'html', 'react', 'bootstrap'],
          },
        ],
        favorite_programming_languages: ['HTML5', 'CSS3', 'JavaScript'],
        interests: [{name: 'Linux', keywords: ['git', 'terminal', 'React']}],
      },
      {
        basics: {
          name: 'Asieh Mirzabagherian',
          picture: 'https://i.imgur.com/PzidSZk.png',
          email: 'mirzabagherian.asieh@gmail.com',
          website: 'http://asiemrz.me/',
          summary:
            "I am an experinced user centeric designer and a junior developer. I have  dedicated my profesional  in various fields of design Digital and physical. I have a strong knowledge and experience about Design thinking processes, it's culture and techniques. Since I have a passion about technology and innovation, I am interested in joining international Startups and Innovation centers.",
          location: {country: 'Germany'},
          profiles: [
            {
              network: 'Github',
              username: 'Asieh',
              url: 'https://github.com/AsiMrz',
            },
            {
              network: 'Linkedin',
              username: 'john',
              url: 'https://linkedin.com/john',
            },
          ],
        },
        projects: [
          {
            title: 'Iss Tracker',
            date: '2014-11-01',
            summary: 'Iss Tracker',
            technologies: ['css3', 'html5', 'react', 'reactstrap'],
          },
        ],
        favorite_programming_languages: ['HTML5', 'CSS3', 'React'],
        interests: [{name: 'Css', keywords: ['git', 'terminal']}],
      },
      {
        basics: {
          name: 'Bernadetta Nycz',
          picture: 'https://i.ibb.co/MNvLhj9/IMG-0359.png',
          email: 'beta.nycz @icloud.com',
          summary: '',
          location: {country: 'Germany'},
          profiles: [
            {
              network: 'Github',
              username: 'Hiiijj',
              url: 'https://github.com/Hiiiij',
            },
            {
              network: 'Linkedin',
              username: 'Beta',
              url: 'https://www.linkedin.com/in/beta-nycz-a9399615b/',
            },
          ],
        },
        projects: [
          {
            title: 'wildTechprofile',
            date: '2019-05-16',
            summary: 'first hackathon.',
            technologies: ['css', 'html', 'react', 'bootstrap'],
          },
        ],
        favorite_programming_languages: ['HTML5', 'CSS3', 'REACT'],
        interests: [{name: 'love tech', keywords: ['REACT', 'CSS3']}],
      },
    ],
  });
});

app.listen(port, err => {
  if (err) {
    throw new Error('There was an error');
  }
  console.log('Server is listening on port ' + port);
});
