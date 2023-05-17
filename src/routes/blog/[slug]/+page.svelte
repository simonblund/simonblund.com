<script>
    export let data;
</script>
  
  <article class="bg-slate-50 col-span-5 col-start-3 px-4 py-6 prose">
    <h1 class=" font-semibold text-2xl">{ data.title }</h1>
    <p>Published: {data.date}</p>

    
    
    <svelte:component this={data.content} />
  </article>