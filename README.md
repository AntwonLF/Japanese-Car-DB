# Japanese-Car-DB


# Game---Jumper- && Technologies:

"Jumper" is an engaging 2D side-scrolling game meticulously crafted using the powerful combination of HTML, CSS, and JavaScript. Featuring a dynamic theme that evolves to capture the essence of various holidays, the game unfolds into a captivating spectacle year-round. Presently, it transports players into a charming snowy Christmas wonderland. Taking command of a character, potentially embodying the spirit of Santa Claus, players experience the journey symbolized by an elegantly moving circular image gracefully gliding across the canvas. The seamless deployment of the game through Netlify adds an extra layer of sophistication, enriching the overall gaming experience. Notably, this project benefits from the creative input and assistance provided by ChatGPT, a sophisticated language model developed by OpenAI.

## Why---Jumper
I chose to create "Jumper" seeking the challenge of initially developing Angry Birds. After careful consideration, I opted for a variation inspired by Flappy Bird, culminating in the unique creation that is my brainchild. "Jumper" stands out not just for its entertaining gameplay but also for its versatility. The capacity to adapt its theme for diverse holidays adds an extra layer of excitement for players. Whether it's the snowy charm of Christmas or the vibrant hues of other celebrations, "Jumper" ensures a delightful journey through the seasons.Notably, this project benefits from the creative input and assistance provided by ChatGPT, a language model developed by OpenAI.

## Key---Features:

Seasonal Evolution: Immerse in changing themes with evolving styles to match holidays and seasons.

Simple Controls: Navigate effortlessly using the space bar to make the character jump.

Snowfall Ambiance: Experience a captivating winter atmosphere with a mesmerizing cascade of falling snowflakes.

Obstacle Challenge: Skillfully avoid Christmas tree obstacles amid the falling snowflakes to stay in the game.

Seamless Scrolling: Enjoy a continuous scrolling background, unveiling a charming night forest scene.

Festive Music: Dive into the holiday spirit with background music, currently featuring 'lofi-christmas.mp3.'

Score Monitoring: Track your performance as you navigate the snowy landscape.

Semi-Responsive Layout: Experience visually appealing and responsive design across some devices.

## Getting Started
Click this link below to play!!
https://jumperthgame.netlify.app

- Utilize the space bar for jumping, and maintain a continuous rhythm in your jumps.
- Navigate through the winter challenge by avoiding snowflakes (identified as "Top Obstacles") and Christmas trees (identified as "Bottom Obstacles").
- Aim to achieve the highest score possible!

## WireFrames/ Screenshots: 
### Before

Start

 ![Alt text](<assets/Game (Start).png>)

In Motion 

![Alt text](<assets/Game (in Motion).png>)

Finished 

![Alt text](<assets/Game (End).png>)

### After

 Start 

![Alt text](<assets/Finished  (Start).png>)

  In Motion 
 
 ![Alt text](<assets/Finished (In Motion).png>)

End 

![Alt text](<assets/Finished (End).png>)

## Timeline

| Day        |   | Task                               | Blockers | Notes/ Thoughts |
|------------|---|------------------------------------|----------|-----------------|
| Thursday   |   | Create and present proposal        |          |  Y               |
| Friday     |   | Create game enviroment         |          |Y                 |
| Saturday   |   | Start building functions and impletmenting            |          |Y                 |
| Sunday     |   | Add functionality                  |          | Y                |
| Monday     |   | Add styling                        |          |Y                 |
| Tuesday    |   | Finalize MVP                       |          | Y               |
| Wedenesday |   | Work on stretch goals              |          |Y                |
| Thursday   |   | Work on icebox items if applicable |          | N                |
| Friday     |   | Presentation Day!                  |          |                 |
|            |   |                                    |          |                 |

## Attributions
- Demtrice Williams (Friend, Mentor, 2 Years Dev experience)
- Fritz 
- Pranto, Ashiqur Rahman (YouTuber). "Jump and Run Game with HTML, CSS, and JavaScript." https://www.youtube.com/watch?v=a0TyCnFgqlk
- Web Dev Simplified (YouTube channel). "How To Create Your First Game - JavaScript." https://www.youtube.com/watch?v=47eXVRJKdkU 
- Images used in this project were sourced from [PNGTree](https://pngtree.com/). 

// Music claim
- Music from #Uppbeat (free for Creators!):
https://uppbeat.io/t/all-good-folks/lo-fi-christmas
License code: C9VGYGNJKLAQYDRM

## Next Steps

- Transform the game theme for a different holiday.
- Enhance the game's visual experience by incorporating a more pronounced 3D effect.
- Implement a top three highscores feature to highlight players' achievements.
- Integrate a playlist for a more dynamic and varied musical experience.
- Optimize the game for responsiveness and implement touch functionality for jumping on touch-enabled devices.


## Game Pseudocode - Jumper
```// Define canvas dimensions
- Canvas width and height

// Define player properties
- Player object
- Player movement position (x, y)

// Define falling and jumping variables
- Jump speed
- Fall speed

// Define obstacle properties 
- Block (circle)
- Size 

// Initialize score and label score 
- Score = 0
- Score label

// Create a function to start the game
- Initialize game canvas object

// Game canvas object
- Canvas element
- Player object
- Block object
- Fall speed
- Update interval
- Game over flag
- Running state flag

// Create a player function
- Width, height, initial position (x, y)
- Draw player on canvas
- Move player function
  - Check for jumping
  - Adjust position based on jumping or falling
  - Check canvas boundaries
  - Stop player at the bottom of the canvas
- Check canvas boundaries function
- Jump function
- Reset jump function

// Function to create an obstacle
- Block object
- Set block properties (width, height, speed, position)
- Draw block on canvas
- Move block towards the player
- Reset block position

// Function to detect collision with obstacle
- DetectCollision function

// Function to create a score label
- Set score label properties

// Function to update canvas
- Clear the canvas
- Move player
- Draw player
- Draw block
- Move block towards the player
- Detect collision
- Draw score label

// Create a function to generate a random number
- To randomize the height and width of obstacles

// Function to reset jump after delay
- ResetJump function

// Event listener for spacebar key to trigger jump
- Document.body.onkeyup event

// Additional functions for game flow
- StartGame function
- EndGame function
- RestartGame function

// Class for Snowflake object
- X, y, size, speed
- Draw function
- Update function

// Additional functions for audio and random number generation
- PlayBackgroundMusic function
- PlayThudSound function
- RandomNumber function```
