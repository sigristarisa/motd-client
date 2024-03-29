<h1 align="center">🍳🥚🍳MOTD🥚🍳🥚</h1>
<h2 align="center">Mayonnaise Of The Day</h2>

### Backstory
Mayonnaise took over Japan's nation back in the late 90's. Even a term <i>"Mayoler"</i> was born to describe a growing obsession with this condiment by Japanese, particularly among the younger generation.<br>
Fastfoward to 2022 – <i>"Mayoler"</i> is now a commonly used expression, and from my observation, the popularity does not remain within Japan.

To showcase the potential of mayonnaise, MOTD - Mayonnaise Of The Day - was created by the Mayo-Lover, for the Mayo-Lover, of the Mayo-Lover.


### Demo
![MOTD demo gif](https://github.com/sigristarisa/motd-client/blob/main/public/motd-demo.gif?raw=true)



### What Does the App Do?
1. Users can get their mayonnaise of the day by a randomizer – out of 100 variations!
2. Users can see the recipe of the mayonnaise
3. Users can get what type of dish would go well with their mayonnaise of the day
4. Users can access only once a day to MOTD

### What Language is Used?
**Frontend**
- React with Typescript
- CSS

**Backend** 
- Express with Typescript
- Prisma
- PostgreSQL<br/>
 
=> *backend repository is found [here](https://github.com/sigristarisa/motd-server)*


### Learning Take-Away
- It was the first time creating a full-stack application using with Typescript – learned a lot of new syntax and error handlings
- I had several troubles (CORS block, configurations etc) while deploying the project on Heroku. It was a great learning opportunity to search trouble shootings, read documentations, understand what the causes are, and implement the solutions step by step.
- The application's design was based on "my taste" at the beginning. After trying out to use the application on my own, I quickly realized that user interface shouldn't be about "how I like it" – it has to follow "how easily user could navigate themselves to use the application". 


### Improvements
- The roulette for the mayonnaise images are extremely slow, as I have deployed the app on Heroku's free version – this could be optimized
