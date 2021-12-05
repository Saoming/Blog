const API_URL = import.meta.env.PUBLIC_WP_HEADLESS_URI;

async function fetchAPI( query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch( API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });
        
    const json = await res.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error('Failed to fetch API');
    }
  
    return json.data;
}


export async function getPostBySlug(slug) {
    const data = await fetchAPI(`
    {
        post(id: "${slug}", idType: URI) {
          title
          content
        }
      }
    `);
    return data?.post;
}

export async function getAllPostWithSlugs() {
    const data = await fetchAPI(`
    {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);
    return data?.posts;
}

