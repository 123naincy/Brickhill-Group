import axios from "axios";
import type { Newsletter, Section, SectionType } from "./types";

const BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export const createNewsletter = async (payload: { id: string; title: string }) => {
  const { data } = await api.post<{ id: string; title: string }>("/newsletter", payload);
  return data;
};

export const getNewsletters = async () => {
  const { data } = await api.get<Newsletter[]>("/newsletters");
  return data;
};

export const getNewsletterById = async (id: string) => {
  const { data } = await api.get<{ newsletter: Newsletter; sections: Section[] }>(`/newsletter/${id}`);
  return data;
};

export const createSection = async (payload: {
  newsletter_id: string;
  type: SectionType;
  title: string;
  content: string;
  image_url: string;
  position: number;
}) => {
  const { data } = await api.post<{ section: Section }>("/section", payload);
  return data.section;
};

export const updateSection = async (
  id: number,
  payload: {
    type: SectionType;
    title: string;
    content: string;
    image_url: string;
    position: number;
  }
) => {
  const { data } = await api.put<{ section: Section }>(`/section/${id}`, payload);
  return data.section;
};

export const deleteSection = async (id: number) => {
  await api.delete(`/section/${id}`);
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);
  const { data } = await api.post<{ imageUrl: string }>("/upload", formData);
  return data.imageUrl;
};
