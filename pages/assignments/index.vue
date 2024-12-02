<template>
    <!-- <main> -->
        <NuxtLink to="/">&#8592; back</NuxtLink>
        <h1>Assignments</h1>
        <hr>
        <ul>
            <li>
                <details id="a8-1">
                    <summary><h2>8.1 Website: API + Website</h2></summary>
                    <p>Develop a Node/Express API, and build a website that uses this API.</p>
                    <h3>Part 1: API</h3>
                    <p>Build an API using Node and Express. You are allowed to use or expand the web service you developed in assignment 7.2. If you are satisfied with the API, feel free to jump into Part 2 to start building a website using the API you made.</p>
                    <p>Note that you must allow CORS so your website won't encounter CORS errors when making requests.</p>

                    <h3>Part 2: Interactive Website</h3>
                    <p>Create an interactive website where users can make requests to your API based on their interactions. For example, clicking a search button to retrieve a movie info based on a search key word.</p>
                    
                    <h3>Requirements</h3>
                    <ul>
                        <li>Both the source code of API and website need to be on Github and include a README in each repository</li>
                        <li>Your API's README should include the website URL, API URL, how to request, a sample request, or any required info to use the API, such as running the API locally or applying for an environment variable</li>
                        <li>Your website's README should include the features, tech stack, and basic info of the API used in the site</li>
                    </ul>
                    <p>Submit the URL to either your API or website's Github repo on Canvas.</p>
                    <h3>Note: Solving CORS errors</h3>
                    <ol>
        <li>Use <code>npm install cors</code> in your node service</li>
        <li>In your <code>index.js</code> file add <code>import cors from 'cors'</code>, then add</li>

            <pre>
