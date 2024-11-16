import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://adflmboaqqvopezqeqmw.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkZmxtYm9hcXF2b3BlenFlcW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3Nzc5MzIsImV4cCI6MjA0NzM1MzkzMn0.9GsWLiZn7ug_i_yKxBgzXycb5CwBZzn2yBy3GmJmINU",
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkZmxtYm9hcXF2b3BlenFlcW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3Nzc5MzIsImV4cCI6MjA0NzM1MzkzMn0.9GsWLiZn7ug_i_yKxBgzXycb5CwBZzn2yBy3GmJmINU"
    }
})