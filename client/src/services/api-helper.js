import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}


// =========================CRUD POST===================================

export const createPost = async (data) => {
  const resp = await api.post('/posts', { post: data })
  return resp.data
}

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`)
  return resp.data
}

export const getAllPosts = async () => {
  const resp = await api.get('/posts')
  return resp.data
}

export const updatePost = async (id, data) => {
  const resp = await api.put(`/posts/${id}`, data);
  return resp.data
}

export const getUserPosts = async (user_id) => {
  const resp = await api.get(`/users/${user_id}/posts`)
  return resp.data
}

export const destroyPost = async (id) => {
  const resp = await api.delete(`/posts/${id}`)
  return resp.data
}


// ================CRUD Comments=====================================

export const createComment = async (postId, userId, data) => {
  data.user_id = userId
  data.post_id = postId
  const resp = await api.post(`/posts/${postId}/comments`, { comment: data })
  return resp.data
}

export const getAllComments = async (id) => {
  const resp = await api.get(`/posts/${id}/comments`)
  return resp.data
}


// =================USERS========================================
export const getAllUsers = async () => {
  const resp = await api.get(`/users`)
  return resp.data
 }