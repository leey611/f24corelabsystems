<template>
    <!-- <main> -->
        <NuxtLink to="/">&#8592; back</NuxtLink>
        <h1>Assignments</h1>
        <hr>
        <ul>
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

li > p {
    @apply mb-4;
}

pre {
    @apply p-4 rounded bg-violet-200;
    white-space: pre-wrap;  /* Allows text to wrap */
    word-wrap: break-word;  /* Breaks long words to prevent overflow */
    overflow-wrap: break-word; /* Ensures that long words will break */
    max-width: 100%; /* Prevents the pre element from exceeding its container */
}

code {
    white-space: pre-wrap;  /* Allows wrapping on long lines */
    word-wrap: break-word;  /* Breaks long words if needed */
    word-break: break-word; /* Ensures breaks within long words */
}

</style>