<template>
    <!-- <main> -->
        <NuxtLink to="/">&#8592; back</NuxtLink>
        <h1>Assignments</h1>
        <ul>
            <li>
                <details id="a1-1">
                    <summary><h2>Exercies: 1.1 How Does the Internet Really Work</h2></summary>
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
    @apply ps-4 md:ps-5 my-4 marker:text-violet-300 list-disc;
}
</style>