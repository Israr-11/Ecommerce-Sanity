export default {
  //It's like the details of the product section of our ecommerce sanity enabled product's display
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    //fields array
    {
      name: "image",
      title: "Image",
      type: "array",
      //Array of image
      of: [{ type: "image" }],
      options: {
        hotspot: true, //Hotspot makes it possible to responsively adapt images to different
        //aspect ratios at display time. The default value for hotspot is false.
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug", //unique url or string
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
  ],
};
