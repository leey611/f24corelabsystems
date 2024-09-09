<template>
    <!-- <main> -->
        <NuxtLink to="/">&#8592; back</NuxtLink>
        <h1>Assignments</h1>
        <hr>
        <ul>
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
</style>