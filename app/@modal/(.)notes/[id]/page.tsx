import NotePreview from './NotePreview.client';
import { fetchNoteById } from '@/lib/api';

interface NoteModalPageProps {
  params: Promise<{ id: string }>;
}

export default async function NoteModalPage({ params }: NoteModalPageProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NotePreview note={note} />;
}