app.use(cors({
    origin: '*'
})); </pre>

        <li>Push your changes to Github/Render</li>
    </ol>
                </details>
            </li>
            <hr>
            <li>
                <details id="a7-2">
                    <summary><h2>7.2 Develop a Web Service</h2></summary>
                    <p>Build a web service using Node.js and Express that responds with different outputs based on the request data. Submit the link to your repo that includes the following to Canvas.</p>
                    <h3>Requirements</h3>
                    <ul>
                        <li>Make your source code available on your GitHub repo.</li>
                        <li>Include a <code>.gitignore</code> file that includes <code>/node_modules</code> in your project (this will ensure you don't push your <code>node_modules</code> to your repo).</li>
                        <li>Write a <code>README.md</code> that includes your deployed web service URL, required queries or parameters, and a sample request and response.</li>
                        <li>Deploy your web service to <a href="https://render.com/" target="_blank" rel="noopener noreferrer">Render</a> using the free plan.</li>
                        <li>Accept at least two route parameters (e.g., <code>/courses/:department/:level</code>) or query strings (e.g., <code>/clothing?category=top&color=black</code>) in your web service.</li>
                    </ul>

                    <h3>Tips</h3>
                    <p>When developing your web service, consider the following:</p>
                    <ul>
                        <li>What if users forget to provide parameters or queries in the request URL? (Use conditional statements to check in your web service!)</li>
                        <li>How can you structure a friendly default response or error message?</li>
                        <li>Use <code>console.log</code> to debug and read the request data.</li>
                    </ul>
                    <h2>Resources</h2>
                    <ul>
                        <li><a href="https://www.youtube.com/watch?v=wM3TEvQn2hw" target="_blank" rel="noopener noreferrer">How to Set Up a Node.js Project</a> by The Coding Train</li>
                        <li><a href="https://www.youtube.com/watch?v=CnH3kAXSrmU" target="_blank" rel="noopener noreferrer">Express Crash Course</a> by Traversy Media</li>
                        <li><a href="https://developer.nytimes.com/docs/movie-reviews-api/1/overview" target="_blank" rel="noopener noreferrer">New York Times Movie Reviews API documentation</a></li>
                        <li><a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">JSONPlaceholder documentation</a></li>
                        <li><a href="https://metmuseum.github.io/" target="_blank" rel="noopener noreferrer">The Metropolitan Museum of Art Collection API documentation</a></li>
                    </ul>
                </details>
            </li>
            <hr>
            <li>
                <details id="a7-1">
                    <summary><h2>Exercise: 7.1 Web Service</h2></summary>
                    <p>Modify the web service we went through today by designing your own endpoints and responses with query parameters or route parameters. Submit your documentation that includes your code and the following on Canvas.</p>

                    <h3>Design Your Own Endpoints</h3>
                    <ul>
                        <li><strong>Example of Route Parameter:</strong> An endpoint that accepts a parameter in the URL (e.g., <code>/item/:id</code>).</li>
                        <li><strong>Example of Query Parameter:</strong> An endpoint that accepts optional query parameters (e.g., <code>/items?category=fruits</code>).</li>
                    </ul>

                    <h3>Define the Responses</h3>
                    <ul>
                        <li><strong>Data to Return:</strong> This could be a simple message, a JSON object, or data from an array.</li>
                        <li><strong>Handling Unexpected or Different Scenarios:</strong> For example, a message to send if the requested resource doesn’t exist, or if no query parameter is provided.</li>
                    </ul>

                    <h3>Documentation</h3>
                    <ul>
                        <li>Description of your designed endpoints and responses and how to interact with your web service</li>
                        <li>Screenshots of your code, output from the browser, your commands, and output in the terminal</li>
                    </ul>
                </details>
            </li>
            <hr>
            <li>
                <details id="a6-1">
                    <summary><h2>Website: 6.1 React Website</h2></summary>
                    <p>make a website with React.js. you can take inspiration from any websites you have made before. you are encouraged to:</p>
                    <ul>
                        <li>play around with other React libraries, such as <a href="https://r3f.docs.pmnd.rs/getting-started/introduction" target="_blank" rel="noopener noreferrer">react-three-fiber</a>, <a href="https://gsap.com/resources/React/" target="_blank" rel="noopener noreferrer">gsap/react</a>, or <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">framer-motion</a>.</li>
                        <li>use a dataset or a public API (public APIs ensure successful requests after deployment).</li>
                        <li>add interactivity, such as manipulating an array of objects that shows on the site.</li>
                    </ul>
                    <h3>Requirements</h3>
                        <ul>
                            <li>Have at least 2 components</li>
                            <li>Use reusable components with props</li>
                            <li>Style your component with inline CSS or CSS files</li>
                            <li>Render a list of components using <code>.map()</code></li>
                            <li>Deploy your site to GitHub Pages, Netlify, Vercel, etc.</li>
                        </ul>
                        <p>Submit the website URL or link to your GitHub Pages on Canvas</p>
                </details>
            </li>
            <hr>
            <li>
                <details id="a5-2">
                    <summary><h2>Website: 5.2 Data Visualization</h2></summary>
                    <p>Create a data visualization website with D3.js, HTML, CSS, and JavaScript. You are encouraged to:</p>
                    <ul>
                        <li>Leverage D3 functions, examples, and resources</li>
                        <li>Pick a dataset/API you find interesting, or create your own</li>
                        <li>Write any insights or stories you would like to share on your site</li>
                        <li>Add interactivity to your chart, such as showing tooltips with mouseover, updating charts with clicks</li>
                        <li>Play around with transitions and animations</li>
                    </ul>
    
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="https://d3-graph-gallery.com/" target="_blank">D3 Graph Gallery</a> (good starter if you don't know what to make!)</li>
                        <li><a href="https://d3-graph-gallery.com/intro_d3js.html" target="_blank">An introduction to d3.js in 10 basic examples.</a></li>
                        <li><a href="https://info474-s17.github.io/book/introduction-to-d3-js.html" target="_blank">Introduction to D3.js</a> by Michael Freeman</li>
                        <li><a href="https://www.d3indepth.com/" target="_blank">D3 in Depth</a></li>
                        <li><a href="https://www.edriessen.com/2023/04/24/an-introduction-to-scrollytelling-data-storytelling-using-scrollama-js-d3-js-and-html-css/" target="_blank">Introduction to Scrollytelling</a> by edriessen</li>
                        <li><a href="https://www.youtube.com/watch?v=fYQGgaE_b4I" target="_blank">SO YOU THINK YOU CAN SCROLL Jim Vallandingham</a> by BocoupLLC</li>
                        <li><a href="https://vallandingham.me/scroller.html" target="_blank">So You Want to Build A Scroller</a> by Jim Vallandingham</li>
                        <li><a href="https://info474-s17.github.io/book/scrolling.html" target="_blank">Scrolling with D3.js</a> by Michael Freeman</li>
                        <li><a href="https://pudding.cool/process/introducing-scrollama/" target="_blank">Introducing Scrollama</a> by The Pudding</li>
                    </ul>
                </details>
            </li>
            <hr>
            <li>
                <details id="a5-1">
                    <summary><h2>Exercise: 5.1 SVG Drawing</h2></summary>
                    <p>Use SVG shapes, elements, and functions to draw a poster, pattern, or collage you like. You are allowed to:</p>
                    <ul>
                        <li>Write SVG elements directly in HTML</li>
                        <li>Use functions from D3.js to append your SVG elements</li>
                        <li>Play around with SVG filters</li>
                        <li>Experiment with simple data</li>
                        <li>Add CSS animation or transition</li>
                        <li>Include other HTML elements in the SVG or site</li>
                    </ul>
                    <p>Upload your SVG drawing to GitHub Pages and submit the link to Canvas.</p>
    
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject" target="_blank">MDN: foreignObject</a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image" target="_blank">MDN: image</a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Patterns" target="_blank">MDN: Patterns</a></li>
                        <li><a href="https://www.sarasoueidan.com/blog/css-svg-clipping/" target="_blank">Clipping in CSS and SVG</a> by Sara Soueidan</li>
                        <li><a href="https://tympanus.net/codrops/2019/01/15/svg-filters-101/" target="_blank">SVG Filters 101</a> by Codrops</li>
                        <li><a href="https://yoksel.github.io/svg-filters/#/" target="_blank">SVG Filters</a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Filter_effects" target="_blank">MDN: Filter Effects</a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence" target="_blank">MDN: feTurbulence</a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts" target="_blank">MDN: Texts</a></li>
                        <li><a href="https://www.nan.fyi/svg-paths" target="_blank">Understanding SVG Paths</a> by NaN</li>
                        <li><a href="https://codepen.io/kitasenjudesign/pen/NWzvLpV" target="_blank">svg filter 2</a> by KitasenjuDesign</li>
                        <li><a href="https://codepen.io/Valgo/pen/PowZaNY" target="_blank">Text Morph</a> by Valgo</li>
                        <li><a href="https://codepen.io/ZachSaucier/pen/gZzPgQ" target="_blank">Animated blob SVG text clipping effect - Pt. 6</a> by Zach Saucier</li>
                        <li><a href="https://www.youtube.com/watch?v=gWai7fYp9PY" target="_blank">Learn To Build An SVG Animation With CSS</a> by developedbyed</li>
                        <li><a href="https://observablehq.com/@kevinfjbecker/d3-flower" target="_blank">D3 Flower</a> by Kevin Becker</li>
                        <li><a href="https://dev.to/liaowow/when-art-meets-data-flowers-as-visual-metaphor-1ekl" target="_blank">When Art Meets Data: Flowers as Visual Metaphor</a> by Annie Liao</li>
                        <li><a href="https://dev.to/jessesbyers/create-custom-forecast-flower-icons-with-d3-jg6" target="_blank">Create Custom Forecast Flower Icons with D3</a> by Jesse Smith Byers</li>
                    </ul>
                </details>
            </li>
            <hr>
            <li>
                <details id="a4-2">
                    <summary><h2>Website: 4.2 Interactive Website</h2></summary>
                    <p>submit a github page link to Canvas</p>
                    <h3>Option 1</h3>
                    <p>create a website/web-based poster that involves movements or a sequence of animations.</p>
                    <h3>Option 2</h3>
                    <p>create an interactive website where users can manipulate the DOM through interactions. this could be clicking to add new elements or change their behavior, scrolling to append or reveal content, or dragging and dropping elements.</p>
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="https://gsap.com/docs/v3/Plugins/Draggable/" target="_blank">Draggable | GSAP | Docs & Learning</a></li>
                        <li><a href="https://www.youtube.com/watch?v=8yKRl-w1wfo" target="_blank">Easy SVG Drag and Drop with GreenSock's Draggable</a> by GreenSockLearning</li>
                        <li><a href="https://www.youtube.com/watch?v=X7IBa7vZjmo" target="_blank">Introducing ScrollTrigger for GSAP</a> by GreenSockLearning</li>
                        <li><a href="https://www.youtube.com/watch?v=fce5B2DicN0" target="_blank">Tiny SplitText tutorial</a> by GreenSockLearning</li>
                        <li><a href="https://gsap.com/docs/v3/Plugins/SplitText/" target="_blank">SplitText | GSAP | Docs & Learning</a></li>
                        <li><a href="https://www.youtube.com/watch?v=tCNz6dSZXpk" target="_blank">Split text animation using HTML CSS | GSAP 3 animation | Frontend Design | 2020</a> by I Make Design Easy</li>
                        <li><a href="https://gsap.com/docs/v3/Plugins/MotionPathPlugin/" target="_blank">MotionPath | GSAP | Docs & Learning</a></li>
                        <li><a href="https://www.youtube.com/watch?v=G9207EJySaA" target="_blank">If Pixar Made Programming Tutorials</a> by Hyperplexed</li>
                    </ul>
                </details>
            </li>
            <hr>
            <li>
                <details id="a4-1">
                    <summary><h2>Exercise: 4.1 Dynamic Web Page</h2></summary>
                    <p>Choose one or more event listeners, create an element/interface/website where interactions are involved to change how an element/website appears or behaves. Upload the site to github pages, submit the link to Canvas.</p>
                    <h3>examples/inspo</h3>
                    <ul>
                        <li><a href="https://codepen.io/alekzandriia/pen/bGMxvPR" target="_blank">💡Light Switch 💡</a> by Alekzandriia</li>
                        <li><a href="https://codepen.io/garrettbear/pen/JzMmqg" target="_blank">CVS Receipt</a> by Garrett Bear</li>
                        <li><a href="https://codepen.io/abxlfazl/pen/YzGEVRP" target="_blank">music player widget</a> by abxlfazl khxrshidi</li>
                        <li><a href="https://codepen.io/singhimalaya/pen/QZKqOX" target="_blank">Music Player | Audio Player 🎵</a> by Himalaya Singh</li>
                        <li><a href="https://codepen.io/kathykato/pen/EzXZvN" target="_blank">Face Button</a> by Katherine Kato</li>
                        <li><a href="https://codepen.io/GeorgePark/pen/WgGmPq" target="_blank">Emoji Scratch Card</a> by George W. Park</li>
                        <li><a href="https://codepen.io/Kalever/pen/pNrKKY" target="_blank">Rotating Logo on Scroll</a> by TK</li>
                        <li><a href="https://codepen.io/nosurprisethere/pen/xrXjYV" target="_blank">Before After Image Slider (Vanilla)</a> by Huw Llewellyn</li>
                        <li><a href="https://codepen.io/enbee81/pen/yLyrmyg" target="_blank">Diagonal Layouts in 2020</a> by Nils Binder</li>
                    </ul>
                </details>
            </li>
            <hr>
            <li>
                <details id="a3-4">
                    <summary><h2>Exercise: 3.4 JavaScript debugger and Documentation</h2></summary>
                    <p>submit as a writeup on Canvas</p>
                    <h3>Part 1</h3>
                    <p>Watch this <a href="https://www.youtube.com/watch?v=l8pe_MSX4Lc" target="_blank">video</a> about debugging in the Chrome browser, and take notes on using a debugger, breakpoints, and dev tools.</p>
                    <h3>Part 2</h3>
                    <p>write a README.md for your first Studio project in its github repo. include the link to your repo in the writeup.</p>
                    <p>there is no specific format on how to write a README.md, but it should tell the following:</p>
                    <ul>
                        <li>overview of your project: title, description</li>
                        <li>features: usages, project showcase, demo images etc.</li>
                        <li>technology: tech stack, tools, external libraries etc.</li>
                        <li>credits</li>
                    </ul>
                </details>
            </li>
            <hr>
            <li>
                <details id="a3-3">
                    <summary><h2>Exercise: 3.3 JavaScript Class and Object</h2></summary>
                    <p>submit the screenshot of your code and console as a screenshot to Canvas</p>
                    <h3>Create a Class</h3>
                    <p>Think about an object you have interacted with either in real-life or online that can be represented using a class. For example:</p>
                    <ul>
                        <li>A <strong>book</strong> in a library</li>
                        <li>A <strong>pet</strong> at home</li>
                        <li>A <strong>product</strong> in a store</li>
                        <li>A <strong>student</strong> in a school</li>
                        <li>An <strong>athlete</strong> in a team</li>
                    </ul>
                    <p>Follow the Object Oriented Programming paradigm, create your own Class and objects using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" target="_blank">JavaScript Class</a> syntax. Your class should include:</p>
                    <ul>
                        <li><strong>At least 3 properties</strong> (e.g., name, price, or type).</li>
                        <li><strong>At least 2 methods</strong> (e.g., actions the object can perform, such as borrowing a book, feeding a pet, or calculating the price of a product); at least 1 of the methods can modify one of the properties.</li>
                    </ul>
                    <h3>Instantiate Your Objects</h3>
                    <p>Create at least <strong>two instances</strong> of your class with different values for the properties. Use the methods to interact with your objects and show how they work. For example:</p>
                    <pre>// Create a class
class Pet {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

  feed() {
	  console.log(`${this.name} is being fed.`)
  }

  play() {
	  console.log(`${this.name} is playing happily.`)
  }
  celebrateBirthday() {
	  this.age++
	  console.log(`${this.name} turns ${this.age} years old!`)
	  return this.age
  }
}

// Instantiate objects
const myDog = new Pet('Buddy', 'Dog', 3);
const myCat = new Pet('Whiskers', 'Cat', 2);

myDog.feed()  // Buddy is being fed.
myCat.play()  // Whiskers is playing happily.
myDog.celebrateBirthday()
console.log(myDog.age)</pre>
                </details>
            </li>
            <hr>
            <li>
                <details id="a3-2">
                    <summary><h2>Exercise: 3.2 Open Source and Contribution</h2></summary>
                    <h3>Option 1:</h3>
                    <p>pick an open-source project available on github, such as the book of shaders, ml5.js, three.js, or any projects you like on github. observe the project by doing the following. take notes and submit as a writeup on canvas.</p>
                    <ul>
                        <li><p>What project (include the link to repo) are you observing? Who manage it or who are the main contributors? When's the latest update/commit and how active or healthy do you think this project is?</p></li>
                        <li><p>read the README.md of the repo: what is this project about and what is included in the README, such as instructions on running the project, its contributors, or available features and usages?</p></li>
                        <li><p>check the branches under the repo, what do you think they are about? bug fixing, feature development or others?</p></li>
                        <li><p>read the issues under the Issues tab (Open + Closed) look into issues you find well-written: what are the issues about, such as bug reports, feature requests, or questions? and share the URLs of the issues</p></li>
                        <li><p>read the pull requests (Open and Closed) under the Pull Requests tab, click some of them you find interesting. observe their conversation or activity. what is this PR about or trying to fix? how are the commit messages written? do you find any github users who have engaged or closed many issues? and share the URLs of the issues</p></li>
                    </ul>
                    <h3>Option 2:</h3>
                    <p>If you would like some hands-on practices for this exercise, you can contribute to our <a href="https://leey611.github.io/f24corelabsystems/" target="_blank">class site</a>. Here's the <a href="https://github.com/leey611/f24corelabsystems" target="_blank">repo</a>, and our <a href="https://leey611.github.io/f24corelabsystems/community_agreements" target="_blank">community agreements page</a> hasn't been filled yet.</p>
                    <p>To contribute, please email me your GitHub account and I will add you as a collaborator, and then do the following:</p>
                    <ul>
                        <li>Clone the site to somewhere on your machine with:<br>
                            <code>git clone https://github.com/leey611/f24corelabsystems.git</code>
                        </li>
                        <li>Open the cloned project directory in VS Studio Code.</li>
                        <li>Look for <code>pages/community_agreements/index.vue</code>.</li>
                        <li>You should see the comments I leave under each <code>&lt;ul&gt;</code>.</li>
                        <li>Create a new branch called <code>community-agreements/&lt;your-firstname&gt;</code> (or name it whatever you like):<br>
                            <code>git branch &lt;new-branch-name&gt;</code>
                        </li>
                        <li>Checkout the branch:<br>
                            <code>git checkout &lt;new-branch-name&gt;</code>
                        </li>
                        <li>Write one agreement to the community agreements using <code>&lt;li&gt;</code>.</li>
                        <li>Stage your changes:<br>
                            <code>git add .</code>
                        </li>
                        <li>Commit your changes:<br>
                            <code>git commit -m "update community agreements"</code>
                        </li>
                        <li>Push your changes to remote:<br>
                            <code>git push origin &lt;new-branch-name&gt;</code>
                        </li>
                        <li>Go to the repo, click the branch you made under Branches, and make a Pull Request.</li>
                        <li>Submit the link to your PR on Canvas. And that's it. I will review your PR.</li>

                    </ul>
                </details>
            </li>
            <hr>
            <li>
                <details id="a3-1">
                    <summary><h2>Exercise: 3.1 File-Made Structure</h2></summary>
                    <p>Create a tree structure directory/folder using command line interface (mainly <code>cd</code> and <code>mkdir</code>). This directory must have at least 3 levels of nesting (meaning at least 3 subdirectories).</p>
                    <p>Folder Tree Structure Example:</p>
                    <pre>
    FolderPoetry/
    ├── Planet/
    │   ├── Earth/
    │   │   └── Forest/
    ├── Moon/
    │   └── Crater/
    └── Mars/
        └── Rover/
                    </pre>
                    <p>This exercise is a version of Melanie Hoff's Folder Poetry workshop. Check out some student work and the workshop below:</p>
                    <ul>
                        <li><a href="https://www.are.na/digital-love-languages/folder-poetry-fm8h1k8vsfk" target="_blank">Folder Poetry | Are.na</a></li>
                        <li><a href="https://lovelanguages.melaniehoff.com/week-2-%E2%9C%A7-folder-poetry/" target="_blank">Digital Love Language</a> by Melanie Hoff</li>
                    </ul>
                </details>
            </li>
            <hr>
            <li>
                <details id="a2-2">
                    <summary><h2>Website: 2.2 Static Website</h2></summary>
                    <p>Make a website that serve as an index/portfolio page for your Studio projects. submit your website as a github page link</p>
                </details>
            </li>
            <hr>
            <li>
                <details id="a2-1">
                    <summary><h2>Exercise: 2.1 DOM</h2></summary>
                    <h3>Recreate an element with HTML/CSS (JavaScript is optional)</h3>
                    <p>Pick one of the following options:</p>
                    <ul>
                        <li><p><b>Website Element: </b>Choose a website element that you find interesting, such as a card component, image gallery, carousel, a navigation bar, a form, or a section layout. Recreate it using HTML and CSS.</p></li>
                        <li><p><b>Real-Life Object: </b>Find a real-life object that you have interacted with, such as an album cover, poster, user interface, driver license/ID, or a product label. Recreate this object as a digital representation using HTML and CSS.</p></li>
                        <li><p><b>Site Layout/Design: </b>Recreate a site's landing page you like.</p></li>
                    </ul>
                </details>
            </li>
            <hr>
            <li>
                <details id="a1-1">
                    <summary><h2>Exercise: 1.1 How Does the Internet Really Work</h2></summary>
                    <h3>Part 1: Reading Response</h3>
                    <p>Pick one of the following readings or videos:</p>
                    <ul>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works" target="_blank">How the web works</a> by MDN</li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work" target="_blank">How does the Internet work?</a> by MDN</li>
                        <li><a href="https://www.youtube.com/watch?v=0EqKnvzo3no" target="_blank">Computer Scientist Explains the Internet in 5 Levels of Difficulty</a> by WIRED</li>
                        <li><a href="https://www.youtube.com/watch?v=TNQsmPf24go" target="_blank">How Does the Internet Work? - Glad You Asked S1</a> by Vox</li>
                    </ul>
                    <p>Answer the following prompts: Take notes from the reading or video. Did anything interest or surprise you? What do you have questions about? </p>
                    <h3>Part 2: Drawing</h3>
                    <p>Pick a topic that interested you during class or in the readings. For example: client-server model, layers of the Internet, or submarine cables. <br> Draw a drawing or diagram to help remember that concept OR that would help you explain to a friend. This prompt is open to interpretation! It can be as creative or representative as you want.</p>
                </details>
            </li>
        </ul>
       
    <!-- </main> -->
</template>
<script setup>
useHead({
  title: 'Assignments',
})
</script>
<style scoped>
h1 {
    @apply my-4;
}
h2 {
    @apply inline;
}

h3 {
    @apply my-4 underline
}

details ul {
    @apply ps-5 my-4 marker:text-violet-300 list-disc;
}

ol {
    @apply ps-5 list-decimal;
}

li > p {
    @apply mb-4;
}

pre {
    @apply p-4 rounded bg-violet-200;
    /* Allows text to wrap */
    /* white-space: pre-wrap;   */
    /* Breaks long words to prevent overflow */
    /* word-wrap: break-word;   */
    /* Ensures that long words will break */
    /* overflow-wrap: break-word;  */
    white-space: pre; /* Prevents text wrapping for long lines */
    word-wrap: normal; /* Ensures words don’t wrap */
    overflow-wrap: normal; /* Prevents word breaks */
    overflow-x: auto; /* Enables horizontal scrolling */
    max-width: 100%; /* Prevents the pre element from exceeding its container */
}

code {
    white-space: pre-wrap;  /* Allows wrapping on long lines */
    word-wrap: break-word;  /* Breaks long words if needed */
    word-break: break-word; /* Ensures breaks within long words */
}

</style>