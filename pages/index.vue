<template>
    <!-- <div id="root" class="container m-auto px-4 pb-32 xl:px-32 text-base md:text-md"> -->
        <header>
            <NuxtRouteAnnouncer />
            <h1>Parsons School of Design</h1>
            <h2>Design and Technology</h2>
            <h3><em>PUDT3101, Core Lab Systems</em></h3>
            <p class="mb-4">CRN 3047</p>
            <p>Fall 2024 Monday + Wednesday 4:00pm - 6:40pm</p>
            <p>6 East 16th Street, Room 1208</p>
            <p>You can reach me at <em>leey611@newschool.edu</em></p>
            <p>Office Hours: <a href="https://calendar.app.google/RtbcgkUNL4T8RBSh8" target="_blank">here</a> or by appointment</p>
            
            <p><a href="https://docs.google.com/document/d/1R2WrzzcLkHT1gNxpn6yAvRzuE8KcFVH9rFr6BMdytaE/edit?usp=sharing" target="_blank">Syllabus</a></p>
            <p><NuxtLink to="/assignments">Assignments</NuxtLink></p>
            <p><a href="#resources">Resources</a></p>
            <p><NuxtLink to="/community_agreements">Community Agreements</NuxtLink></p>
            <h2 class="my-4 font-bold">Course Description</h2>
            <p>This course provides production and coding skills for projects involved in Core Studio: DT3 - Systems. Students will expand their understanding of acquiring and processing data sets. They will learn about form, function and techniques for developing virtual and physical networked systems, interactive environments, objects and processes.
            </p>
            <p class="my-4">Primary technical subjects include creating and publishing web content using HTML, CSS, and Javascript; working with data APIs; and project documentation.</p>
        </header>
        <hr>
        <section class="weekly_outline">
            <details class="week">
                <summary>Week 3</summary>
                <h4>Wednesday, September 11</h4>
                <ul>
                    <li>JavaScript: document object model (DOM)</li>
                    <li>JavaScript: data, function, if/else, loop</li>
                    <li>JavaScript: fetch and promise</li>
                </ul>
                <h4>Monday, September 09</h4>
                <ul>
                    <li>CSS: units and fluid typography</li>
                    <li>CSS layout: flexbox and grid</li>
                    <li>CSS: selectors</li>
                    <li>CSS: position</li>
                    <li>CSS: transition and animation</li>
                </ul>
                <p><NuxtLink to="/assignments#a2-2">2.2 Static Website</NuxtLink> due 09/16</p>
            </details>
            <hr>
            <details class="week">
                <summary>Week 2</summary>
                <h4>Wednesday, September 04</h4>
                <ul>
                    <li>Environment setup</li>
                    <li>HTML: <code>head</code>, <code>meta</code>, and <code>body</code></li>
                    <li>HTML/CSS Review: navbar, card, carousel (<a href="/html-css-review.zip"  download="html-css-review.zip">html-css-review.zip</a>)</li>
                </ul>
                <p><NuxtLink to="/assignments#a2-1">Assignment 2.1 DOM</NuxtLink> due 09/09</p>
                <h4 class="line-through">Monday, September 02</h4>
                <p>No class</p>
            </details>
            <hr>
            <details class="week">
                <summary>Week 1</summary>
                <h4>Wednesday, August 28</h4>
                <ul>
                    <li>Websites are made up of files.</li>
                    <li>What is the internet?</li>
                    <li>Protocols are rules for how computers talk to one another.</li>
                    <li>What are the 7 layers of the Internet?</li>
                    <li>The Internet is a physical infrastructure.</li>
                    <li>What is the Web?</li>
                    <li>What happens when we publish a website?</li>
                    <li>What happens when we access a website?</li>
                </ul>
                <p><NuxtLink to="/assignments#a1-1">Assignment 1.1 How Does the Internet Really Work</NuxtLink> due 09/04</p>
                <h4>Monday, August 26</h4>
                <ul>
                    <li>Introductions</li>
                    <li>Syllabus review</li>
                    <li>Community agreements</li>
                </ul>
            </details>
        </section>
        <hr>
        <section id="resources" class="resources">
            <h2>Resources</h2>
            <div class="flex flex-wrap justify-between gap-y-6 lg:gap-x-0 ">
                <section>
                    <h3>Command Line Interface</h3>
                    <ul>
                    <li>
                        <a href="https://www.geeksforgeeks.org/linux-commands-cheat-sheet/" target="_blank">UNIX Commands</a>
                    </li>
                    </ul>
                </section>
                <section>
                    <h3>Git & Github</h3>
                    <ul></ul>
                </section>
                <section>
                    <h3>AI</h3>
                    <ul>
                        <li><a href="https://chatgpt.com/" target="_blank">ChatGPT</a></li>
                        <li><a href="https://claude.ai/" target="_blank">Claude</a></li>
                        <li><a href="https://gemini.google.com/" target="_blank">Gemini</a></li>
                        <li><a href="https://copilot.microsoft.com/" target="_blank">Copilot</a></li>
                        <li><a href="https://www.meta.ai/" target="_blank">Meta AI</a></li>
                    </ul>
                </section>
                <section>
                    <h3>JavaScript</h3>
                    <ul>
                        <li><a href="https://gist.github.com/thegitfather/9c9f1a927cd57df14a59c268f118ce86" target="_blank">JavaScript Cheatsheet</a></li>
                        <li><a href="http://jsforcats.com/" target="_blank">JavaScript For Cats</a></li>
                    </ul>
                </section>
                <section>
                    <h3>HTML</h3>
                    <ul>
                        <li><a href="https://validator.w3.org/#validate_by_input" target="_blank">HTML Validator</a></li>
                        <li><a href="https://www.w3schools.com/TAGs/" target="_blank">HTML Tags</a></li>
                        <li><a href="https://html.energy/" target="_blank">HTML Energy</a></li>
                    </ul>
                </section>
                <section>
                    <h3>CSS</h3>
                    <ul>
                    <li><a href="https://www.w3schools.com/cssref/index.php" target="_blank">All CSS Properties</a></li>
                    <li><a href="https://www.css-gradient.com/" target="_blank">CSS Gradient Generator</a></li>
                    <li><a href="http://www.patternify.com/" target="_blank">CSS Pattern Generator</a></li>
                    <li><a href="https://tobiasahlin.com/blog/curved-path-animations-in-css/" target="_blank">Animating on a Curved Path</a></li>
                    <li><a href="https://www.w3schools.com/cssref/css_selectors.php" target="_blank">CSS Selectors</a></li>
                    </ul>
                </section>
                <section>
                    <h3>Color</h3>
                    <ul>
                        <li><a href="https://www.w3schools.com/colors/colors_converter.asp" target="_blank">Color Converter</a></li>
                        <li><a href="https://www.canva.com/colors/color-palette-generator/" target="_blank">Color palette from image</a></li>
                        <li><a href="https://chromatichq.com/insights/understanding-and-using-hsl-your-css/">Understanding and Using HSL in Your CSS</a></li>
                        <li><a href="https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff&fonts=Inter-Inter" target="_blank">Realtime Colors</a></li>
                        <li><a href="https://programmingdesignsystems.com/color/color-models-and-color-spaces/index.html" target="_blank">Color Models and Color Spaces</a></li>
                        <li><a href="https://programmingdesignsystems.com/color/color-schemes/index.html" target="_blank">Color Schemes</a></li>
                        <li><a href="https://htmlcolorcodes.com/color-names/" target="_blank">HTML Colors</a></li>
                    </ul>
                </section>
                
            </div>
        </section>
    <!-- </div> -->
</template>

<script setup>
useSeoMeta({
  title: 'F24 Core Lab Systems',
  ogTitle: 'F24 Core Lab Systems',
  description: 'Welcome to Core Lab Systems',
  ogDescription: 'Welcome to Core Lab Systems',
})
</script>

<style scoped>
/* #root {
    @apply container m-auto px-4 pb-32 xl:px-32 text-base md:text-md selection:bg-violet-300;
} */
ul {
    @apply ps-5 marker:text-violet-300 list-disc;
}

section h2 {
    @apply font-bold my-4;
}

.week {
    h4 {
        margin-top: 1rem;
    }
}

.resources section {
    @apply w-2/5 md:w-4/12 ;
}

em {
    @apply bg-violet-300 not-italic;
    /* font-style: normal;
    background-color: aqua; */
}

code {
    @apply rounded px-2 text-base text-white bg-violet-600;
}
</style>