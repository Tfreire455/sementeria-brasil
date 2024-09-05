// src/api.js
import axios from 'axios';

// URL base da API (substitua pela URL real da sua API)
const API_BASE_URL = 'https://api.sementeriabrasil.com';

// Instância do axios configurada com a URL base
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Tempo limite para requisições em milissegundos
});

// Função para obter todos os produtos
export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    throw error;
  }
};

// Função para obter um produto específico por ID
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter produto com ID ${id}:`, error);
    throw error;
  }
};

// Função para adicionar um novo produto
export const addProduct = async (product) => {
  try {
    const response = await api.post('/products', product);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar produto:', error);
    throw error;
  }
};

// Função para atualizar um produto existente
export const updateProduct = async (id, product) => {
  try {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar produto com ID ${id}:`, error);
    throw error;
  }
};

// Função para deletar um produto
export const deleteProduct = async (id) => {
  try {
    await api.delete(`/products/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar produto com ID ${id}:`, error);
    throw error;
  }
};

export default api;
