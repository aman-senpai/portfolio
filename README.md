# ❄️NextJs Portfolio Assignment


- For Running this repository on local 
- Frontend - cd to NextJs-portfolio > npm install > npm run dev

# 🙅‍♂️You need to add your own github personal-access-token , why ?
- Because i am using here a Github API that can show your repository .
- Where to add - on clqu.config.js file 
```
module.exports = {
    name: 'Aman Senpai',
    version: '3.0.0',
    githubName: 'aman-senpai',
    githubKey: "YOUR OWN ACCESS TOKEN",
    email: 'jemscollin1@gmail.com',
    errors: {
        404: "This page could not be found.",
        500: "An error occurred while processing your request."
    }
} 

```