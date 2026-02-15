import axios from 'axios';
import type { Note } from '@/types/note';

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';

export const fetchNotes = async (
  searchText: string,
  page: number,
  perPage: number,
  tag?: string
) => {
  const { data } = await axios.get<FetchNotesResponse>('/notes', {
    params: {
      search: searchText,
      page,
      perPage,
      tag,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const createNote = async (
  newNote: Pick<Note, 'title' | 'content' | 'tag'>
) => {
  const { data } = await axios.post<Note>('/notes', newNote, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteNote = async (id: string) => {
  const { data } = await axios.delete<Note>(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await axios.get<Note>(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const fetchNoteByTag = async (tag?: string): Promise<Note[]> => {
  const { data } = await axios.get<Note[]>(`/notes`, {
    params: { tag },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
