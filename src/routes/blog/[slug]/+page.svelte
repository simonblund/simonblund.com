<script>
    export let data;
</script>
  
  <article class="col-span-5 bg-red-100">
    <h1>{ data.title }</h1>
    <p>Published: {data.date}</p>
    we
    <svelte:component this={data.content} />
  </article>