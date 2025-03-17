<script lang="ts">
    import { onMount } from "svelte";
    import { Gallery, Toggle, Img, Button } from 'flowbite-svelte';

    type Img = {
        src: string;
        alt: string;
        exp: string;
        nodes: number;
        stream: boolean;
    };
    let images: Img[] = [];
    onMount(async () => {
        const response = await fetch('/data.json');
        images = await response.json();
        // images = images.filter(img => ['src/lib/images/exp0/graph155.png', 'src/lib/images/exp0/graph224.png', 'src/lib/images/exp0/graph229.png','src/lib/images/exp0/graph233.png', 'src/lib/images/exp0/graph292.png','src/lib/images/exp0/graph324.png','src/lib/images/exp0/graph331.png','src/lib/images/exp0/graph339.png','src/lib/images/exp0/graph371.png','src/lib/images/exp0/graph441.png','src/lib/images/exp0/graph515.png','src/lib/images/exp0/graph716.png','src/lib/images/exp0/graph722.png','src/lib/images/exp0/graph746.png','src/lib/images/exp0/graph748.png','src/lib/images/exp0/graph759.png','src/lib/images/exp0/graph779.png','src/lib/images/exp0/graph838.png','src/lib/images/exp0/graph910.png','src/lib/images/exp0/graph938.png','src/lib/images/exp0/graph1006.png','src/lib/images/exp0/graph1017.png','src/lib/images/exp0/graph1022.png','src/lib/images/exp0/graph1083.png','src/lib/images/exp0/graph1121.png','src/lib/images/exp0/graph1134.png','src/lib/images/exp0/graph1642.png'].includes(img.src));
    });

    const images4 = [
      {alt: 'xyz', src: 'src/lib/images/exp0/graph155.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph224.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph229.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph233.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph292.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph324.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph331.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph339.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph371.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph441.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph515.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph716.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph722.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph746.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph748.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph759.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph779.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph838.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph910.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph938.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph1006.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph1017.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph1022.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph1083.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph1121.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph1134.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph1642.png'},
      {alt: 'graph1661, Crossings+asdfasdnkfljads, Obj=23', src: 'src/lib/images/exp0/graph1661.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph1674.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph1719.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph1807.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph1808.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph1827.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph1912.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2110.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2164.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2218.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2241.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2291.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2294.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2319.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2377.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2615.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2717.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2728.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2773.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2783.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2817.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph2887.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph3112.png'},
      {alt: 'xyz', src: 'src/lib/images/exp0/graph3112.png'}
    ];

  
    let categories = ["Crossings", "EdgeLength", "CrossingAngle", "CrossingFairness", "LengthFairness", "NodeSymmetry", "EdgeSymmetry", "EdgeBundling", "MinMaxCrossings", "MaxPlanar", "Crossings + EdgeLength", "Crossings + CrossingAngle", "Crossings + CrossingFairness", "Crossings + LengthFairness", "Crossings + NodeSymmetry", "Crossings + EdgeSymmetry", "Crossings + EdgeBundling", "Crossings + MinMaxCrossings", "Crossings + MaxPlanar", "EdgeLength (fixed x)", "CrossingAngle (fixed x)", "LengthFairness (fixed x)", "NodeSymmetry (fixed x)", "EdgeSymmetry (fixed x)", "EdgeLength + CrossingAngle (fixed x)", "EdgeLength + LengthFairness (fixed x)", "EdgeLength + NodeSymmetry (fixed x)", "Bend + EdgeSymmetry (fixed x)"];
    let selectedExp = "Crossings";
    let selectedStream = false;
    let selectedGraph = "All";

    let filters = categories.map(() => false);
  
    let filteredImages = images;
  
    function filterGallery() {
        if (selectedGraph === "All") {
            filteredImages = images.filter(img => img.stream === selectedStream);
        } else {
            filteredImages = images.filter(img => img.stream === selectedStream && img.src === selectedGraph);
        }
        filteredImages = filteredImages.filter(item =>
            filters[categories.indexOf(item.exp)]
        );

        // if (selectedExp === "All" && selectedGraph === "All") {
        //     filteredImages = images.filter(img => img.stream === selectedStream);
        // } else if (selectedExp === "All") {
        //     filteredImages = images.filter(img => img.stream === selectedStream && img.src === selectedGraph);
        // } else if (selectedGraph === "All") {
        //     filteredImages = images.filter(img => img.stream === selectedStream && img.exp === selectedExp);
        // } else {
        //     filteredImages = images.filter(img => img.stream === selectedStream && img.src === selectedGraph && img.exp === selectedExp);
        // }
    }

    function selectAll(stidx: number, endidx: number) {
        filters = filters.slice(stidx, endidx).map(() => true);
        filterGallery();
    }

    function deselectAll(stidx: number, endidx: number) {
        filters = filters.slice(stidx, endidx).map(() => false);
        filterGallery();
    }
  
    // Run the filter function when the category changes
    $: filterGallery();
</script>


<div class="max-w-5xl mx-auto m-2">
    <!-- <div>{JSON.stringify(images)}</div> -->

    <div class="flex gap-4 items-center mt-3 mb-2">
        <p class="w-64 flex-1 text-sm font-medium text-gray-700">Individual Aesthetic Metrics:</p>
        <Button on:click={() => selectAll(0,10)} class="flex-none" color="alternative">Select All</Button>
        <Button on:click={() => deselectAll(0,10)} class="flex-none" color="alternative">Deselect All</Button>
    </div>
    <div class="flex flex-wrap gap-2 mb-3">
        {#each categories.slice(0, 10) as category, index}
            <Toggle bind:checked={filters[index]} on:change={filterGallery}>{category}</Toggle>
        {/each}
    </div>
    

    <div class="mb-4 flex items-center">
      <label for="category" class="text-sm font-medium text-gray-700 me-4">Filter by Graph:</label>
      <select
        bind:value={selectedExp}
        on:change={filterGallery}
        class="mt-1 block w-50 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
      >
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    </div>
  
    <div class="grid grid-cols-3 gap-4">
      {#each filteredImages as item}
          <div class="relative ring-2 ring-gray-300 p-2 pb-5 rounded-lg">
              <img src={item.src} alt={item.alt} class="h-auto max-w-full rounded-lg max-h-60" />
              <div class="absolute bottom-0 left-0 text-gray text-sm p-2 w-full">
                  {#if item.alt}
                      {item.alt}
                  {/if}
              </div>
          </div>
      {/each}
    </div>

    <!-- <Gallery items={images4} class="gap-4 grid-cols-2 md:grid-cols-4 m-2" let:item>
      <div class="h-auto max-w-full max-h-60 mb-4">
        <Img src={item.src} alt={item.alt} class="max-h-60" caption="{item.alt}" />
      </div>
    </Gallery> -->
    <!-- <Gallery items={filteredImages} class="gap-4 grid-cols-2 md:grid-cols-4 m-2"></Gallery> -->
</div>