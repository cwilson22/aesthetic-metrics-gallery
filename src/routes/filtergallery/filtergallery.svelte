<script>
    import { onMount } from "svelte";
    import { Gallery } from 'flowbite-svelte';
  
    // List of images with categories
    let images = [
      { alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg', category: "Nature" },
      { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg', category: "Clothes" },
      { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg', category: "Stuff" },
      { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg', category: "Nature" },
      { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg', category: "Stuff" },
      { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg', category: "Clothes" },
      { alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg', category: "Stuff" },
      { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg', category: "Stuff" },
      { alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg', category: "Stuff" },
      { alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg', category: "Stuff" },
      { alt: 'playstation', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg', category: "Nature" },
      { alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg', category: "Clothes" }
    ];
  
    let categories = ["All", "Nature", "Clothes", "Stuff"];
    let selectedCategory = "All";
  
    // Filter images based on selected category
    let filteredImages = images;
  
    function filterGallery() {
      if (selectedCategory === "All") {
        filteredImages = images;
      } else {
        filteredImages = images.filter(img => img.category === selectedCategory);
      }
    }
  
    // Run the filter function when the category changes
    $: filterGallery();
</script>

<div class="max-w-4xl mx-auto">
    <!-- Dropdown to filter -->
    <div class="mb-4">
      <label for="category" class="block text-sm font-medium text-gray-700">Filter by Category:</label>
      <select
        bind:value={selectedCategory}
        on:change={filterGallery}
        class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
      >
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    </div>
  
    <!-- Image Gallery -->
    <Gallery items={filteredImages} class="gap-4 grid-cols-2 md:grid-cols-4 m-2" />
</div>