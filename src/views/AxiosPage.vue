<template>
    <h1>JSON Placeholder API</h1>
    <div>
      <h6>or... in case of failed http request go to the link bellow</h6>
      <RouterLink
        class="btn btn-secondary"
        :to="'/failedFetch'">
        Failed REQUEST
      </RouterLink>  
    </div>
    <div>
        <ul v-if="posts && posts.length">
            <li v-for="post of posts">
                <p><strong>{{post.title}}</strong></p>
                <p>{{post.body}}</p>
            </li>
        </ul>
    
        <ul v-if="errors && errors.length">
            <li v-for="error of errors">
                {{error.message}}
            </li>
        </ul>
    </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: [],
        errors: []
      }
    },
  
    // Fetches posts when the component is created.
    created() {
      axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
  </script>