<script>
	import Navbar from "../navbar.svelte";
</script>
<div class="col-span-9">
    <Navbar />
    <div class="col-span-9 mt-14 bg-slate-100 grid grid-cols-9 min-h-screen">
        <slot />
    </div>
    
</div>
