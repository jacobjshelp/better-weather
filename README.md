# For the devs:
This is a NextJS application written in TypeScript. It uses Tailwind for the styling, and vitest as testing framework. The production build is deployed on Vercel.
It is intended to be consumed on a smart phone.

### To run it locally:
- clone the repo
- run `npm i` to install dependencies
- to start app locally run `npm run dev`
- open a browser and navigate to `localhost:3000`

### Other commands:
- to run the unit tests run `npm run test`
- to run prettier run `npm run pretty`

### Making changes:
Please checkout to a new branch when developing a new feature or bugfix, and create a PR to go into the `main` branch. The pipeline will run and if it succeeds then the merge is allowed. A merge with main triggers a new deployment to Vercel.

# Project information
## Overall approach to the project
I wanted to focus on solving the pain points that the customer (Better Developers) express in their description of the project, in particular that they are tired of unexpected downpours. To solve this I wanted to make a mobile friendly web application that would show what the weather would be like for each day in the next coming days. Also, I wanted to make the design a bit unique, and came up with an idea for a grid layout with boxes that would gradually fill up relative to the amount of downpour at a given hour of the day. This would allow the user to quickly see what hours of the day to stay inside and when it would be "safe" to go outside.

## Technology choices
I wanted to challenge myself to use technologies that I am not very familiar with. The reason for this intentional hurdle is that as a consultant you are often thrown into an existing tech stack and setup which you are required to learn and navigate in, whether you have existing experience with it or not. But at the same time, I wanted to pick technologies that make sense for this task. To evaluate a technology I focus on how mature the technology is, and if it is commonly used for problems like the one I am facing. I also consider the team that I am working with and the skillset that we have, (but I am not afraid to go with a technology that the team is not 100% familiar with if the technology is very good for the task). 

For this project I chose to go with a full stack NextJS project. It would allow me to both server side render and client side render the app. Also, the data fetching takes place on the backend resulting in fewer network round trips and a potential API key can be stored safely on the backend. 
Also another benefit to this full stack approach is that it makes it very natural to make the project as a Monolith architecture, which is convenient for the team at Better Developers when they review the code before the code meeting.

### Deploy on Vercel
I chose to deploy the application on Vercel because: 
- It is easy and fast to deploy NextJS apps from it allowing for speedy CI/CD
- Quickly have something to show to Better Developers as the time frame for the project was very short
- Free tier that is perfect for this sort of app (lets not spend unnecessary money on big cloud venders before it is necessary)

## General code style
Code readability is a very important code quality for me. I aim at using highly descriptive variable and function names, and also gladly introduce helper variables to increase readability. Also, I like to lean towards the rule of not allowing functions to have more than 5 lines of code, though I am highly practical about this. Same goes for UI components, I try to make them as contained as possible. I rarely write inline comments unless they are absolutely necessary for explaining something, otherwise I think that the naming of the functions should speak for themselves.

## Testing methodology
There is a not a lot of hardcore business logic in this app, however for the design of the app to work correctly it is necessary that the mathematical calculations are performed correctly. Because of this I have written unit tests that ensure that the math functions behave as expected.

## CI pipeline
I have added a simple GitHub actions workflow that runs the tests before a merge request into the main branch is allowed to help reduce the risks of introducing breaking code changes.

## Weather API to provide weather data
The weather API used is Open-meteo which is a free public API that provides weather data. It was known to the development team at the start of the project, and it gets the job done, thus it was chosen.

## Future works
- Add dependabot to the GitHub repo
- Support more weather metrics than just precipitation
  - Allow the user to select which weather metrics to see in the app
- Allow the user to provide another location
- Fetch more forecast days the further the user swipes right (progressively load them as the user swipes right)
- Turn the application into a PWA to give a more native app like feeling
- Live weather measurements provided via Kafka queues (if streams are large) 
- Storing data in a database to allow for historical data analysis and insight
- Write unit test for the `mapToDailyData` function
- Optimize UI for desktop use
