<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad nulla repudiandae numquam ipsa laboriosam sed praesentium illo natus ab quibusdam accusamus quos sapiente aperiam, libero corporis quia. Voluptates soluta maxime sunt iste ad, dolor sint aperiam voluptatem cumque sapiente nisi culpa impedit odit nam, enim ipsam eaque, illo deserunt tempore itaque quod ducimus asperiores? Iste, quod ab hic iusto sapiente suscipit, natus, et ex est esse nobis officia non. Aliquam placeat ullam voluptates incidunt consequatur aut, numquam corporis quibusdam, dicta sunt adipisci laboriosam, modi ipsa quia facere qui accusantium! Odit incidunt culpa, asperiores tempore reprehenderit obcaecati quidem voluptatum quis, autem hic minima voluptatem? Ipsum maxime ratione, consequuntur necessitatibus omnis adipisci nobis in dolore nihil nulla aliquid, dignissimos eaque placeat nesciunt? Excepturi beatae minima omnis iusto saepe numquam voluptates nostrum cumque impedit dicta magni assumenda optio rem nemo, eius ab mollitia.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/EUR');
    // const { data } = await useFetch("/api/ninja?name=test", {
    //     method: "POST",
    //     body: { 
    //         prenom: "luigi",
    //         age: 30
    //     }
    // });
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0px;
    }
</style>