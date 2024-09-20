<template>
    <!-- <main> -->
        <NuxtLink to="/">&#8592; back</NuxtLink>
        <h1>Community Agreement</h1>
        <hr>
        <h2>Pre Agreement Working Questions</h2>
        <p><em>Note: The below is modified from <a href="https://mozillascience.github.io/working-open-workshop/code_of_conduct/" target="_blank">this Mozilla workshop</a> and Assistant Professor of Interaction and Media Design <a href="https://www.notion.so/2df011ac6f4842ac91480c907417bcd5?pvs=21" target="_blank">Xin Xin</a>.</em></p>
        <h2>⭐️ What core words would you like to associate with your community?</h2>
    <ul>
        <!-- write yours here using <li> -->
    </ul>

    <h2>⭐️ What behaviors do you want to encourage? What do you want to discourage?</h2>
    <h3>Encourage</h3>
    <ul>
        <!-- write yours here using <li> -->
    </ul>

    <h3>Discourage</h3>
    <ul>
        <!-- write yours here using <li> -->
    </ul>

    <h2>⭐️ Are there consequences for violating the code? If so, what are they? Are there ways we want to recognize accomplishments or other kinds of positivity in the space? If so, how?</h2>
    <ul>
        <!-- write yours here using <li> -->
    </ul>

    <h2>⭐️ How can we as a group make others feel brave (as in brave space!) and supported?</h2>
    <ul>
         <li>Tell your classmate loudly what you like about their work, and applaud loudly after their presentation. 👏</li>
    </ul>

    <h2>⭐️ What do you <em>need</em> to be successful (on your own terms)?</h2>
    <ul>
        <!-- write yours here using <li> -->
    </ul>

    <h2>⭐️ What can we do to acknowledge the culture of productivity, which is often harmful for our mental health and creates competition &gt; collaboration?</h2>
    <ul>
        <!-- write yours here using <li> -->
    </ul>
       
    <!-- </main> -->
</template>
<script setup>
useHead({
  title: 'Community Agreements',
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

ul {
    @apply ps-5 my-4 marker:text-violet-300 list-disc;
}

li {
    @apply mb-4;
}
</style>