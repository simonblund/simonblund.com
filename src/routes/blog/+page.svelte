<script>
    export let data
    console.log(JSON.stringify(data))
</script>
<div class="text-center pt-16 bg-slate-50 col-span-5 col-start-3">
    <h1 class="text-xl">Blog</h1>
    <p class="font-serif pt-2">
        I do not promise to write things here.  <br>
        But the things written will be the tings I would have wanted to know before I learned them. <br>
        Enjoy!
    </p>

    <div class="pt-6">
        {#each data.posts as post}

        <div class="py-6 px-4 text-left">
            <a href={post.path}>
                <h2 class="text-xl"><span class="text-m text-slate-500">{post.meta.date}</span> - {post.meta.title}</h2> 
            </a>
            <p class="text-left text-slate-800">{post.meta.description}</p>
        </div>
    
         {/each}

    </div>
    
</div>