// import { imageUrlBuilder } from '@sanity/image-url';
import { createClient } from "@sanity/client";
// import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-08-21', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_SECRET,
})

// const builder = imageUrlBuilder(client);

// export function urlFor(source: SanityImageSource) {
//   return builder.image(source).width(800).url();
// }
