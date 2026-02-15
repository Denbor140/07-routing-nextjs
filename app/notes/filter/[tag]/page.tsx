import NoteList from '@/components/NoteList/NoteList';
import { fetchNoteByTag } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface NotesTagPageProps {
  params: Promise<{ tag: string }>;
}

export default async function NotesTagPage({ params }: NotesTagPageProps) {
  const { tag } = await params;
  console.log(tag);

  const filterTag = tag === 'all' ? undefined : tag;
  const res = await fetchNoteByTag(filterTag);
  console.log(res);

  return (
    <div>
      <NoteList notes={res} />
    </div>
  );
}
